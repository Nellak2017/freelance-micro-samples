import fc from 'fast-check'
import { validatePassword, PASSWORD_LENGTH_RULES, } from '../fieldRules'

const testConfig = { }
const { minLength, maxLength } = PASSWORD_LENGTH_RULES
const stringFrom = (arb, constraints) => fc.array(arb, constraints).map(chars => chars.join(''))
const lowercase = fc.constantFrom(...'abcdefghijklmnopqrstuvwxyz')
const uppercase = fc.constantFrom(...'ABCDEFGHIJKLMNOPQRSTUVWXYZ')
const digit = fc.constantFrom(...'0123456789')
const special = fc.constantFrom(...'!@#$%^&*()_+-=[]{};\':"\\|,.<>/?')
const validPasswordArb = fc
    .tuple(lowercase, uppercase, digit, special, fc.string({ minLength: minLength - 4, maxLength: maxLength - 4, }))
    .map(parts => parts.join(''))
describe('validatePassword (property tests)', () => {
    it('accepts all valid passwords', () => { fc.assert(fc.property(validPasswordArb, password => validatePassword(password).valid === true)) })
    it('rejects passwords shorter than min length', () => {
        fc.assert(fc.property(
            fc.string({ maxLength: minLength - 1 }),
            password => validatePassword(password).valid === false), testConfig)
    })
    it('rejects passwords missing lowercase', () => {
        fc.assert(fc.property(
            stringFrom(fc.oneof(uppercase, digit, special), { minLength, }),
            password => validatePassword(password).valid === false), testConfig)
    })
    it('rejects passwords missing uppercase', () => {
        fc.assert(fc.property(
            stringFrom(fc.oneof(lowercase, digit, special), { minLength, }),
            password => validatePassword(password).valid === false), testConfig)
    })
    it('rejects passwords missing digit', () => {
        fc.assert(fc.property(
            stringFrom(fc.oneof(lowercase, uppercase, special), { minLength, }),
            password => validatePassword(password).valid === false), testConfig)
    })
    it('rejects passwords missing special character', () => {
        fc.assert(fc.property(
            stringFrom(fc.oneof(lowercase, uppercase, digit), { minLength, }),
            password => validatePassword(password).valid === false), testConfig)
    })
})