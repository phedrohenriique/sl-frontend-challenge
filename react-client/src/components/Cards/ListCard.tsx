import BasicCard from "./BasicCard"
import { Container } from "@mui/material"

export default function ListCard(props: any) {
    return (
        <BasicCard
            {...props}
        >
            <Container
                maxWidth="sm"
                sx={{ backgroundColor: "red" }}
            >
                asdsadad
                {props.children}
            </Container>
        </BasicCard>
    )
}
