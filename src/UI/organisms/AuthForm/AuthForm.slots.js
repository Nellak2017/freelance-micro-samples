import React from 'react'
import NextLink from 'next/link'
import Link from '@mui/material/Link'
import { useRouter } from 'next/navigation'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { useForm } from 'react-hook-form'
import { StyledAuthForm, InputSection, SignInContainer,} from './AuthForm.elements.js'
import { handleSignInWithEmail, handleSignUpWithEmail, handleRequestPasswordReset, handleResetPassword } from '@/Infra/workflows/AuthForm.handlers.js'
import { MAX_WIDTH } from '@/Core/components/AuthForm/AuthForm.constants.js'
import { Logo } from '@/UI/atoms/AvatarLink/AvatarLink.slots.js'

// TODO: Make the form more modern by using MUI for the email/password inputs and also make the Forgot your password? thing appear modern and standard
// --- Constant Data
const emailData = {
    key: 'email', htmlFor: 'email', label: 'Email Address', placeholder: 'email@example.com', autoComplete: 'username',
    rules: { required: 'Email is required', pattern: { value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/i, message: 'Invalid email format' } },
}
const passwordData = {
    key: 'password', htmlFor: 'password', label: 'Password', placeholder: 'Enter your password', autoComplete: 'current-password',
    rules: { required: 'Password is required' },
}
const signInCallToAction = { text: "Don't have an account?", link: '/signup', linkText: 'Sign up.' }
const signUpCallToAction = { text: 'Have an account?', link: '/login', linkText: 'Sign in.' }
const signInForgotPasswordData = { forgotPasswordText: 'Forgot your password?', forgotPasswordRedirect: '/forgot-password' }
const signUpButtonData = { emailButtonText: 'Sign up with Email', title: 'Sign up' }
const forgotPasswordButtonData = { emailButtonText: 'Send Reset Instructions', title: 'Enter Account Email' }
const resetPasswordButtonData = { emailButtonText: 'Reset password', title: 'Reset Your Password' }

// --- Helpers
const ForgotPasswordLink = ({ state: { forgotPasswordText, forgotPasswordRedirect } = {} }) => (<Link href={forgotPasswordRedirect} component={NextLink} aria-label='Forgot your password link'>{forgotPasswordText}</Link>)
const CallToAction = ({ state: { text, link, linkText } = {} }) => (<Box display='flex' gap={2} alignItems='center'><h3>{text}</h3><Link href={link} component={NextLink}>{linkText}</Link></Box>)
const FormInput = ({ state: { key, htmlFor, label, placeholder, autoComplete, rules, } = {}, services: { register } = {}, errors }) => (
    <InputSection key={key}>
        <InputLabel htmlFor={htmlFor} required>{label}</InputLabel>
        <TextField
            {...register(htmlFor, rules)}
            id={htmlFor} type={htmlFor} placeholder={placeholder} autoComplete={autoComplete} fullWidth
            error={!!errors?.[htmlFor]} helperText={errors?.[htmlFor]?.message || ''} 
            aria-invalid={!!errors?.[htmlFor]} aria-describedby={`${htmlFor}-helpertext`} aria-errormessage={errors?.[htmlFor] ? `${htmlFor}-helpertext` : undefined}
            slotProps={{ formHelperText: { sx: theme => ({ fontSize: theme.typography.body1, marginLeft: 0 }) }, input: { sx: { paddingRight: 0 } } }}
        />
    </InputSection>
)
const EmailFormInput = ({ errors, register }) => (<FormInput state={emailData} services={{ register }} errors={errors} />)
const PasswordFormInput = ({ errors, register }) => (<FormInput state={passwordData} services={{ register }} errors={errors} />)

// --- Main slots
const GeneralAuthForm = ({ state: { emailButtonText = 'Sign in with Email', title = 'Sign in' } = {}, services: { handleEmailFormSubmit = handleSignInWithEmail } = {}, children }) => {
    const router = useRouter()
    const { register, handleSubmit, formState: { errors } } = useForm()
    return (
        <StyledAuthForm onSubmit={handleSubmit((data => handleEmailFormSubmit({ router, ...data })))} method='POST' id='auth-form' maxwidth={MAX_WIDTH} aria-labelledby='auth-form-title'>
            <Logo state={{ size: 96 }} />
            <h2 id='auth-form-title'>{title}</h2>
            {React.Children.map(children, child => React.isValidElement(child) ? React.cloneElement(child, { register, errors }) : child)}
            <SignInContainer><Button type='submit' name='email-auth' id='email-auth' title={emailButtonText} sx={{ width: '80%', borderRadius: 2 }}>{emailButtonText}</Button></SignInContainer>
        </StyledAuthForm>
    )
}
export const SignIn = () => (
    <>
        <GeneralAuthForm>
            <CallToAction state={signInCallToAction} />
            <EmailFormInput />
            <PasswordFormInput />
        </GeneralAuthForm>
        <ForgotPasswordLink state={signInForgotPasswordData} />
    </>
)
export const SignUp = () => (
    <GeneralAuthForm state={signUpButtonData} services={{ handleEmailFormSubmit: handleSignUpWithEmail }}>
        <CallToAction state={signUpCallToAction} />
        <EmailFormInput />
        <PasswordFormInput />
    </GeneralAuthForm>
)
export const ForgotPassword = () => (
    <GeneralAuthForm state={forgotPasswordButtonData} services={{ handleEmailFormSubmit: handleRequestPasswordReset }}>
        <EmailFormInput />
    </GeneralAuthForm>
)
export const ResetPassword = () => (
    <GeneralAuthForm state={resetPasswordButtonData} services={{ handleEmailFormSubmit: handleResetPassword }}>
        <PasswordFormInput />
    </GeneralAuthForm>
)