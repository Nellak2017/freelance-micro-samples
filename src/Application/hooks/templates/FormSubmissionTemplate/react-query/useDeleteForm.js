import { handleDeleteForm } from '@/Infra/workflows/MultiStepFormSubmission.handlers'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteForm = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: handleDeleteForm,
        onMutate: async () => {
            await queryClient.cancelQueries(['formFields'])
            const previous = queryClient.getQueryData(['formFields'])
            queryClient.setQueryData(['formFields'], [])
            return { previous }
        },
        onError: (err, variables, context) => {
            queryClient.setQueryData(['formFields'], context.previous)
        },
        onSettled: () => {
            queryClient.invalidateQueries(['formFields'])
        }
        // onSuccess: () => { queryClient.invalidateQueries({ queryKey: ['formFields'] }) }
    })
}