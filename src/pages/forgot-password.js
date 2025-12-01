import AuthForm from '@/UI/organisms/AuthForm/AuthForm'
import { ForgotPassword as ForgotPasswordComponent } from '@/UI/organisms/AuthForm/AuthForm.slots'
const ForgotPassword = () => (<AuthForm><ForgotPasswordComponent/></AuthForm>)
export default ForgotPassword