import type { NextPage } from "next";
import { TextField } from "@satel/formik-polaris";
import { Page, Button, FormLayout, Card } from "@shopify/polaris";
import { Form, Formik } from "formik";
import { loginSchema } from "../utils/loginSchema";
import { useRouter } from "next/router";
import { useLoginMutation } from "../graphql/generated/types";
import { setToken } from "../utils/setToken";
interface valuesType {
  email: string;
  password: string;
}

const Login: NextPage = () => {
  const { mutateAsync } = useLoginMutation({endpoint:'http://localhost:4000/graphql',fetchParams:{headers:{
    "Content-Type":'application/json'
  }}});
  const {push}= useRouter()
  const handleSubmit = async({ email, password }: valuesType) => {
    const data = await mutateAsync({ email, password });
    if(data.login.status && data.login.token){
      setToken(data.login.token)
      push('/dashboard')
    }
  };
  return (
    <Page
      title="Clinic"
      narrowWidth
      breadcrumbs={[{ content: "register", onAction: () => push("/register") }]}
    >
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
