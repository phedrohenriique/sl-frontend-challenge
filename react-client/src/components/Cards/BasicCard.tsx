import { Box } from '@mui/material'
import { BasicCardType } from '../../configuration/types/types'
import { styles } from '../../configuration/styles/styles'

export default function BasicCard(props: BasicCardType): JSX.Element {
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
