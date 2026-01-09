import { styled } from '@mui/material/styles'
import List from '@mui/material/List'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
export const StyledList = styled(List)(({ theme }) => ({
    border: `1px solid ${theme.palette.divider}`, borderRadius: theme.shape.borderRadius, padding: 0,
    display: 'flex', flexDirection: 'column', width: 280, height: 300,
    [theme.breakpoints.down('sm')]: { flexDirection: 'row', width: '100%', height: 'auto', },
}))
export const StyledListItemButton = styled(ListItemButton, { shouldForwardProp: prop => prop !== 'isLast' })(({ theme, isLast }) => ({
    flexGrow: 1, borderBottom: isLast ? '0px solid transparent' : `1px solid ${theme.palette.divider}`,
    [theme.breakpoints.down('sm')]: { borderBottom: 'none', borderRight: `1px solid ${theme.palette.divider}`, '&:last-child': { borderRight: 'none', }, },
}))
export const StyledListItemIcon = styled(ListItemIcon)(({ theme }) => ({ minWidth: 40, '& svg': { fontSize: theme.typography.h3.fontSize, }, }))