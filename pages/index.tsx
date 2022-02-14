import type { NextPage } from 'next'
import { TextField } from "@satel/formik-polaris";
import { Page, Button, FormLayout, Card } from "@shopify/polaris";
import { Form, Formik } from "formik";
import { loginSchema } from "../utils/loginSchema";
import { useRouter } from 'next/router';
interface valuesType{
  email:string
  password:string
}

 const Login:NextPage= () => {
  const handleSubmit = (values: valuesType) => {
    alert(JSON.stringify(values));
  };
  const {push} = useRouter()
  return (
    <Page title="Clinic" narrowWidth breadcrumbs={[{content:"register" , onAction:()=>push('/register')}]}>
      <Card title="Login" sectioned>
        <Formik
          initialValues={{ email: "", password: "" }}
          onSubmit={handleSubmit}
          validationSchema={loginSchema}
        >
          {() => (
            <Form>
                <FormLayout>
                <TextField
                  label="Email"
                  type="email"
                  name="email"
                  autoComplete=""
                />
                <TextField
                  label="password"
                  type="password"
                  name="password"
                  autoComplete=""
                />
                <Button submit size="large" primary>
                  Login
                </Button>
            </FormLayout>
              </Form>
          )}
        </Formik>
      </Card>
    </Page>
  );
};
export default Login;