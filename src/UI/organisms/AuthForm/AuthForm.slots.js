import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import { useForm } from 'react-hook-form'
import { StyledAuthForm, SignInContainer, } from './AuthForm.elements.js'
import { handleSignInWithEmail, handleSignUpWithEmail, handleRequestPasswordReset, handleResetPassword } from '@/Infra/workflows/AuthForm.handlers.js'
import { MAX_WIDTH, SIGN_IN_DATA, SIGN_UP_DATA, FORGOT_PASSWORD_BUTTON_DATA, RESET_PASSWORD_BUTTON_DATA } from '@/Core/components/AuthForm/AuthForm.constants.js'
import { Logo } from '@/UI/atoms/AvatarLink/AvatarLink.slots.js'
import { ForgotPasswordLink, CallToAction, EmailFormInput, PasswordFormInput } from './AuthForm.slots.helpers.js'

// TODO: Use the responsive header variants you will define later instead so it is simpler
// TODO: Responsive (especially for horizontal phones!), Semantic last check, Light House Check
// TODO: Fix type error when form submits with nothing in it
// TODO: Consider extracting the hook below here to a custom hook
// TODO: Experiment with Paper variant outlined for a better look
const GeneralAuthForm = ({ state: { emailButtonText = '', title = '', snackbarText = '' } = {}, services: { handleEmailFormSubmit = handleSignInWithEmail } = {}, children }) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()
    const [isSnackbarOpen, setIsSnackbarOpen] = useState(false)
    const handleOpen = () => setIsSnackbarOpen(true)
    const handleClose = (_, reason) => reason === 'clickaway' ? undefined : setIsSnackbarOpen(false)
    return (
        <StyledAuthForm onSubmit={handleSubmit((data => handleEmailFormSubmit({ router, handleOpen, ...data })))} method='POST' id='auth-form' maxwidth={MAX_WIDTH} aria-labelledby='auth-form-title'>
            <Logo state={{ size: 96 }} /><h2 id='auth-form-title'>{title}</h2>
            {React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors }) : child)}
            <SignInContainer><Button type='submit' name='email-auth' id='email-auth' title={emailButtonText} sx={{ width: '80%', borderRadius: 2 }}>{emailButtonText}</Button></SignInContainer>
            <Snackbar open={isSnackbarOpen} autoHideDuration={6000} onClose={handleClose}><Alert onClose={handleClose} severity='success' variant='filled' sx={{ color: 'text.primary' }}>{snackbarText}</Alert></Snackbar>
        </StyledAuthForm>
    )
}
export const SignIn = () => (
    <>
        <GeneralAuthForm state={SIGN_IN_DATA}>
            <CallToAction state={SIGN_IN_DATA} />
            <EmailFormInput />
            <PasswordFormInput />
        </GeneralAuthForm>
        <ForgotPasswordLink state={SIGN_IN_DATA} />
    </>)
export const SignUp = () => (
    <GeneralAuthForm state={SIGN_UP_DATA} services={{ handleEmailFormSubmit: handleSignUpWithEmail }}>
        <CallToAction state={SIGN_UP_DATA} /><EmailFormInput /><PasswordFormInput />
    </GeneralAuthForm>)
export const ForgotPassword = () => (<GeneralAuthForm state={FORGOT_PASSWORD_BUTTON_DATA} services={{ handleEmailFormSubmit: handleRequestPasswordReset }}><EmailFormInput /></GeneralAuthForm>)
export const ResetPassword = () => (<GeneralAuthForm state={RESET_PASSWORD_BUTTON_DATA} services={{ handleEmailFormSubmit: handleResetPassword }}><PasswordFormInput /></GeneralAuthForm>)