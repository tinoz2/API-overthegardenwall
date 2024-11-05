import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { api } from '../api';

const FetchApi = () => {

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

    return (
        <section className="mt-12">
            <div>
                <div className='flex items-center'>
                    <strong className="text-3xl">Get soundtracks</strong>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ml-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.114 5.636a9 9 0 0 1 0 12.728M16.463 8.288a5.25 5.25 0 0 1 0 7.424M6.75 8.25l4.72-4.72a.75.75 0 0 1 1.28.53v15.88a.75.75 0 0 1-1.28.53l-4.72-4.72H4.51c-.88 0-1.704-.507-1.938-1.354A9.009 9.009 0 0 1 2.25 12c0-.83.112-1.633.322-2.396C2.806 8.756 3.63 8.25 4.51 8.25H6.75Z" />
                    </svg>
                </div>
                <div className="my-4 border border-black bg-get flex justify-between items-center p-4">
                    <div>
                        <p className="font-mono text-white">
                            <span className="font-bold">[GET] </span>
                            <span id='apiLink' className='text-pretty break-all'>{api + '/soundtracks'}</span>
                        </p>
                    </div>
                    <div className='list-none flex'>
                        <button onClick={copyToClipboard}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-white">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.666 3.888A2.25 2.25 0 0 0 13.5 2.25h-3c-1.03 0-1.9.693-2.166 1.638m7.332 0c.055.194.084.4.084.612v0a.75.75 0 0 1-.75.75H9a.75.75 0 0 1-.75-.75v0c0-.212.03-.418.084-.612m7.332 0c.646.049 1.288.11 1.927.184 1.1.128 1.907 1.077 1.907 2.185V19.5a2.25 2.25 0 0 1-2.25 2.25H6.75A2.25 2.25 0 0 1 4.5 19.5V6.257c0-1.108.806-2.057 1.907-2.185a48.208 48.208 0 0 1 1.927-.184" />
                        </svg></button>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </section>
    )
}

export default FetchApi