import { Box } from '@mui/material'
import { styles } from '../../configuration/styles/styles'

export default function BasicCard(props: any) {
    return (
        <Box
            minWidth="fit-content"
            sx={styles.basicCardColumn}
            {...props}
        >
            {props.children}
        </Box>
    )
}
