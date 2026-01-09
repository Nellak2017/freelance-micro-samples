import { PASSWORD_RULES } from '@/Core/shared/fieldRules'
export const MAX_WIDTH = 409
// --- Data for content on Auth form
export const EMAIL_FIELD = { key: 'email', htmlFor: 'email', label: 'Email Address', fieldName: 'email', placeholder: 'email@example.com', autoComplete: 'username', rules: { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i, message: 'Invalid email format' } }, }
export const PASSWORD_FIELD = { key: 'password', htmlFor: 'password', label: 'Password', fieldName: 'password', placeholder: 'Enter your password', autoComplete: 'current-password', rules: PASSWORD_RULES, }
export const SIGN_IN_FORM = { text: "Don't have an account?", link: '/sign-up', linkText: 'Sign up.', emailButtonText: 'Sign in with Email', forgotPasswordText: 'Forgot your password?', forgotPasswordRedirect: '/forgot-password', initialFormState: { [EMAIL_FIELD.fieldName]: '', [PASSWORD_FIELD.fieldName]: '' }, }
export const SIGN_UP_FORM = { text: 'Have an account?', link: '/sign-in', linkText: 'Sign in.', emailButtonText: 'Sign up with Email', title: 'Sign up', initialFormState: { [EMAIL_FIELD.fieldName]: '', [PASSWORD_FIELD.fieldName]: '' }, }
export const FORGOT_PASSWORD_FORM = { emailButtonText: 'Send Reset Instructions', title: 'Enter Account Email', initialFormState: { [EMAIL_FIELD.fieldName]: '' }, }
export const RESET_PASSWORD_FORM = { emailButtonText: 'Reset password', title: 'Reset Your Password', initialFormState: { [EMAIL_FIELD.fieldName]: 'example@example.com', [PASSWORD_FIELD.fieldName]: '' }, }

export const SIGN_UP_SUCCESS = 'Confirm your Email to finish signing up.'
export const SIGN_IN_SUCCESS = 'You have Successfully Signed In.'
export const SIGN_OUT_SUCCESS = 'You have Successfully Signed Out.'
export const REQUEST_PASSWORD_RESET_SUCCESS = 'Check your Email to finish updating your password.'
export const RESET_PASSWORD_SUCCESS = 'You have Successfully Changed Your Password.'
export const DELETE_SUCCESS = 'You have Successfully deleted your account.'