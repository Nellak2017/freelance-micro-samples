import { FormSampleTemplate } from '@/UI/templates/FormSample/FormSampleTemplate'

export const getServerSideProps = async (context) => ({ props: { serverStep: context.query['form-step'] ?? '0' } })
export const FormSample = ({ serverStep }) => (<FormSampleTemplate serverStep={serverStep} />)
export default FormSample