import BasicCard from "./BasicCard"
import { Container } from "@mui/material"
import { ListCardType } from "../../configuration/types/types"
import { styles } from "../../configuration/styles/styles"

export default function ListCard(props: ListCardType): JSX.Element {
    return (
        <BasicCard
        >
            <Container
                maxWidth="sm"
                sx={styles.listCardContainer}
            >
                {props.children}
            </Container>
        </BasicCard>
    )
}
