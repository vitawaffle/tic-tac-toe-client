import Layout from '../../shared/layout/Layout';
import Header from '../../shared/header/header/Header';

const HomeLayout = () => (
  <>
    <Header />
    <Layout>
      <div className="row">
        <div className="col">
          <h1>Hello, World!</h1>
        </div>
      </div>
    </Layout>
  </>
);

export default HomeLayout;
