import { Link } from 'react-router-dom';
import './header.scss';

export function Header() {
  return (
    <header>
      <h1>COUNTRIES</h1>
      <Link to="/favorites" style={{ textDecoration: 'none' }}>
        <p>My Favorites</p>
      </Link>
    </header>
  );
}
