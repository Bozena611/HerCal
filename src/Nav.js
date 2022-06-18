import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li><Link to="/">HerCal</Link></li>
        <li><Link to="/herstory">HerStory</Link></li>
      </ul>
    </nav>
  )
}

export default Nav;