import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <div>
          <li><h1 className="title"><Link to="/">HerCal</Link></h1></li>
          <span className="title-text">Un calendario</span>
          <p className="title-text">de efemérides de mujeres</p>
        </div>
        <div className="nav-right-side">
         <li><Link to="/hercal/about">About</Link></li>
         <li><Link to="/">Shop</Link></li>
         <li><a href="https://stripe.com/" target="_blank" rel="noreferrer" className="dona-btn">Dona</a></li>
         <li><Link to="/herstory">HerStory</Link></li>
        </div>
      </ul>
    </nav>
  )
}

export default Nav;