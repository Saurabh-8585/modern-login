import { FC } from 'react'
import { GrTasks } from 'react-icons/gr'
import { cardProps } from '../../Models/FormModels'
interface Props {
  student: cardProps
}
const Card: FC<Props> = ({ student }) => {
  return (
    <div className='bg-white shadow-md rounded border-l-2 border-blue-500 mx-4 p-5 w-[400px] my-3' >
      <div className="flex justify-between">
        <h1 className='text-lg font-bold'>{student.id}</h1>
        <GrTasks className='text-2xl' />
      </div>
      <h4 className='text-gray-500 my-1'>{student.sName}</h4>
      <h4 className='text-gray-500 my-1'>{student.std}</h4>
      <h4 className='text-gray-500 my-1'>{student.status}</h4>
      <div className=" flex gap-1 my-5">
        <button className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-4 rounded '>Edit</button>
        <button className='bg-red-500  hover:bg-red-700 text-white font-bold py-1 px-4 rounded '>Upload</button>
        <button className='bg-blue-500 hover:bg-blue-700  text-white font-bold py-1 px-4 rounded '>Print</button>
      </div>
    </div>

  )
}

export default Card