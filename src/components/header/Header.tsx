import { Link } from 'react-router-dom';

import HeaderLink from './HeaderLink';

const Header = () => (
  <nav className="navbar navbar-expand-lg bg-light">
    <div className="container-fluid">
      <Link to="/home" className="navbar-brand">
        Tic-Tac-Toe
      </Link>
      <button
        type="button"
        className="navbar-toggler"
        data-bs-toggle="collapse"
        data-bs-target="#headerContent"
        aria-controls="headerContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div id="headerContent" className="collapse navbar-collapse">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <HeaderLink to="/home">
            Home
          </HeaderLink>
        </ul>
        <div className="d-flex">
          <Link to="/login" className="btn btn-outline-primary">
            Log in
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export default Header;
