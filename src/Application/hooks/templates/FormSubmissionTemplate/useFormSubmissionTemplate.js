import { useDeleteForm } from '@/Application/hooks/templates/FormSubmissionTemplate/react-query/useDeleteForm'
import { useFormFields } from '@/Application/hooks/templates/FormSubmissionTemplate/react-query/useFormFields'
export const useFormSubmissionTemplate = initialData => {
    const { data: fields, error: formFetchError } = useFormFields(initialData)
    const { mutate, error } = useDeleteForm()
    return { state: { fields, error: formFetchError }, services: { deleteHandler: mutate } }
}