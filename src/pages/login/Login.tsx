import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import FormRow from '../../components/FormRow';
import LoginForm from './LoginForm';

const Login = () => (
  <>
    <Header />
    <Layout>
      <FormRow className="mb-4">
        <h3>Please, log in</h3>
      </FormRow>
      <FormRow className="mb-2">
        <LoginForm />
      </FormRow>
      <FormRow>
        <p>
          Don't have an account? <Link to="/sign-in">Sign in</Link>
        </p>
      </FormRow>
    </Layout>
  </>
);

export default Login;
