import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/about' >ِAbout</Link>{/* this is an absolute route {'/about'} and this is relative path {'about'} */}
    </nav>
  )
}