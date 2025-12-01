export const handleSignInWithEmail = ({ router, handleOpen, email }) => {
    handleOpen()
    setTimeout(() => router.push(`/dummy-page-sign-in?email=${email}`), 2000)
}
export const handleSignUpWithEmail = ({ router, handleOpen, email }) => {
    handleOpen()
    setTimeout(() => router.push(`/dummy-page-sign-up?email=${email}`), 2000)
}
export const handleRequestPasswordReset = ({ router }) => {
    router.push('/reset-password')
}
export const handleResetPassword = ({ router, handleOpen, email }) => {
    handleOpen()
    setTimeout(() => router.push(`/dummy-page-reset-password?email=${email}`), 2000)
} 