import { RiLockPasswordFill } from "react-icons/ri";
import { AiOutlineMail } from "react-icons/ai";
import { useForm } from "react-hook-form";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CredentialsContext } from "../App";

export default function Login() {
    const credentials = useContext(CredentialsContext)
    const [loginError, setLoginError] = useState(false)
    const { register, handleSubmit, formState } = useForm()
    const navigator = useNavigate()
    console.log(credentials)
    const submitHandler = data => {
        if (data.email === 'koda@email.com' && data.password === '1234') {
            credentials.setUser(data)
            setLoginError(false)
            navigator("/")
        } else {
            setLoginError(true)
        }
    }
    return (
        <div className="w-xl mx-auto bg-white rounded p-4 m-4">
            <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={handleSubmit(submitHandler)}>
                <h1 className="font-bold text-(--color-accent)">Login</h1>
                {loginError && <span className="text-red-800">Email atau password salah</span>}
                <label htmlFor="email" className="font-bold text-black">Email</label>
                <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                    <AiOutlineMail />
                    <input type="email" {...register("email")} id="email" placeholder="Enter your email" className="flex-1 outline-0" />
                </label>
                <label htmlFor="email" className="font-bold text-black">Password</label>
                <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                    <RiLockPasswordFill />
                    <input type="password" {...register("password")} id="password" placeholder="Enter your password" className="flex-1 outline-0" autoComplete="off" />
                </label>
                <button className="bg-sky-700 text-black p-4 rounded cursor-pointer">Login</button>
            </form>
        </div>
    )
}