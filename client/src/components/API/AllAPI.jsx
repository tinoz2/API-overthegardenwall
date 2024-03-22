import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'

const AllAPI = () => {

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
        <div className='w-1/2'>
            <div className='mt-6'>
                <strong className='text-4xl'>Get all API</strong>
            </div>
            <div className='my-6'>
                <p>Here you can access all of Over the garden wall's soundtracks or characters .</p>
            </div>
            <hr />
            <div className='mt-6'>
                <strong>Request:</strong>
                <div className="my-4 border border-black bg-get flex justify-between items-center p-4 relative">
                    <div>
                        <p className="font-mono text-white">
                            <span className="font-bold">[GET] </span>
                            <span id='apiLink'>https://api.escuelajs.co/api/v1/products</span>
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
                        <p>      "link": </p> <span className='text-main'>"https://www.youtube.com/watch?v=htnXgyBbiyg"</span>
                    </div>
                    <div className='flex'>
                        <p>      "duration": </p> <span className='text-main'>"1:11"</span>
                    </div>
                    <span>  {"},"}</span>
                    <p>  {"{"}</p>
                    <span>      // ...</span>
                </code>
                <code>
                    <p className='mt-2'>"Characters" : [</p>
                    <span>  {"{"}</span>
                    <div className='flex'>
                        <p>      "id": </p> <span className='text-main'>1</span>
                    </div>
                    <div className='flex'>
                        <p>      "name": </p> <span className='text-main'>"Wirt"</span>
                    </div>
                    <div className='flex'>
                        <p>      "description": </p> <span className='text-main text-pretty'>"Wirt is one of the two main protagonists of Over the Garden Wall. He views the world in a serious way."</span>
                    </div>
                    <div className='flex'>
                        <p>      "image": </p> <span className='text-main text-pretty'>"https://static.wikia.nocookie.net/tome-of-the-unknown/images/6/67/20141231_153421.JPG/revision/latest/scale-to-width-down/1000?cb=20150101124143"</span>
                    </div>
                    <p>      "about": [</p>
                    <span>          {"{"}</span>
                    <div className='flex'>
                        <p>             "personality": </p> <span className='text-main text-pretty'>"Wirt is a pessimistic realist in many ways, but also has a naive and childish side to him. He is easily scared and surprised, and even though he is far more perceptive than his brother, he is very much still a kid."</span>
                    </div>
                    <div className='flex'>
                        <p>             "gender": </p> <span className='text-main text-pretty'>"Male"</span>
                    </div>
                    <span>          {"}"}</span>
                    <p>      {"]"}</p>
                    <div className='flex'>
                        <p>      "Age": </p> <span className='text-main text-pretty'>"Teenager"</span>
                    </div>
                    <span>  {"}"},</span>
                    <p>  {"{"}</p>
                    <span>      // ...</span>
                </code>
            </pre>
            <div className='my-6'>
                <p className='text-lg font-semibold'>Now, you can get only "<Link className='font-bold underline' to='/api/characters'>Characters</Link>" or "<Link to='/api/soundtracks' className='font-bold underline'>Soundtracks</Link>".</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default AllAPI