import { FC } from 'react'
import { AiOutlinePoweroff } from 'react-icons/ai'
const Header: FC = () => {
    return (
        <div className='w-full bg-gray-100 h-14 flex justify-between items-center fixed top-0'>
            <h1 className='text-white bg-blue-500 p-3 text-xl font-bold'> P.E.S. Modern College of Arts, Science and Commerce (Autonomous), Pune</h1>
            <button className=' bg-blue-500 text-white font-bold py-1 px-4 rounded  hover:bg-blue-700 mx-4 flex justify-center items-center gap-1'>
                Logout
                <AiOutlinePoweroff className='font-bold text-lg' />
            </button>
        </div>
    )
}

export default Header