import React from 'react'
import NextLink from 'next/link'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'
import InputLabel from '@mui/material/InputLabel'
import { InputSection } from './AuthForm.elements.js'
import { EMAIL_DATA, PASSWORD_DATA } from '@/Core/components/AuthForm/AuthForm.constants.js'
import { FormInputTextField } from '@/UI/molecules/FormInputTextField/FormInputTextField.js'

export const ForgotPasswordLink = ({ state: { forgotPasswordText, forgotPasswordRedirect } = {} }) => (<Link href={forgotPasswordRedirect} component={NextLink} aria-label='Forgot your password link'>{forgotPasswordText}</Link>)
export const CallToAction = ({ state: { text, link, linkText } = {} }) => (<Box display='flex' gap={2} alignItems='center'><Typography variant='h3'>{text}</Typography><Link href={link} component={NextLink}>{linkText}</Link></Box>)
const FormInput = ({ state, services, errors, ...rest }) => (
    <InputSection key={state?.key} {...rest}>
        <InputLabel htmlFor={state?.htmlFor} required>{state?.label}</InputLabel>
        <FormInputTextField state={state} services={services} errors={errors} />
    </InputSection>
)
export const EmailFormInput = ({ errors, register, ...rest }) => (<FormInput state={EMAIL_DATA} services={{ register }} errors={errors} {...rest} />) // NOTE: ...rest is here to support the hidden requirement for password fields needing a login component https://goo.gl/9p2vKq
export const PasswordFormInput = ({ errors, register }) => (<FormInput state={PASSWORD_DATA} services={{ register }} errors={errors} />)