import { useCallback, useState } from 'react'
export const useSnackbar = () => {
    const [state, setState] = useState({ open: false, message: '', severity: 'success', })
    const show = useCallback((severity, value) => {
        const message = value?.message ?? value
        if (severity === 'error') console.error(message)
        setState({ open: true, severity, message, })
    }, [])
    const close = useCallback((_, reason) => { if (reason === 'clickaway') { return } else { setState(s => ({ ...s, open: false })) } }, [])
    return {
        state,
        services: {
            showSuccess: msg => show('success', msg), showError: msg => show('error', msg), showInfo: msg => show('info', msg), showWarning: msg => show('warning', msg),
            closeSnackbar: close,
        }
    }
}