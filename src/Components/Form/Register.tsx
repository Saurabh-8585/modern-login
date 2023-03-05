import { ChangeEvent, FC, FormEvent, useState } from 'react'
import { CgProfile } from 'react-icons/cg'
import { IRegister } from '../../Models/FormModels'
import { toast } from 'react-toastify'
import { emailRegex } from '../../Regex/formRegex'
import { useNavigate } from 'react-router-dom'
const Register: FC = () => {
    const navigate = useNavigate()
    const [credentials, setCredentials] = useState<IRegister>({
        fullName: '',
        email: '',
        phoneNumber: '',
        password: '',
        confirmPassword: '',
    })
    const handleOnChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setCredentials({ ...credentials, [e.target.name]: e.target.value })
    }
    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        if (!credentials.fullName && !credentials.email && !credentials.phoneNumber && !credentials.password && !credentials.confirmPassword) {
            toast.error("Please Fill the all Fields", { autoClose: 500, theme: 'colored' })
        }
        else if (!emailRegex.test(credentials.email)) {
            toast.error("Enter a valid email", { autoClose: 500, theme: 'colored' })
        }
        else if (credentials.phoneNumber.length !== 10) {
            toast.error("Enter a valid Phone Number", { autoClose: 500, theme: 'colored' })
        }
        else if (credentials.password.length <= 0) {
            toast.error("Please enter password", { autoClose: 500, theme: 'colored' })
        }
        else if (credentials.password !== credentials.confirmPassword) {
            toast.error("Password not match", { autoClose: 500, theme: 'colored' })
        }
        else if (credentials.fullName && credentials.email && credentials.phoneNumber && credentials.password && credentials.confirmPassword) {
            toast.success("Registered Successfully", { autoClose: 500, theme: 'colored' })
            navigate('/dashboard')

        }
    }

    return (
        <div className="w-full max-w-xs mt-5">
            <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
                <div className="flex flex-col items-center m-2">
                    <div className="flex justify-center items-center gap-1">
                        <CgProfile className=' text-blue-500 text-lg font-bold' />
                        <h3 className='text-blue-500 text-lg font-bold'>Sign Up</h3>
                    </div>
                    <h4 className='text-gray-700 text-lg'>Create a new account</h4>
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" placeholder="Full Name" name='fullName' value={credentials.fullName} onChange={handleOnChange} />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="email" placeholder="Email" name='email' value={credentials.email} onChange={handleOnChange} />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" inputMode='numeric' placeholder="Phone Number" name='phoneNumber' value={credentials.phoneNumber} onChange={handleOnChange} />
                </div>
                <div className="mb-4">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Password" name='password' value={credentials.password} onChange={handleOnChange} />
                </div>
                <div className="mb-6">
                    <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" type="password" placeholder="Confirm Password" name='confirmPassword' value={credentials.confirmPassword} onChange={handleOnChange} />
                </div>
                <div className="flex items-center justify-center">
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded focus:outline-none focus:shadow-outline " type="submit">
                        Sign Me Up
                    </button>
                </div>
            </form>
        </div>
    )
}

export default Register