import { CenteredContainer, AuthContainer } from './AuthForm.elements.js'
import { MAX_WIDTH } from '@/Core/components/AuthForm/AuthForm.constants.js'
export const AuthForm = ({ children }) => <CenteredContainer><AuthContainer maxwidth={MAX_WIDTH}>{children}</AuthContainer></CenteredContainer>
export default AuthForm