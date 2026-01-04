import ListItemText from '@mui/material/ListItemText'
import HomeIcon from '@mui/icons-material/Home'
import PersonIcon from '@mui/icons-material/Person'
import KeyIcon from '@mui/icons-material/Key'
import LogoutIcon from '@mui/icons-material/Logout'
import { DEFAULT_ITEMS } from '@/Core/templates/SettingsTemplate.constants'
import { withFeatures } from '@/Core/shared/global.domain'
import { useQueryParam } from '@/Application/hooks/shared/useQueryParam'
import { StyledList, StyledListItemButton, StyledListItemIcon } from './SettingsMenu.elements'

const defaultIcons = { dashboard: <HomeIcon aria-hidden='true' />, account: <PersonIcon aria-hidden='true' />, password: <KeyIcon aria-hidden='true' />, manage: <LogoutIcon aria-hidden='true' />, }
const defaultItemsWithIcons = withFeatures(DEFAULT_ITEMS, [{ map: defaultIcons, propName: 'icon' },])
export const SettingsMenu = ({ items = defaultItemsWithIcons }) => {
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