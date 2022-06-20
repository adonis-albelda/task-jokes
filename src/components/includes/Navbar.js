import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import '../../styles/navbar.css';
export default function Navbar() {
  return (
    <nav className='nav'>
      <div className='container'>
        <ul>
          <CustomLink to='home'>So funktioniert's</CustomLink>
          <CustomLink to='about'>sonderangebot</CustomLink>
          <CustomLink to='/'>
            <div className="with-icon">
              <img className="icon" src={require(`../../assets/frontend1/shape.png`)}/>
              <p>mein bereich</p>
            </div>
            <img className="icon" src={require(`../../assets/frontend1/path_2.png`)}/>
          </CustomLink>
        </ul>
      </div>
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