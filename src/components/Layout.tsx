const Layout = ({ children }: LayoutProps) => (
  <div className="container">
    {children}
  </div>
);

export default Layout;

export type LayoutProps = {
  children: any;
};
