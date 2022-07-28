import React from 'react'
import { request } from '../configuration/API'

export default function Home(props: any) {

    // const dataHandler: any = async () => {
    //     const response = await request.get("/")
    //     const data = response.data
    //     console.log(data)
    // }

    React.useEffect(() => {
        request()
    }, [])
    return (
        <div>Home</div>
    )
}
