export const PREAMBLE_DATA = { header: 'Multi Step Form', subHeader: 'React Material UI multi step form with basic form validation logic.', labels: ['First Step', 'Second Step', 'Confirmation'], }
// --- first step
export const FIRST_NAME_DATA = { label: 'First Name', fieldName: 'firstName', htmlFor: 'name', placeholder: 'First Name', autoComplete: 'given-name', isRequired: false, /*rules: { required: 'First Name is required' }*/ }
export const LAST_NAME_DATA = { label: 'Last Name', fieldName: 'lastName', htmlFor: 'name', placeholder: 'Last Name', autoComplete: 'family-name', isRequired: false, /*rules: { required: 'Last Name is required' }*/ }
export const EMAIL_DATA = { label: 'Email', fieldName: 'email', htmlFor: 'email', placeholder: 'name@example.com', autoComplete: 'email', isRequired: false, /*rules: { required: 'Email is required' }*/ }
export const GENDER_DATA = { label: 'Gender', fieldName: 'gender', htmlFor: 'select', isRequired: false, }
// --- second step
export const CITY_DATA = { label: 'City', fieldName: 'city', htmlFor: 'city', placeholder: 'Enter Your City', autoComplete: 'address-level2', isRequired: false }
export const DATE_OF_BIRTH_DATA = { label: 'Date of birth', fieldName: 'dob', htmlFor: 'date', isRequired: false }
export const PHONE_NUMBER_DATA = { label: 'Phone number', fieldName: 'phoneNumber', htmlFor: 'phone', placeholder: 'xxx-xxx-xxxx', autoComplete: 'tel', isRequired: false }