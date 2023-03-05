import { FC, useState } from 'react'
import data from '../Data/Student'
import Card from '../Components/Cards/Card'

const DashBoard: FC = () => {
    const [showMerit, setShowMerit] = useState<boolean>(false)
    const [showEntrance, setShowEntrance] = useState<boolean>(false)
    const [viewAdmission, setViewAdmission] = useState<boolean>(false)
    return (
        <div className='flex justify-start flex-col mt-24 mx-5'>
            <div className="flex  justify-between px-2">
                <div className="flex justify-start gap-2">

                    {!showEntrance &&
                        <button className='bg-teal-500 text-white font-bold py-1 px-4 rounded  hover:bg-teal-700'
                            onClick={() => setShowMerit(true)}>Merit Form</button>
                    }

                    {!showMerit &&
                        <button className='bg-blue-500 text-white font-bold py-1 px-4 rounded  hover:bg-blue-700'
                            onClick={() => setShowEntrance(true)}>Entrance Form</button>}
                </div>

                {(showMerit || showEntrance) &&
                    <button className='text-lg font-bold' onClick={() => { return setShowMerit(false), setShowEntrance(false) }}>X</button>}
            </div>

            {(showMerit || showEntrance) &&
                <div className='flex justify-start gap-2 my-5 mx-2'>
                    <button className='bg-teal-500 text-white font-bold py-1 px-4 rounded  hover:bg-teal-700'>Add Class</button>
                    <button className='bg-blue-500 text-white font-bold py-1 px-4 rounded  hover:bg-blue-700'
                        onClick={() => setViewAdmission(true)}>View Admission</button>
                </div>
            }
            {
                viewAdmission &&
                <div className="flex flex-col border-2 p-2 rounded">
                    <h1 className='text-right font-bold text-lg cursor-pointer'
                        onClick={() => setViewAdmission(false)}
                    >x</h1>
                    <div className="flex flex-wrap justify-center">
                        {data.map(student => <Card student={student} key={student.id} />)}
                    </div>
                </div>
            }
        </div >
    )
}

export default DashBoard