import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components';

function Profile() {
  const auth = useAuth()
  const navigate = useNavigate()
  const handleLogout = () => {
    auth.logout()
    navigate('/')
  }
  return (
    <div>
      <h2>wellcome {auth.user}</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  )
}

export default Profile;