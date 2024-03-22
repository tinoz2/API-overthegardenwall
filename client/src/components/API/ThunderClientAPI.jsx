import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import thunderclient from '../../img/thunderclient.png'
import thundervsc from '../../img/thundervsc.png'

const ThunderClientAPI = () => {

    return (
        <div className='w-1/2'>
            <div className='mt-6'>
                <strong className='text-4xl'>Get API from ThunderClient</strong>
            </div>
            <div className='my-6'>
                <p>Here you can call the API from ThunderClient .</p>
                <span>You only have to replace the URL.</span>
            </div>
            <hr />
            <div>
                <div className='my-9'>
                    <img src={thunderclient} alt="postman get" />
                </div>
                <div>
                    <p className='font-semibold mb-6'>If you do not have ThunderClient you have to add in your VSC</p>
                    <img src={thundervsc} alt="" />
                </div>
            </div>
            <div className='my-6'>
                <p className='text-lg font-semibold'>Now, you can call API from "<Link className='font-bold underline' to='/api/postman'>Postman</Link>" </p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default ThunderClientAPI