import React from 'react'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { StyledAuthForm, SignInContainer, } from './AuthForm.elements.js'
import { handleSignInWithEmail, handleSignUpWithEmail, handleRequestPasswordReset, handleResetPassword } from '@/Infra/workflows/AuthForm.handlers.js'
import { MAX_WIDTH, SIGN_IN_FORM, SIGN_UP_FORM, FORGOT_PASSWORD_FORM, RESET_PASSWORD_FORM } from '@/Core/components/AuthForm/AuthForm.constants.js'
import { LargeLogo } from '@/UI/atoms/AvatarLink/AvatarLink.slots.js'
import { ForgotPasswordLink, CallToAction, EmailFormInput, PasswordFormInput } from './AuthForm.slots.helpers.js'
import { useAuthForm } from '@/Application/hooks/organisms/AuthForm/useAuthForm.js'

import { useSnackbar } from '@/Application/hooks/shared/useSnackbar'
import { AppSnackbar } from '@/UI/atoms/AppSnackBar/AppSnackBar.js' 

// TODO: Make the Button Tab Focusable for better UX
// TODO: Integrate Snackbar into the useAuthForm hook (or keep separate??)
const GeneralAuthForm = ({ customHook = useAuthForm, state: { emailButtonText = '', title = '', initialFormState = {} } = {}, services: { handleEmailFormSubmit = handleSignInWithEmail } = {}, children }) => {
    const { state: { router, errors }, services: { register, handleSubmit, setAuth } } = customHook?.(initialFormState) || {}
    const { state: snackbarState, services: { showSuccess, showError, closeSnackbar } } = useSnackbar()
    return (
        <StyledAuthForm onSubmit={handleSubmit((data => handleEmailFormSubmit({ router, showSuccess, showError, setAuth, ...data })))} method='POST' id='auth-form' maxwidth={MAX_WIDTH} aria-labelledby='auth-form-title'>
            <LargeLogo /><Typography id='auth-form-title' variant='h2'>{title}</Typography>
            {React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors }) : child)}
            <SignInContainer><Button type='submit' name='email-auth' id='email-auth' title={emailButtonText} sx={{ width: '80%', borderRadius: 2 }}>{emailButtonText}</Button></SignInContainer>
            <AppSnackbar state={snackbarState} services={{ onClose: closeSnackbar }} />
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