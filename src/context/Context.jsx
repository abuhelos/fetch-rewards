import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Context = React.createContext()
const baseURL = "https://frontend-take-home.fetchrewards.com/form"

function ContextProvider({children}) {
    const [occupations, setOccupations] = useState("") 
    const [states, setStates] = useState("")

    useEffect(()=> {
        getRequest();
    },[])

    async function getRequest() {
        const response = await axios.get(baseURL);
        setOccupations(response.data.occupations)
        setStates(response.data.states)
    }

    async function postRequest(data) {
        try {
            const response  = await axios.post(baseURL, data);
            alert("Form Submitted")
            window.location.reload()
          } catch(error) {
            return error
          }
    }

    return (
        <Context.Provider value={{occupations, states, postRequest}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}