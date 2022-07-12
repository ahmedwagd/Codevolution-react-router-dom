import { Outlet, useSearchParams } from 'react-router-dom'

function Users() {
  const [searchParams, setSearchParams] = useSearchParams()
  const showActiveUsers = searchParams.get('filter') === 'active'
  const showActiveAndNewUsers = searchParams.get('filter') === 'active&new'
  const showNewUsers = searchParams.get('filter') === 'new'
  return (
    <div>
      <h2>User 1</h2>
      <h2>User 2</h2>
      <h2>User 3</h2>
      <Outlet />
      <div>
        <button onClick={() => setSearchParams({ filter: 'active' })}>Active Users</button>
        <button onClick={() => setSearchParams({ filter: 'new' })}>New Users</button>
        <button onClick={() => setSearchParams({ filter: 'active&new' })}>Active New Users</button>
        <button onClick={() => setSearchParams({})}>Reset Filter</button>
      </div>
      {
        showActiveUsers
          ? (<h2>Showing active users</h2>)
          : showNewUsers
            ? (<h2>Showing new users</h2>)
            : showActiveAndNewUsers
              ? (<h2>Showing active and new users</h2>)
              : (<h2>Showing all users</h2>)
      }
    </div>
  )
}

export default Users