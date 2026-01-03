// TODO: Refactor this slop
export default function AuthCodeError() {
  return (
    <div>
      <h1>Authentication Error</h1>
      <p>There was a problem verifying your email or reset link. Please try again.</p>
      <a href="/sign-in">Back to Sign In</a>
    </div>
  )
}