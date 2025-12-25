import React from 'react'
import Button from '@mui/material/Button'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
import Typography from '@mui/material/Typography'
import { StyledAuthForm, SignInContainer, } from './AuthForm.elements.js'
import { handleSignInWithEmail, handleSignUpWithEmail, handleRequestPasswordReset, handleResetPassword, handleGetUser } from '@/Infra/workflows/AuthForm.handlers.js'
import { MAX_WIDTH, SIGN_IN_FORM, SIGN_UP_FORM, FORGOT_PASSWORD_FORM, RESET_PASSWORD_FORM } from '@/Core/components/AuthForm/AuthForm.constants.js'
import { LargeLogo } from '@/UI/atoms/AvatarLink/AvatarLink.slots.js'
import { ForgotPasswordLink, CallToAction, EmailFormInput, PasswordFormInput } from './AuthForm.slots.helpers.js'
import { useAuthForm } from '@/Application/hooks/organisms/AuthForm/useAuthForm.js'

const GeneralAuthForm = ({ customHook = useAuthForm, state: { emailButtonText = '', title = '', successText = '', initialFormState = {} } = {}, services: { handleEmailFormSubmit = handleSignInWithEmail } = {}, children }) => {
    const { state, services } = customHook?.(initialFormState) || {}
    const { router, errors, isSuccessOpen, isErrorOpen, errorMessage } = state || {}
    const { showSuccess, showError, handleSuccessClose, handleErrorClose, register, handleSubmit, } = services || {}
    return (
        <StyledAuthForm onSubmit={handleSubmit((data => handleEmailFormSubmit({ router, showSuccess, showError, ...data })))} method='POST' id='auth-form' maxwidth={MAX_WIDTH} aria-labelledby='auth-form-title'>
            <LargeLogo state={{ size: 96 }} /><Typography id='auth-form-title' variant='h2'>{title}</Typography>
            {React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors }) : child)}
            <SignInContainer><Button type='submit' name='email-auth' id='email-auth' title={emailButtonText} sx={{ width: '80%', borderRadius: 2 }}>{emailButtonText}</Button></SignInContainer>
            <Snackbar open={isSuccessOpen} autoHideDuration={6000} onClose={handleSuccessClose}><Alert onClose={handleSuccessClose} severity='success' variant='filled' sx={{ color: 'text.primary' }}>{successText}</Alert></Snackbar>
            <Snackbar open={isErrorOpen} autoHideDuration={6000} onClose={handleErrorClose}><Alert onClose={handleErrorClose} severity='error' variant='filled' sx={{ color: 'text.primary' }}>{errorMessage}</Alert></Snackbar>
        </StyledAuthForm>
    )
}
export const SignIn = () => (
    <>
        <GeneralAuthForm state={SIGN_IN_FORM}>
            <CallToAction state={SIGN_IN_FORM} />
            <EmailFormInput />
            <PasswordFormInput />
        </GeneralAuthForm>
        <ForgotPasswordLink state={SIGN_IN_FORM} />
    </>)
export const SignUp = () => (
    <GeneralAuthForm state={SIGN_UP_FORM} services={{ handleEmailFormSubmit: handleSignUpWithEmail }}>
        <CallToAction state={SIGN_UP_FORM} /><EmailFormInput /><PasswordFormInput />
    </GeneralAuthForm>)
export const ForgotPassword = () => (<GeneralAuthForm state={FORGOT_PASSWORD_FORM} services={{ handleEmailFormSubmit: handleRequestPasswordReset }}><EmailFormInput /></GeneralAuthForm>)
export const ResetPassword = () => (<GeneralAuthForm state={RESET_PASSWORD_FORM} services={{ handleEmailFormSubmit: handleResetPassword }}><EmailFormInput style={{ display: 'none' }} /><PasswordFormInput /></GeneralAuthForm>) // NOTE: Login field should be there but hidden for password fields https://goo.gl/9p2vKq