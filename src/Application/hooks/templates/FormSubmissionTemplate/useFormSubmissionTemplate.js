import { useEffect } from 'react'
import { useDeleteForm } from '@/Application/hooks/templates/FormSubmissionTemplate/react-query/useDeleteForm'
import { useFormFields } from '@/Application/hooks/templates/FormSubmissionTemplate/react-query/useFormFields'
export const useFormSubmissionTemplate = initialData => {
    // TODO: Add error feedback for the tanstack query and for other ordinary form stuff
    const { data: fields, error: formFetchError } = useFormFields(initialData)
    const { mutate, error, isError } = useDeleteForm()
    useEffect(() => {
        if (isError) console.error(error)
    }, [isError])
    return { state: { fields, error: formFetchError }, services: { deleteHandler: mutate } }
}