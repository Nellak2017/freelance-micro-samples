import TextField from '@mui/material/TextField'

export const FormInputTextField = ({ state: { fieldName, htmlFor, label, placeholder, autoComplete, isRequired, rules, slotProps, } = {}, services: { register } = {}, errors, children, ...rest }) => (
    <TextField
        component='label'
        {...register(fieldName, rules)}
        id={fieldName} name={fieldName} label={label} type={htmlFor}
        placeholder={placeholder} autoComplete={autoComplete} required={isRequired} fullWidth
        error={!!errors?.[fieldName]} helperText={errors?.[fieldName]?.message || ''}
        aria-invalid={!!errors?.[fieldName]} aria-errormessage={errors?.[fieldName] ? `${fieldName}-helpertext` : undefined} aria-describedby={`${fieldName}-helpertext`}
        slotProps={{ formHelperText: { sx: theme => ({ fontSize: theme.typography.body1, marginLeft: 0 }) }, input: { sx: { paddingRight: 0 } }, ...slotProps }}
        {...rest}
    >
        {children}
    </TextField>
)