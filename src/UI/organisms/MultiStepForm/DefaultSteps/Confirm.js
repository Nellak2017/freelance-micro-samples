import { useMemo } from 'react'
import Box from '@mui/material/Box'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemText from '@mui/material/ListItemText'
import Divider from '@mui/material/Divider'
import { useWatch, useFormContext } from 'react-hook-form'
export const Confirm = ({ children, ...rest }) => {
    const { control } = useFormContext()
    const values = useWatch({ control }) || {}
    const fields = Object.entries(values).map(([label, value]) => ({ label: label.replace(/([A-Z])/g, ' $1').replace(/^./, c => c.toUpperCase()), value }))
    return (
        <Box {...rest}>
            <List disablePadding>
                {fields?.map(({ label, value }, index) => (
                    <Box key={label}>
                        <ListItem><ListItemText primary={label} secondary={value || 'Not Provided'} /></ListItem>
                        {index !== fields.length - 1 && <Divider />}
                    </Box>
                ))}
            </List>
            {children}
        </Box>
    )
}