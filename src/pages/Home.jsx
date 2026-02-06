import { useContext, useEffect, useState } from "react"
import { CredentialsContext } from "../App"
import { useNavigate } from "react-router-dom"

const Home = () => {
    const [loggedInUser, setLoggedInUser] = useState()
    const credentials = useContext(CredentialsContext)
    const navigator = useNavigate()

    useEffect(
        ()=>{
            console.log(credentials)
            if(credentials.user.length < 1){
                navigator("/login")
            }
        },[]
    )
    return (
        <div className="w-xl mx-auto bg-white rounded p-4 m-4">
            <h1>Hi, {loggedInUser}</h1>
        </div>
    )
}
export default Home