import React, {useEffect, useState} from 'react'
import axios from 'axios'

const Context = React.createContext()
const baseURL = "https://frontend-take-home.fetchrewards.com/form"

function ContextProvider({children}) {
    const [occupations, setOccupations] = useState("") 
    const [states, setStates] = useState("")
    useEffect(()=> {
        getApiCall();
    },[])

    async function getApiCall() {
        axios.get(baseURL).then((response) => {
            setOccupations(response.data.occupations)
            setStates(response.data.states)
        })
    }

    async function postApiCall() {

    }

    return (
        <Context.Provider value={{occupations, states}}>
            {children}
        </Context.Provider>
    )
}

export {ContextProvider, Context}