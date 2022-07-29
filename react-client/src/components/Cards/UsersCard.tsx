import BasicCard from './BasicCard'
import { styles } from '../../configuration/styles/styles'
import { Typography, Box } from "@mui/material"
import { UserCardType } from '../../configuration/types/types'

export default function UsersCard(props: UserCardType): JSX.Element {

    const { name, email, phone, avatar } = props.data

    return (
        <BasicCard
            sx={styles.usersCard}
        >
            <Box
                display="flex"
                flexDirection="column"
                justifyContent="flex-start"
                gap="1em"
                minWidth="200px"
                maxHeight="200px"
            >
                <Box
                    component="img"
                    height="75px"
                    width="75px"
                    borderRadius="50%"
                    src={avatar}
                    alignSelf="center"
                />
                <Box
                    display="flex"
                    flexDirection="column"
                    gap="1em"
                    flexWrap="wrap"
                    maxWidth="200px"
                >
                    <Typography fontSize="16px" >
                        {`Name : ${name}`}
                    </Typography>
                    <Typography fontSize="12px" >
                        {`Email : ${email}`}
                    </Typography>
                    <Typography fontSize="12px" >
                        {`Phone : ${phone}`}
                    </Typography>
                </Box>
            </Box>
        </BasicCard>
    )
}
