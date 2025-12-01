import AuthForm from '@/UI/organisms/AuthForm/AuthForm'
import { ResetPassword as ResetPasswordComponent } from '@/UI/organisms/AuthForm/AuthForm.slots'
const ResetPassword = () => (<AuthForm><ResetPasswordComponent /></AuthForm>)
export default ResetPassword