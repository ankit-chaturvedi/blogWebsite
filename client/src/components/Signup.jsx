import {useState} from "react";

export  default function Signup() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

     async function  handleSubmit () {
        try{
            const response =  await fetch('http://localhost:3000/signup', {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({username, password})
            })
            alert('Sign up successfull')
        }
        catch(err){
            alert("process failed")
        }
    }




    return (
        <>
            <div className="signup w-full h-96 flex flex-col items-center justify-center p-8 gap-8 bg-slate-200
            rounded-2xl mt-8">
                <h1 className="text-4xl">Signup</h1>
                <form action="" className=" flex flex-col gap-8  w-2/4 px-8 items-center " onSubmit={handleSubmit}>
                    <label htmlFor="" className="flex flex-col gap-4 ">
                        Username:
                        <input type="text" className=" w-68 md:w-80 rounded-md h-8" onChange={e => setUsername(e.target.value)} value={username}/>
                    </label>
                    <label htmlFor="" className="flex flex-col gap-4">
                         Password:
                        <input type="text" className=" w-68 md:w-80  rounded-md h-8" onChange={e => setPassword(e.target.value)} value={password}/>
                    </label>
                    <button className="py-2 px-4 rounded-md bg-emerald-100 ">Submit</button>
                </form>
            </div>
        </>
    )
}
