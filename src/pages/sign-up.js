import AuthForm from '@/UI/organisms/AuthForm/AuthForm'
import { SignUp as SignUpComponent } from '@/UI/organisms/AuthForm/AuthForm.slots'
const SignUp = () => (<AuthForm><SignUpComponent/></AuthForm>)
export default SignUp