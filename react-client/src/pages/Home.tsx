import React from 'react'
import { useFetch } from '../configuration/hooks/API'
import { Box } from '@mui/material'
import { styles } from '../configuration/styles/styles'
import BasicButton from '../components/Button/BasicButton'
import BasicCard from '../components/Cards/BasicCard'
import ListCard from '../components/Cards/ListCard'
import UsersCard from '../components/Cards/UsersCard'

export default function Home(): JSX.Element {
    const [show, setShow] = React.useState(false)
    const [fetchData] = useFetch("http://localhost:4000")

    const showUsers = () => {
        setShow(true)
    }

    const hideUsers = () => {
        setShow(false)
    }
    //setData(fetchData)

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
                maxHeight="300px"
                width="fit-content"
            >
                <BasicCard
                    gap="1em"
                    justifyContent="space-between"
                >
                    <BasicButton
                        onClick={showUsers}
                    >
                        Show Users List
                    </BasicButton>
                    <BasicButton
                        onClick={hideUsers}
                    >
                        Hide Users List
                    </BasicButton>
                </BasicCard>
            </Box>
            <Box
                sx={styles.mainRightMenu}
                minHeight="100vh"
                minWidth="70vw"
            >
                <ListCard>
                    {
                        show
                            ? fetchData.map((data: any) => {
                                return (
                                    <UsersCard key={data.id} data={data} />
                                )
                            })
                            : ""
                    }
                </ListCard>
            </Box>
        </Box >
    )
}
