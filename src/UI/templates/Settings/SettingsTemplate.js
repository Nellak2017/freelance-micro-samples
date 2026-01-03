import Box from '@mui/material/Box'
import { ExtraLargeLogo } from '@/UI/atoms/AvatarLink/AvatarLink.slots'

import React, { useEffect, useMemo, useState } from 'react'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import KeyIcon from '@mui/icons-material/Key'
import LogoutIcon from '@mui/icons-material/Logout'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'

import { styled } from '@mui/material'
import Typography from '@mui/material/Typography'

import { CaroselView } from '@/UI/molecules/CaroselView/CaroselView'
import { FormInputTextField } from '@/UI/molecules/FormInputTextField/FormInputTextField'
import InputLabel from '@mui/material/InputLabel'
import Button from '@mui/material/Button'

import { handleSignOut, handleDelete, handleRequestPasswordReset } from '@/Infra/workflows/AuthForm.handlers'
import { useRouter } from 'next/router'
import { useAuth } from '@/Application/hooks/shared/useAuth'
import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert'
// TODO: Extract these to their respective files
// TODO: Re-use existing components instead of re-inventing the wheel
// TODO: Refactor app to use the withFeature syntax when applicable to inject things dynamically
// TODO: Make this responsive
const withFeatures = (items, features) => items.map(item => ({ ...item, ...Object.fromEntries(features.filter(({ map }) => map[item.id] !== undefined).map(({ map, propName }) => [propName, map[item.id]])), }))
const itemToIndex = (itemId, items = defaultItems) => Object.fromEntries(items.map(({ id }, index) => [id, index]))?.[itemId]
const defaultItems = [{ id: 'account', label: 'Account Details' }, { id: 'password', label: 'Change Password' }, { id: 'manage', label: 'Manage Account' },]
const defaultIcons = { dashboard: <HomeIcon aria-hidden='true' />, account: <PersonIcon aria-hidden='true' />, password: <KeyIcon aria-hidden='true' />, manage: <LogoutIcon aria-hidden='true' />, }
const defaultItemsWithIconsAndActions = withFeatures(defaultItems, [{ map: defaultIcons, propName: 'icon' },])

const StyledList = styled(List)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`, padding: 0, borderRadius: theme.shape.borderRadius,
    display: 'flex', flexDirection: 'column', width: 280, height: 300,
}))
const StyledListItemButton = styled(ListItemButton, { shouldForwardProp: prop => prop !== 'isLast' })(({ theme, isLast }) => ({ flexGrow: 1, borderBottom: isLast ? '0px solid transparent' : `1px solid ${theme.palette.divider}`, }))
const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({ minWidth: 40, '& svg': { fontSize: theme.typography.h3.fontSize, }, }))

const SettingsMenu = ({ items = defaultItemsWithIconsAndActions }) => {
    const [selected, setSelected] = useQueryParam('section', items?.[0]?.id ?? null)
    return (
        <StyledList>
            {items.map(({ id, label, icon }, index) => (
                <StyledListItemButton
                    key={id ?? label} selected={selected === id} isLast={index === items.length - 1} aria-current={selected === id ? 'page' : undefined}
                    onClick={() => setSelected(id)}
                >
                    <StyledListItemIcon>{icon}</StyledListItemIcon>
                    <ListItemText primary={label} slotProps={{ primary: { variant: 'h3', component: 'p' } }} />
                </StyledListItemButton>
            ))}
        </StyledList>
    )
}
// TODO: Add Snackbar for feedback, utilizing the infra showError and showSuccess functions
const Header = ({ headline }) => (<Typography variant='h1' component='h1'>{headline}</Typography>)
const SettingsShell = ({ headline, children }) => (<Box display='flex' flexDirection='column' gap={3}><Header headline={headline} />{children}</Box>)
const ReadOnlyEmailField = ({ email }) => (<Box display='flex' flexDirection='column' gap={1}><InputLabel htmlFor={'email'}>Email</InputLabel><FormInputTextField state={{ slotProps: { input: { readOnly: true, }, } }} value={email} /></Box>)
const ButtonGroup = ({ children }) => (<Box display='flex' alignItems='center' justifyContent='center' gap={3}>{children}</Box>)

// TODO: Refactor these to state/services if 2 or more props
// TODO: Extract headlines and success texts and the side-nav stuff to constants file
const SettingsAccountDetailsSlot = ({ headline = 'Account Details', email = 'example@example.com' }) => (
    <SettingsShell headline={headline}>
        <ReadOnlyEmailField email={email} />
    </SettingsShell>
)
const SettingsPasswordSlot = ({ headline = 'Change Password', email = 'example@example.com', showError, showSuccess, }) => ( // TODO: Actions
    <SettingsShell headline={headline}>
        <ReadOnlyEmailField email={email} />
        <ButtonGroup>
            <Button onClick={() => handleRequestPasswordReset({ showError, showSuccess, email, successText: 'Check your Email to finish updating your password' })}>Request Password Update</Button>
        </ButtonGroup>
    </SettingsShell>
)
const SettingsManageSlot = ({ headline = 'Manage Account', email = 'example@example.com', showError }) => {
    const router = useRouter()
    const { setAuth } = useAuth()
    return ( // TODO: test delete account
        <SettingsShell headline={headline}>
            <ReadOnlyEmailField email={email} />
            <ButtonGroup>
                <Button onClick={() => handleSignOut({ router, setAuth })}>Sign out</Button>
                <Button color='error' onClick={() => handleDelete({ router, setAuth, showError })}>Delete Account</Button>
            </ButtonGroup>
        </SettingsShell>
    )
}
const SettingsOptions = ({ email }) => {
    const [selected] = useQueryParam('section', null)
    const index = useMemo(() => itemToIndex(selected), [selected])

    // TODO: Consider wrapping into some modular custom hook to make using snackbars less painful
    const [isSuccessOpen, setIsSuccessOpen] = useState(false)
    const [successMessage, setSuccessMessage] = useState('It completed successfully')
    const handleSuccessClose = (_, reason) => reason === 'clickaway' ? undefined : setIsSuccessOpen(false)
    const showSuccess = success => { setIsSuccessOpen(true); setSuccessMessage(success?.message ?? success) }
    const [isErrorOpen, setIsErrorOpen] = useState(false)
    const [errorMessage, setErrorMessage] = useState('There was some unspecified error')
    const handleErrorClose = (_, reason) => reason === 'clickaway' ? undefined : setIsErrorOpen(false)
    const showError = error => { setIsErrorOpen(true); setErrorMessage(error?.message ?? error); console.error(error?.message ?? error) }
    return (
        <>
            <CaroselView index={index}>
                <SettingsAccountDetailsSlot email={email} />
                <SettingsPasswordSlot email={email} showError={showError} showSuccess={showSuccess} />
                <SettingsManageSlot email={email} showError={showError} />
            </CaroselView>
            <Snackbar open={isSuccessOpen} autoHideDuration={6000} onClose={handleSuccessClose}>
                <Alert onClose={handleSuccessClose} severity='success' variant='filled' sx={{ color: 'text.primary' }}>{successMessage}</Alert>
            </Snackbar>
            <Snackbar open={isErrorOpen} autoHideDuration={6000} onClose={handleErrorClose}>
                <Alert onClose={handleErrorClose} severity='error' variant='filled' sx={{ color: 'text.primary' }}>{errorMessage}</Alert>
            </Snackbar>
        </>
    )
}
export const SettingsTemplate = ({ email }) => (
    <Box id='root' display='flex' flexDirection='row' alignItems='flex-start' minHeight='100vh' justifyContent='center' pt={3}>
        <Box component='nav' aria-label='Settings Navigation' display='flex' flexDirection='column' alignItems='center' px={3} gap={3}>
            <ExtraLargeLogo /><SettingsMenu />
        </Box>
        <Box id='main-content' component='main' display='flex' flexDirection='column' alignItems='flex-start' pt={6}>
            <SettingsOptions email={email} />
        </Box>
    </Box>
)