import { useEffect, useMemo, useState } from 'react'

function UsersPage() {
  const [users, setUsers] = useState([])
  const [query, setQuery] = useState('')
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const controller = new AbortController()

    async function loadUsers() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users', {
          signal: controller.signal,
        })

        if (!response.ok) {
          throw new Error(`მომხმარებლების ჩატვირთვა ვერ მოხერხდა (${response.status}).`)
        }

        const result = await response.json()
        if (!Array.isArray(result)) {
          throw new Error('API-მ მოსალოდნელი ფორმატის მონაცემები არ დააბრუნა.')
        }

        setUsers(result)
      } catch (requestError) {
        if (!controller.signal.aborted) {
          setError(requestError.message || 'მონაცემების ჩატვირთვისას შეცდომა მოხდა.')
        }
      } finally {
        if (!controller.signal.aborted) {
          setIsLoading(false)
        }
      }
    }

    loadUsers()
    return () => controller.abort()
  }, [])

  const filteredUsers = useMemo(() => {
    const normalizedQuery = query.trim().toLocaleLowerCase()
    if (!normalizedQuery) return users

    return users.filter((user) =>
      [user.name, user.username, user.email, user.company?.name, user.address?.city]
        .filter(Boolean)
        .some((value) => value.toLocaleLowerCase().includes(normalizedQuery)),
    )
  }, [query, users])

  return (
    <section className="users-section section-wrap">
      <div className="page-container">
        <div className="users-heading">
          <p className="eyebrow">JSONPLACEHOLDER · GET /USERS</p>
          <h1>მომხმარებლების დირექტორია</h1>
          <p className="section-subtitle">
            მონაცემები იტვირთება JSONPlaceholder API-დან. მოძებნე მომხმარებელი
            სახელით, ელფოსტით, კომპანიით ან ქალაქით.
          </p>
        </div>

        <label className="users-search">
          <span aria-hidden="true">⌕</span>
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="მოძებნე მომხმარებელი..."
            aria-label="მომხმარებლების ძებნა"
          />
        </label>

        {isLoading ? (
          <p className="users-message" role="status">მომხმარებლები იტვირთება...</p>
        ) : error ? (
          <p className="users-message users-error" role="alert">{error}</p>
        ) : (
          <>
            <p className="users-count" aria-live="polite">
              ნაჩვენებია {filteredUsers.length} / {users.length} მომხმარებელი
            </p>
            {filteredUsers.length > 0 ? (
              <div className="users-grid">
                {filteredUsers.map((user) => (
                  <article className="user-card" key={user.id}>
                    <div className="user-avatar" aria-hidden="true">
                      {user.name.charAt(0)}
                    </div>
                    <div className="user-card-content">
                      <h2>{user.name}</h2>
                      <p className="user-username">@{user.username}</p>
                      <a href={`mailto:${user.email}`}>{user.email}</a>
                      <p className="user-details">
                        {user.company?.name || 'კომპანია მითითებული არ არის'}
                      </p>
                      <p className="user-details">{user.address?.city || 'ქალაქი მითითებული არ არის'}</p>
                    </div>
                  </article>
                ))}
              </div>
            ) : (
              <p className="users-message">შენი ძიებით მომხმარებელი ვერ მოიძებნა.</p>
            )}
          </>
        )}
      </div>
    </section>
  )
}

export default UsersPage
