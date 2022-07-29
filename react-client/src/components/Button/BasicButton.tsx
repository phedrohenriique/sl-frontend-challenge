import { Button } from '@mui/material'
import { BasicButtonType } from '../../configuration/types/types'

export default function BasicButton(props: BasicButtonType): JSX.Element {
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
