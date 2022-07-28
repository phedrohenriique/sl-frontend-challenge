// import axios from "axios"

// export const request : any = axios.create({
//     baseURL : "https://react-query.tanstack.com/"
// })

export const request: any = () => {
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({ query: "{hello, world, users{ name }}" }) // the query shall return the function specified in backend


    }

    fetch("http://localhost:4000", requestOptions)
        .then((response) => { return response.json() })
        .then((body) => { return body })
        .then((data) => { console.log(data) })
}