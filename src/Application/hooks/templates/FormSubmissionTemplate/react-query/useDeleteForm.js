import { handleDeleteForm } from '@/Infra/workflows/MultiStepFormSubmission.handlers'
import { useMutation, useQueryClient } from '@tanstack/react-query'

export const useDeleteForm = () => {
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: handleDeleteForm, // NOTE: Needed for backend fetch
        onMutate: async () => { // NOTE: Optimistic Update. Clears form fields instantly
            await queryClient.cancelQueries(['formFields'])
            queryClient.setQueryData(['formFields'], [])
            return { previous: queryClient.getQueryData(['formFields']) }
        },
        onError: (_err, _variables, context) => { queryClient.setQueryData(['formFields'], context.previous) }, // NOTE: Rolls back Optimistic Update if it fails.
        onSettled: () => { queryClient.invalidateQueries(['formFields']) } // NOTE: Guarantees React Query Cache stays in sync with server even in optimistic rollback case.
    })
}