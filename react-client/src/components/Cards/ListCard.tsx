import BasicCard from "./BasicCard"
import { Container, Box } from "@mui/material"
import { styles } from "../../configuration/styles/styles"

export default function ListCard(props: any) {
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
