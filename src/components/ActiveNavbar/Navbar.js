import { NavLink } from 'react-router-dom'
import { useAuth } from '../AuthenticationAndProtectedRoutes'

// NavLink it's add active calssName to the link to make styles and also if using CSSinJs it's return a prop isActive Boolean flag to conditional styling 

export const ANavbar = () => {
  const auth = useAuth()
  const navLinkStyles = ({ isActive }) => {
    return {
      fontWeight: isActive ? "bold" : 'normal',
      textDecoration: isActive ? 'none' : 'underline'
    }
  }
  return (
    <nav className='primary-nav'>
      <NavLink style={navLinkStyles} to='/'>Home</NavLink>
      <NavLink style={navLinkStyles} to='/about' >ِAbout</NavLink>{/* */}
      <NavLink style={navLinkStyles} to='/products' >Products</NavLink>
      <NavLink style={navLinkStyles} to='/profile' >Profile</NavLink>
      <NavLink style={navLinkStyles} to='/users' >Users</NavLink> {/* For test */}
      {!auth.user && (
        <NavLink to='/login' style={navLinkStyles}>
          Login
        </NavLink>
      )}
    </nav>
  )
}
