import { useParams } from 'react-router-dom'

export const UserDetailes = () => {
  const { userId } = useParams()
  return (
    <div>User Detailes about user {userId}</div>
  )
}
