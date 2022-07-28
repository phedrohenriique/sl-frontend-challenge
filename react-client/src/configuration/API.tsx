import React from "react"

// url "http://localhost:4000"

export const useFetch: any = (url: any) => {
    const [fetchData, setFetchData] = React.useState([])

    const requestOptions: any = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ query: "{users{ id,name, email, phone, avatar }}" }) // the query shall return the function specified in backend
    }

    React.useEffect(() => {
        fetch(url, requestOptions)
            .then((response) => { return response.json() })
            .then((body) => { return body })
            .then((data) => {
                //console.log(data.data.users); 
                setFetchData(data.data.users)
            })
    }, [url])

    return [fetchData]

}