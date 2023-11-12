import { Link, useLocation, useNavigate } from 'react-router-dom';
import './header.scss';

export function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Verifica si la ruta actual es "/favorites"
  const isFavoritesPage = location.pathname === '/favorites';

  const handleClick = () => {
    // Cambia la ruta y el texto del párrafo en función de la página actual
    navigate(isFavoritesPage ? '/' : '/favorites');
  };

  return (
    <header>
      <h1>COUNTRIES</h1>

      <Link
        to={isFavoritesPage ? '/' : '/favorites'}
        style={{ textDecoration: 'none' }}
      >
        <p onClick={handleClick}>
          {isFavoritesPage ? (
            <img src="./home-icon.png" alt="home icon" width={40} />
          ) : (
            <img src="../star-icon.png" alt="my favorites" width={40} />
          )}
        </p>
      </Link>
    </header>
  );
}
