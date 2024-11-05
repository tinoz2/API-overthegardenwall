import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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
                    <strong className="text-3xl">Get characters</strong>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ml-4">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5A2.25 2.25 0 0 0 4.5 19.5Zm6-10.125a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0Zm1.294 6.336a6.721 6.721 0 0 1-3.17.789 6.721 6.721 0 0 1-3.168-.789 3.376 3.376 0 0 1 6.338 0Z" />
                    </svg>
                </div>
                <div className="my-4 border border-black bg-get flex justify-between items-center p-4 relative">
                    <div>
                        <p className="font-mono text-white">
                            <span className="font-bold">[GET] </span>
                            <span id='apiLink' className='text-pretty break-all'>https://api-overthegardenwall.up.railway.app/api/characters</span>
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

export default FetchApi;
