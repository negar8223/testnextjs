import * as Yup from "yup";

export const registerSchema = Yup.object().shape({
	email: Yup.string().email().required(),
	password: Yup.string().min(6).required(),
    confirmPassword: Yup.string()
	.oneOf([Yup.ref('password'), null], 'Passwords must match')

});