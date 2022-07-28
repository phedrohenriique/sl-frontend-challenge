import React from 'react'
import { request } from '../configuration/API'
import { Box } from '@mui/material'
import { styles } from '../configuration/styles/styles'
import BasicButton from '../components/Button/BasicButton'
import BasicCard from '../components/Cards/BasicCard'
import ListCard from '../components/Cards/ListCard'

export default function Home(props: any) {

    React.useEffect(() => {
        request()
    }, [])

    return (
        <Box
            display="flex"
            flexDirection="row"
            minHeight="100vh"
            minWidth="100vw"
        >
            <Box
                sx={styles.mainLeftMenu}
                minWidth="30vw"
                minHeight="100vh"
                width="fit-content"
            >
                <BasicCard>
                    <BasicButton>
                        Show Users List
                    </BasicButton>
                </BasicCard>
            </Box>
            <Box
                sx={styles.mainRightMenu}
                minHeight="100vh"
                minWidth="70vw"
            >
                <ListCard>

                </ListCard>
            </Box>
        </Box >
    )
}
