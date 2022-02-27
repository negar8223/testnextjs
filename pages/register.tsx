import type { NextPage } from "next";
import { TextField } from "@satel/formik-polaris";
import { Page, Button, FormLayout, Card } from "@shopify/polaris";
import { Form, Formik } from "formik";
import { registerSchema } from "../utils/registerSchema";
import { useRouter } from "next/router";
import { useRegisterMutation } from '../graphql/generated/types';

interface valuesType {
  email: string;
  password: string;
  confirmPassword: string;
}


const Register: NextPage = () => {
  const {mutateAsync} =useRegisterMutation({endpoint:'http://localhost:4000/graphql',fetchParams:{headers:{
    "Content-Type":'application/json'
  }}});
  const {push}= useRouter()
  const handleSubmit = async({email , password}: valuesType) => {
    const data = await mutateAsync({ email, password });
    if(data.createUser?.status){
      push('/')
    }
  };
  return (
    <Page
      title="Clinic"
      narrowWidth
      breadcrumbs={[{ content: "login",onAction:()=> push('/')}]}
    >
      <Card title="Register" sectioned>
        <Formik
          initialValues={{ email: "", password: "", confirmPassword: "" }}
          onSubmit={handleSubmit}
          validationSchema={registerSchema}
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
                <TextField
                  label="Confirm Password"
                  type="password"
                  name="confirmPassword"
                  autoComplete=""
                />
                <Button submit size="large" primary>
                  Register
                </Button>
              </FormLayout>
            </Form>
          )}
        </Formik>
      </Card>
    </Page>
  );
};
export default Register;
