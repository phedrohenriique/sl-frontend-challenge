import React from "react"
import {
    Button,
    Box,
    Container
} from "@mui/material"

export type BasicButtonType = React.ComponentProps<typeof Button>
export type BasicCardType = React.ComponentProps<typeof Box>
export type ListCardType = React.ComponentProps<typeof Container>
export type UserCardType = {
    data: {
        name: string | undefined
        email: string | undefined
        phone: string | undefined
        avatar: string | undefined
    }
}

export type RequestOptionsType = {
    method: string
    headers: {}
    body: BodyInit
}