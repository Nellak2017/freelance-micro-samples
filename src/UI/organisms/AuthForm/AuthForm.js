import { CenteredContainer, AuthContainer } from './AuthForm.elements.js'
import { MAX_WIDTH } from '@/Core/components/AuthForm/AuthForm.constants.js'
export const AuthForm = ({ children }) => <CenteredContainer><AuthContainer maxwidth={MAX_WIDTH}>{children}</AuthContainer></CenteredContainer>
export default AuthForm
// TODO: Fix the logo displayed it is low resolution for the form
// TODO: Fix accessibility error 'Password forms should have optionally hidden username fields for accessibility: more info at https://goo.gl/9p2vKg' emanating from the forgot-password component
// TODO: To fix the 'can not submit undefined' error you have to set the default values for the Auth forms when using react hook form!