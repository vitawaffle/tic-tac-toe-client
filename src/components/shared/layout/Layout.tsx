import LayoutProps from './LayoutProps';

const Layout = ({ children }: LayoutProps) => (
  <div className="container">
    {children}
  </div>
);

export default Layout;
