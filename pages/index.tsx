import type { NextPage } from 'next'
import { TextField } from "@satel/formik-polaris";
import { Page, Button, FormLayout, Card } from "@shopify/polaris";
import { Form, Formik } from "formik";
import { loginSchema } from "../utils/loginSchema";
interface valuesType{
  email:string
  password:string
}

 const Login:NextPage= () => {
  const handleSubmit = (values: valuesType) => {
    alert(JSON.stringify(values));
  };

  return (
    <Page title="Clinic" narrowWidth breadcrumbs={[{content:"register" , url:"/register"}]}>
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