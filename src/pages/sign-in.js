import AuthForm from '@/UI/organisms/AuthForm/AuthForm'
import { SignIn as SignInComponent } from '@/UI/organisms/AuthForm/AuthForm.slots'
const SignIn = () => (<AuthForm><SignInComponent/></AuthForm>)
export default SignIn