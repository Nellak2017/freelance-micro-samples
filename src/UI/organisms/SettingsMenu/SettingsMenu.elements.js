import { styled } from '@mui/material'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
export const StyledList = styled(List)(({ theme }) => ({ border: `1px solid ${theme.palette.divider}`, padding: 0, borderRadius: theme.shape.borderRadius, display: 'flex', flexDirection: 'column', width: 280, height: 300, }))
export const StyledListItemButton = styled(ListItemButton, { shouldForwardProp: prop => prop !== 'isLast' })(({ theme, isLast }) => ({ flexGrow: 1, borderBottom: isLast ? '0px solid transparent' : `1px solid ${theme.palette.divider}`, }))
export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({ minWidth: 40, '& svg': { fontSize: theme.typography.h3.fontSize, }, }))