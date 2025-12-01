import React from 'react'
import NextLink from 'next/link'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { InputSection } from './AuthForm.elements.js'
import { EMAIL_DATA, PASSWORD_DATA } from '@/Core/components/AuthForm/AuthForm.constants.js'

export const ForgotPasswordLink = ({ state: { forgotPasswordText, forgotPasswordRedirect } = {} }) => (<Link href={forgotPasswordRedirect} component={NextLink} aria-label='Forgot your password link'>{forgotPasswordText}</Link>)
export const CallToAction = ({ state: { text, link, linkText } = {} }) => (<Box display='flex' gap={2} alignItems='center'><h3>{text}</h3><Link href={link} component={NextLink}>{linkText}</Link></Box>)
const FormInput = ({ state: { key, htmlFor, label, placeholder, autoComplete, rules, } = {}, services: { register } = {}, errors }) => (
    <InputSection key={key}>
        <InputLabel htmlFor={htmlFor} required>{label}</InputLabel>
        <TextField {...register(htmlFor, rules)} id={htmlFor} type={htmlFor} placeholder={placeholder} autoComplete={autoComplete} fullWidth error={!!errors?.[htmlFor]} helperText={errors?.[htmlFor]?.message || ''} aria-invalid={!!errors?.[htmlFor]} aria-describedby={`${htmlFor}-helpertext`} aria-errormessage={errors?.[htmlFor] ? `${htmlFor}-helpertext` : undefined} slotProps={{ formHelperText: { sx: theme => ({ fontSize: theme.typography.body1, marginLeft: 0 }) }, input: { sx: { paddingRight: 0 } } }} />
    </InputSection>
)
export const EmailFormInput = ({ errors, register }) => (<FormInput state={EMAIL_DATA} services={{ register }} errors={errors} />)
export const PasswordFormInput = ({ errors, register }) => (<FormInput state={PASSWORD_DATA} services={{ register }} errors={errors} />)