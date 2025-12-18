import React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import { StyledAuthForm, SignInContainer, } from './AuthForm.elements.js'
import { handleSignInWithEmail, handleSignUpWithEmail, handleRequestPasswordReset, handleResetPassword } from '@/Infra/workflows/AuthForm.handlers.js'
import { MAX_WIDTH, SIGN_IN_DATA, SIGN_UP_DATA, FORGOT_PASSWORD_BUTTON_DATA, RESET_PASSWORD_BUTTON_DATA } from '@/Core/components/AuthForm/AuthForm.constants.js'
import { LargeLogo } from '@/UI/atoms/AvatarLink/AvatarLink.slots.js'
import { ForgotPasswordLink, CallToAction, EmailFormInput, PasswordFormInput } from './AuthForm.slots.helpers.js'
import { useAuthForm } from '@/Application/hooks/organisms/AuthForm/useAuthForm.js'

const GeneralAuthForm = ({ customHook = useAuthForm, state: { emailButtonText = '', title = '', snackbarText = '', initialFormState = {} } = {}, services: { handleEmailFormSubmit = handleSignInWithEmail } = {}, children }) => {
    const { state, services } = customHook?.(initialFormState) || {}
    const { router, isSnackbarOpen, errors } = state || {}
    const { handleOpen, handleClose, handleSubmit, register } = services || {}
    return (
        <StyledAuthForm onSubmit={handleSubmit((data => handleEmailFormSubmit({ router, handleOpen, ...data })))} method='POST' id='auth-form' maxwidth={MAX_WIDTH} aria-labelledby='auth-form-title'>
            <LargeLogo state={{ size: 96 }} /><Typography id='auth-form-title' variant='h2'>{title}</Typography>
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
export const ResetPassword = () => (<GeneralAuthForm state={RESET_PASSWORD_BUTTON_DATA} services={{ handleEmailFormSubmit: handleResetPassword }}><EmailFormInput style={{ display: 'none' }} /><PasswordFormInput /></GeneralAuthForm>)  // NOTE: Login field should be there but hidden for password fields https://goo.gl/9p2vKq