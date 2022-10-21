import { Link, useLocation } from 'react-router-dom';

import HeaderLinkProps from './HeaderLinkProps';

const HeaderLink = ({ to, children }: HeaderLinkProps) => {
  const location = useLocation();

  const isActive = () => to.startsWith(location.pathname);

  return (
    <li className="nav-item">
      <Link
        to={to}
        className={`nav-link ${isActive() ? 'active' : ''}`}
        aria-current={isActive() ? 'page' : undefined}
      >
        {children}
      </Link>
    </li>
  );
};

export default HeaderLink;
