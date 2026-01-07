import { snakeCaseWordToSentenceCaseWord, pickFields } from '@/Core/shared/global.domain'
import { ALL_STEPS_FIELDS } from '@/Core/components/MultiStepForm/DefaultSteps/DefaultSteps.constants'
// Row | null => [{ label, value }]
export const defaultFormSerializer = supabaseFormResponse => supabaseFormResponse ? pickFields(supabaseFormResponse, ALL_STEPS_FIELDS.flat()).map(({ label, value }) => ({ label: snakeCaseWordToSentenceCaseWord(label), value, })) : []