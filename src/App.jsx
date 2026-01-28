import { RiLockPasswordFill } from "react-icons/ri"; 
import { AiOutlineMail } from "react-icons/ai"; 
import { useForm } from "react-hook-form";
function App() {
    const {register, handleSubmit} = useForm()

    const submitHandler = data => {
        console.log(data)
    }
    return (
        <div className="w-xl mx-auto bg-white rounded p-4 m-4">
            <form className="flex w-full flex-col justify-center gap-4 p-4 flex-3" onSubmit={submitHandler}>
                        <h1 className="font-bold text-(--color-accent)">Login</h1>
                        <label htmlFor="email" className="font-bold text-black">Email</label>
                        <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                            <AiOutlineMail />
                            <input type="email" {...register("email")} id="email" placeholder="Enter your email" className="flex-1 outline-0" />
                        </label>
                        <label htmlFor="email" className="font-bold text-black">Password</label>
                        <label className="flex items-center gap-4 p-4 border rounded border-black/40">
                            <RiLockPasswordFill />
                            <input type="password" {...register("password")} id="password" placeholder="Enter your password" className="flex-1 outline-0" />
                        </label>
                        <button className="bg-sky-700 text-black p-4 rounded cursor-pointer">Login</button>
                        
                    </form>
        </div>
    )
}

export default App