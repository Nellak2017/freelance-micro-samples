import { useDeleteForm } from '@/Application/hooks/templates/FormSubmissionTemplate/react-query/useDeleteForm'
import { useFormFields } from '@/Application/hooks/templates/FormSubmissionTemplate/react-query/useFormFields'
export const useFormSubmissionTemplate = ({ initialData, showError = console.error }) => {
    const { data: fields } = useFormFields(initialData)
    const { mutateAsync: deleteHandler, error } = useDeleteForm(showError)
    return { state: { fields, error }, services: { deleteHandler } }
}