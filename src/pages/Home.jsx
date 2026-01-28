import { useContext } from "react"
import { CredentialsContext } from "../App"

const Home = () => {
    const credentials = useContext(CredentialsContext)
    return (
        <div className="w-xl mx-auto bg-white rounded p-4 m-4">
            <h1>Hi, {credentials.user.email}</h1>
        </div>
    )
}
export default Home