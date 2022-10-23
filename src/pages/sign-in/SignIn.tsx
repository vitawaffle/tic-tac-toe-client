import { Link } from 'react-router-dom';

import Header from '../../components/header/Header';
import Layout from '../../components/Layout';
import FormRow from '../../components/FormRow';

const SignIn = () => (
  <>
    <Header />
    <Layout>
      <FormRow>
        <h3>Please, sign in</h3>
      </FormRow>
      <FormRow>
        <p>
          Already have an account? <Link to="/login">Log in</Link>
        </p>
      </FormRow>
    </Layout>
  </>
);

export default SignIn;
