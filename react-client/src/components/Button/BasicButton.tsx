import { Button } from '@mui/material'

export default function BasicButton(props: any) {
    return (
        <Button
            variant="contained"
            onClick={() => { console.log("clicked") }}
            {...props}
        >
            {props.children}
        </Button>
    )
}
