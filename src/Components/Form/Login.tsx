import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ILogin } from '../../Models/FormModels'
import { emailRegex } from '../../Regex/formRegex'
import { toast } from 'react-toastify'
import { AiFillLock } from 'react-icons/ai'

const Login: FC = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState<ILogin>({
        email: '',
        password: '',
    })
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>) => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!credentials.email && !credentials.password) {
            toast.error("Please Fill the all Fields", { autoClose: 500, theme: 'colored' })
        }
        else if (!emailRegex.test(credentials.email)) {
            toast.error("Enter a valid email", { autoClose: 500, theme: 'colored' })
        }
        else if (credentials.password.length <= 0) {
            toast.error("Please enter password", { autoClose: 500, theme: 'colored' })
        }
        else if (credentials.email && credentials.password) {
            toast.success("Login Successfully", { autoClose: 500, theme: 'colored' })
            navigate('/dashboard')

        }
    }

    return (
        <div className="w-full max-w-xs mt-5">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 md:h-[450px]  flex flex-col justify-center" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center m-2">
                    <div className="flex justify-center items-center gap-1">
                        <AiFillLock className='text-blue-500 text-lg ' />
                        <h3 className='text-blue-500 text-lg font-bold'>Welcome</h3>
                    </div>
                    <h5>Access your account</h5>
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Email" name='email' value={credentials.email} onChange={handleOnChange} />
                </div>
                <div className="mb-6">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" name='password' value={credentials.password} onChange={handleOnChange} />
                    {/* <p className="text-red-500 text-xs italic">Please choose a password.</p> */}
                </div>
                <div className="flex items-center justify-between">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                        Sign In
                    </button>
                    <Link className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" to='/'>
                        Forgot Password?
                    </Link>
                </div>
            </form>
        </div>
    )
}

export default Login