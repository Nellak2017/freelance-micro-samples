import React from 'react'
import Button from '@mui/material/Button'
import { handleSignOut, handleDelete, handleRequestPasswordReset } from '@/Infra/workflows/AuthForm.handlers'
import { SETTINGS_ACCOUNT_DETAILS_SLOT_STATE, SETTINGS_PASSWORD_SLOT_STATE, SETTINGS_MANAGE_SLOT_STATE } from '@/Core/components/SettingsOptions/SettingsOptions.slots.constants'
import { SettingsShell, ReadOnlyEmailField, ButtonGroup } from './SettingsOptions.helpers'
export const SettingsAccountDetailsSlot = ({ state: { headline = SETTINGS_ACCOUNT_DETAILS_SLOT_STATE.headline, email } = SETTINGS_ACCOUNT_DETAILS_SLOT_STATE }) => (
    <SettingsShell headline={headline}><ReadOnlyEmailField email={email} /></SettingsShell>
)
export const SettingsPasswordSlot = ({ state: { headline = SETTINGS_PASSWORD_SLOT_STATE.headline, email } = SETTINGS_PASSWORD_SLOT_STATE, services: { showError, showSuccess, } = {} }) => (
    <SettingsShell headline={headline}>
        <ReadOnlyEmailField email={email} />
        <ButtonGroup><Button title='Request Password Update' onClick={() => handleRequestPasswordReset({ showError, showSuccess, email })}>Request Password Update</Button></ButtonGroup>
    </SettingsShell>
)
export const SettingsManageSlot = ({ state: { headline = SETTINGS_MANAGE_SLOT_STATE.headline, email } = SETTINGS_MANAGE_SLOT_STATE, services: { router, setAuth, showError } = {} }) => (
    <SettingsShell headline={headline}>
        <ReadOnlyEmailField email={email} />
        <ButtonGroup>
            <Button title='Sign Out' onClick={() => handleSignOut({ router, setAuth, showError  })}>Sign out</Button>
            <Button title='Delete your Account' color='error' onClick={() => handleDelete({ router, setAuth, showError })}>Delete Account</Button>
        </ButtonGroup>
    </SettingsShell>
)