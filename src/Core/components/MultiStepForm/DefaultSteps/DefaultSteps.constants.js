export const PREAMBLE_DATA = { header: 'Multi Step Form', subHeader: 'React Material UI multi step form with basic form validation logic.', labels: ['First Step', 'Second Step', 'Confirmation'], }
// --- first step
export const FIRST_NAME_DATA = { label: 'First Name', fieldName: 'firstName', htmlFor: 'name', placeholder: 'First Name', autoComplete: 'given-name', isRequired: true, rules: { required: 'First Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } } }
export const LAST_NAME_DATA = { label: 'Last Name', fieldName: 'lastName', htmlFor: 'name', placeholder: 'Last Name', autoComplete: 'family-name', isRequired: true, rules: { required: 'Last Name is required', minLength: { value: 2, message: 'Name must be at least 2 characters' } } }
export const EMAIL_DATA = { label: 'Email', fieldName: 'email', htmlFor: 'email', placeholder: 'name@example.com', autoComplete: 'email', isRequired: true, rules: { required: 'Email is required', pattern: { value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, message: 'Enter a valid email address', } }}
export const GENDER_DATA = { label: 'Gender', fieldName: 'gender', htmlFor: 'select', isRequired: false, }
export const FIRST_STEP_FIELDS = [FIRST_NAME_DATA.fieldName, LAST_NAME_DATA.fieldName, EMAIL_DATA.fieldName, GENDER_DATA.fieldName]
// --- second step
export const CITY_DATA = { label: 'City', fieldName: 'city', htmlFor: 'city', placeholder: 'Enter Your City', autoComplete: 'address-level2', isRequired: false }
export const DATE_OF_BIRTH_DATA = { label: 'Date of birth', fieldName: 'dob', htmlFor: 'date', isRequired: false, rules: { validate: value => !value || new Date(value) < new Date() || 'Date of birth must be in the past' } }
export const PHONE_NUMBER_DATA = { label: 'Phone number', fieldName: 'phoneNumber', htmlFor: 'phone', placeholder: 'xxx-xxx-xxxx', autoComplete: 'tel', isRequired: false, rules: { pattern: { value: /^[0-9()+\-\s]{7,20}$/, message: 'Enter a valid phone number' } } }
export const SECOND_STEP_FIELDS = [CITY_DATA.fieldName, DATE_OF_BIRTH_DATA.fieldName, PHONE_NUMBER_DATA.fieldName]
// --- All steps
export const ALL_STEPS_FIELDS = [FIRST_STEP_FIELDS, SECOND_STEP_FIELDS]