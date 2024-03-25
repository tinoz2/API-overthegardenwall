import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
const SoundtracksAPI = () => {

    const copyToClipboard = () => {
        const apiLink = document.getElementById('apiLink').innerText;
        navigator.clipboard.writeText(apiLink)
            .then(() => {
                toast.success('API copied !', {
                    position: "top-center",
                    theme: 'dark',
                    autoClose: 500,
                })
            })
            .catch((error) => {
                console.error('Error al copiar el texto al portapapeles:', error);
            });
    };

    const copyToClipboard2 = () => {
        const apiLink2 = document.getElementById('apiLink2').innerText;
        navigator.clipboard.writeText(apiLink2)
            .then(() => {
                toast.success('API copied !', {
                    position: "top-center",
                    theme: 'dark',
                    autoClose: 500,
                })
            })
            .catch((error) => {
                console.error('Error al copiar el texto al portapapeles:', error);
            });
    };

    return (
        <div className='w-1/2 sm:w-3/5'>
            <div className='mt-6'>
                <strong className='text-4xl'>Get Soundtracks</strong>
            </div>
            <div className='my-6'>
                <p>Here you can access all the Soundtracks of Over the garden wall  .</p>
            </div>
            <hr />
            <div className='mt-6'>
                <strong>Request:</strong>
                <div className="my-4 border border-black bg-get flex justify-between items-center p-4 relative">
                    <div>
                        <p className="font-mono text-white">
                            <span className="font-bold">[GET] </span>
                            <span id='apiLink' className='text-pretty break-all'>https://api-overthegardenwall-production.up.railway.app/api/soundtracks</span>
                        </p>
                    </div>
                    <div className='list-none flex'>
                        <button onClick={copyToClipboard}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg></button>
                    </div>
                </div>
            </div>
            <div className='mb-4'>
                <strong>Response:</strong>
            </div>
            <pre className='bg-get text-white p-4'>
                <code>
                    <p>"Soundtracks" : [</p>
                    <span>  {"{"}</span>
                    <div className='flex'>
                        <p>      "id": </p> <span className='text-main'>1</span>
                    </div>
                    <div className='flex'>
                        <p>      "name": </p> <span className='text-main'>"Prelude"</span>
                    </div>
                    <div className='flex'>
                        <p>      "link": </p> <span className='text-main text-pretty break-all'>"https://www.youtube.com/watch?v=htnXgyBbiyg"</span>
                    </div>
                    <div className='flex'>
                        <p>      "duration": </p> <span className='text-main'>"1:11"</span>
                    </div>
                    <span>  {"},"}</span>
                    <p>  {"{"}</p>
                    <div className='flex'>
                        <p>      "id": </p> <span className='text-main'>2</span>
                    </div>
                    <div className='flex'>
                        <p>      "name": </p> <span className='text-main text-pretty'>"Into the Unknown"</span>
                    </div>
                    <div className='flex'>
                        <p>      "link": </p> <span className='text-main text-pretty break-all'>"https://www.youtube.com/watch?v=bFQAcogDYvs"</span>
                    </div>
                    <div className='flex'>
                        <p>      "duration": </p> <span className='text-main'>"0:39"</span>
                    </div>
                    <span>  {"},"}</span>
                </code>
                <p>  {"{"}</p>
                <span>      // ...</span>
            </pre>
            <div className='mt-6'>
                <strong className='text-4xl'>Get Soundtrack</strong>
            </div>
            <div className='my-6'>
                <p>Here you can access soundtrack by soundtrack (id)  .</p>
            </div>
            <hr />
            <div className='mt-6'>
                <strong>Request:</strong>
                <div className="my-4 border border-black bg-get flex justify-between items-center p-4 relative">
                    <div>
                        <p className="font-mono text-white">
                            <span className="font-bold">[GET] </span>
                            <span id='apiLink2' className='text-pretty break-all'>https://api-overthegardenwall-production.up.railway.app/api/soundtrack/3</span>
                        </p>
                    </div>
                    <div className='list-none flex'>
                        <button onClick={copyToClipboard2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg></button>
                    </div>
                </div>
            </div>
            <div className='mb-4'>
                <strong>Response:</strong>
            </div>
            <pre className='bg-get text-white p-4'>
                <code>
                    <span>  {"{"}</span>
                    <div className='flex'>
                        <p>      "id": </p> <span className='text-main'>3</span>
                    </div>
                    <div className='flex'>
                        <p>      "name": </p> <span className='text-main text-pretty'>"Patient is the Night"</span>
                    </div>
                    <div className='flex'>
                        <p>      "link": </p> <span className='text-main'>"https://www.youtube.com/watch?v=GamWQdQSWmY"</span>
                    </div>
                    <div className='flex'>
                        <p>      "duration": </p> <span className='text-main'>"1:34"</span>
                    </div>
                    <span>  {"}"}</span>
                </code>
            </pre>
            <div className='my-6'>
                <p className='text-lg font-semibold'>Now, you can get the info of "<Link to='/api/postman' className='font-bold underline'>Postman</Link>" resources.</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default SoundtracksAPI