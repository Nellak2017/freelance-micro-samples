// Central location for policies on password rules and other fields so it is accessible to all who need it not disjointed
// --- RULES
export const PASSWORD_LENGTH_RULES = { minLength: 8, maxLength: 128 }
export const PASSWORD_RULE_DEFINITIONS = [
    {
        id: 'minLength',
        test: p => p.length >= PASSWORD_LENGTH_RULES.minLength,
        message: 'Password must be at least 8 characters',
    },
    {
        id: 'maxLength',
        test: p => p.length <= PASSWORD_LENGTH_RULES.maxLength,
        message: 'Password cannot exceed 128 characters',
    },
    {
        id: 'lowercase',
        test: p => /[a-z]/.test(p),
        message: 'Password must include a lowercase letter',
    },
    {
        id: 'uppercase',
        test: p => /[A-Z]/.test(p),
        message: 'Password must include an uppercase letter',
    },
    {
        id: 'number',
        test: p => /\d/.test(p),
        message: 'Password must include a number',
    },
    {
        id: 'special',
        test: p => /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/.test(p),
        message: 'Password must include a special character',
    },
]
export const PASSWORD_RULES = {
    required: 'Password is required',
    validate: password => {
        const { valid, errors } = validatePassword(password)
        return valid || errors?.[0]
    }
}
// --- HELPERS
export const validatePassword = password => {
    const failures = PASSWORD_RULE_DEFINITIONS.filter(rule => !rule.test(password))
    return { valid: failures.length === 0, errors: failures.map(f => f.message), }
}