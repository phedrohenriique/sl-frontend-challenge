import React from 'react'
import BasicCard from './BasicCard'
import { styles } from '../../configuration/styles/styles'
import { Typography, Box } from "@mui/material"

export default function UsersCard(props: any) {

    const data = props.data

    return (
        <BasicCard
            sx={styles.usersCard}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                gap="1em"
            >
                <Typography variant="h6">
                    Name : Test
                </Typography>
                <Typography variant="h6">
                    Email: Test
                </Typography>
                <Typography variant="h6">
                    Phone: Test
                </Typography>
            </Box>
        </BasicCard>
    )
}
