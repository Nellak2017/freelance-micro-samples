export const MAX_WIDTH = 409
export const AUTH_FORM_TYPES = { signUpOption: 'SignUp', signInOption: 'SignIn', forgotPasswordOption: 'ForgotPassword', resetPasswordOption: 'ResetPassword' }
export const QUERY_PARAM_KEYS = { SEARCH: 'search' }
// --- Data for content on Auth form
export const EMAIL_DATA = { rules: { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i, message: 'Invalid email format' } }, key: 'email', htmlFor: 'email', label: 'Email Address', placeholder: 'email@example.com', autoComplete: 'username',}
export const PASSWORD_DATA = { rules: { required: 'Password is required' }, key: 'password', htmlFor: 'password', label: 'Password', placeholder: 'Enter your password', autoComplete: 'current-password',}
export const SIGN_IN_DATA = { text: "Don't have an account?", link: '/signup', linkText: 'Sign up.', forgotPasswordText: 'Forgot your password?', forgotPasswordRedirect: '/forgot-password' }
export const SIGN_UP_DATA = { text: 'Have an account?', link: '/login', linkText: 'Sign in.', emailButtonText: 'Sign up with Email', title: 'Sign up' }
export const FORGOT_PASSWORD_BUTTON_DATA = { emailButtonText: 'Send Reset Instructions', title: 'Enter Account Email' }
export const RESET_PASSWORD_BUTTON_DATA = { emailButtonText: 'Reset password', title: 'Reset Your Password' }