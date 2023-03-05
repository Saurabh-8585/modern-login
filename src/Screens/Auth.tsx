import React, { FC } from 'react'
import Login from '../Components/Form/Login'
import Register from '../Components/Form/Register'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
const Auth: FC = () => {
    return (
        <main >
            <section className='flex justify-center mt-20'>
                <div className="bg-white shadow-md rounded px-8 pt-6  pb-8 my-4 mx-2 sm:text-xs md:text-sm ">
                    <h1 className='text-center text-lg font-bold my-3'>Instructions</h1>
                    <h2><b> -</b> Please use <b>google chrome</b> or <b> mozilla firefox</b> browser in "incognito mode" for filling the form.</h2>
                    <h5> <b>- Step1 :</b> Enter your Name, Email id , Mobile Number and Password of your choice and click "SIGN ME UP" Button.</h5>
                    <h5> <b>- Step2 :</b> Then use the same Email address and password , entered in Step 1, to login in into the portal.</h5>
                    <h5> <b>- Step3 : </b>Select Merit Form / Entrance Form( for Selected PG Courses) to fill the online form.</h5>
                    <h5> <b>- Step4 : </b>Select Add class to fill form.You can apply for Multiple classes through same login by add class.Select View Admission to view the entered data.</h5>
                    <h5> <b>- Step5 :</b>  On successful completion of form, an application number is generated and email is sent to registered email address.
                        Candidates should note down this number for future reference.</h5>
                    <h5> <b>- Step6 :</b> Pay Admission merit form Fee.</h5>
                    <h5> <b>- Step7 :</b> Print the application Merit form and Fee Receipt is available after payment.</h5>
                    <h5> <b>- Step8 :</b> Upload the documents mentioned in UPLOAD section.</h5>
                    <h5> <b>- Step9 :</b> You will receive Shortlisted message as per merit list for further admission process.</h5>
                    <h5> <b>- Note :</b> Fields identified with red color star mark is mandatory.</h5>
                    <h5> <b>- Note :</b> Emails may be delivered late depending upon the rush.</h5>
                    <h5> <b>- Note :</b> If you are unable to sign up / login / access your account, it means online registrations has been closed.</h5>
                    <h5> <b>- Note : Upload passport size photo in jpeg, jpg or png format only, otherwise it will not display on i card and Bonafied certificate.</b></h5>
                </div>
            </section>
            <div className='flex justify-center gap-2 items-center flex-wrap'>
                <ToastContainer />
                <Login />
                <Register />

            </div>
        </main>
    )
}

export default Auth