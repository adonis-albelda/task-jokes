import { Link, useMatch, useResolvedPath } from 'react-router-dom'
export default function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className='site-title'>
        Site Name
      </Link>
      <ul>
        <CustomLink to='home'>Home</CustomLink>
        <CustomLink to='about'>About</CustomLink>
      </ul>
    </nav>
  )
}

function CustomLink ({ to, children, ...props }) {
  const resolvedPath = useResolvedPath(to)
  const isAactive = useMatch({path: resolvedPath.pathname, end:true})

  return (
    <li className={isAactive ? "active" : ""}>
      <Link to={to} {...props}>
        {children}
      </Link>
    </li>
  )
}