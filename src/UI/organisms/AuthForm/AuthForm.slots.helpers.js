import React from 'react'
import NextLink from 'next/link'
import Link from '@mui/material/Link'
import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import InputLabel from '@mui/material/InputLabel'
import { InputSection } from './AuthForm.elements.js'
import { EMAIL_DATA, PASSWORD_DATA } from '@/Core/components/AuthForm/AuthForm.constants.js'

// TODO: Fix duplicated form field id error
// TODO: Extract all these shared components for Form logic into some unified general form molecule/organism!
export const ForgotPasswordLink = ({ state: { forgotPasswordText, forgotPasswordRedirect } = {} }) => (<Link href={forgotPasswordRedirect} component={NextLink} aria-label='Forgot your password link'>{forgotPasswordText}</Link>)
export const CallToAction = ({ state: { text, link, linkText } = {} }) => (<Box display='flex' gap={2} alignItems='center'><h3>{text}</h3><Link href={link} component={NextLink}>{linkText}</Link></Box>)
export const FormInputTextField = ({ state: { fieldName, htmlFor, label, placeholder, autoComplete, isRequired, rules, slotProps, } = {}, services: { register } = {}, errors, children, ...rest }) => (
    <TextField
        {...register(fieldName, rules)}
        id={fieldName} name={fieldName} label={label} type={htmlFor}
        placeholder={placeholder} autoComplete={autoComplete} required={isRequired} fullWidth
        error={!!errors?.[htmlFor]} helperText={errors?.[htmlFor]?.message || ''}
        aria-invalid={!!errors?.[htmlFor]} aria-errormessage={errors?.[htmlFor] ? `${htmlFor}-helpertext` : undefined} aria-describedby={`${htmlFor}-helpertext`}
        slotProps={{ formHelperText: { sx: theme => ({ fontSize: theme.typography.body1, marginLeft: 0 }) }, input: { sx: { paddingRight: 0 } }, ...slotProps }}
        {...rest}
    >
        {children}
    </TextField>
)
const FormInput = ({ state, services, errors }) => (
    <InputSection key={state?.key}>
        <InputLabel htmlFor={state?.htmlFor} required>{state?.label}</InputLabel>
        <FormInputTextField state={state} services={services} errors={errors} />
    </InputSection>
)
export const EmailFormInput = ({ errors, register }) => (<FormInput state={EMAIL_DATA} services={{ register }} errors={errors} />)
export const PasswordFormInput = ({ errors, register }) => (<FormInput state={PASSWORD_DATA} services={{ register }} errors={errors} />)