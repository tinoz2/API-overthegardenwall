import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import postman from '../../img/postman.png'

const PostmanAPI = () => {

    return (
        <div className='w-1/2'>
            <div className='mt-6'>
                <strong className='text-4xl'>Get API from Postman</strong>
            </div>
            <div className='my-6'>
                <p>Here you can call the API from Postman .</p>
                <span>You only have to replace the URL.</span>
            </div>
            <hr />
            <div>
                <div className='my-9'>
                    <img src={postman} alt="postman get" />
                </div>
                <div className='my-6 flex items-center'>
                    <p className='font-semibold'>If you do not have Postman you can download here</p>
                    <Link to='https://www.postman.com/downloads/' target='_blank'>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 ml-2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
                        </svg>
                    </Link>
                </div>
            </div>
            <div className='my-6'>
                <p className='text-lg font-semibold'>Now, you can call API from "<Link className='font-bold underline' to='/api/thunderclient'>ThunderClient</Link>" </p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default PostmanAPI