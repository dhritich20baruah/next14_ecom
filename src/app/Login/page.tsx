import Link from "next/link"
export default async function Login(){
    return(
        <>
        <div className="flex flex-col justify-center items-center">
            <p className="m-5 text-lg font-semibold">You are not logged in. Please log in to continue.</p>
            <form className="md:w-1/3 w-full mx-10 bg-gray-700 p-5 flex flex-col space-y-4">
                <label htmlFor="email" className="text-white">Email</label>
                <input type="text" id="email" name="email" className="p-2 bg-white"/>
                <label htmlFor="pasword" className="text-white">Password</label>
                <input type="text" id="password" name="password" className="p-2 bg-white"/>
                <button className="p-2 bg-orange-600 text-white border-2 font-bold border-orange-600 hover:text-orange-600 hover:bg-white">LOG IN</button>
                <p className="text-white my-3">Not registered. <Link href="/Register" className="text-blue-300 hover:text-orange-400">Click here</Link> to sign up.</p>
            </form>
        </div>
        </>
    )
}