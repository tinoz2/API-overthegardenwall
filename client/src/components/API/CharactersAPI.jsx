import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

const CharactersAPI = () => {

    useEffect(() => {
        document.title = "Garden API | Characters"
    }, [])


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
        <div className='w-1/2'>
            <div className='mt-6'>
                <strong className='text-4xl'>Get Characters</strong>
            </div>
            <div className='my-6'>
                <p>Here you can access all the Characters of Over the garden wall  .</p>
            </div>
            <hr />
            <div className='mt-6'>
                <strong>Request:</strong>
                <div className="my-4 border border-black bg-get flex justify-between items-center p-4 relative">
                    <div>
                        <p className="font-mono text-white">
                            <span className="font-bold">[GET] </span>
                            <span id='apiLink'>https://api-overthegardenwall.up.railway.app/api/characters</span>
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
                    <div className='flex'>
                        <p>      "id": </p> <span className='text-main'>2</span>
                    </div>
                    <div className='flex'>
                        <p>      "name": </p> <span className='text-main'>"Gregory"</span>
                    </div>
                    <div className='flex'>
                        <p>      "description": </p> <span className='text-main text-pretty'>"Greg is one of the two main protagonists of Over the Garden Wall. He is adventurous and carefree."</span>
                    </div>
                    <div className='flex'>
                        <p>      "image": </p> <span className='text-main text-pretty'>"https://static.wikia.nocookie.net/tome-of-the-unknown/images/c/cd/Greg1.png/revision/latest/scale-to-width-down/1000?cb=20141126040255"</span>
                    </div>
                    <p>      "about": [</p>
                    <span>          {"{"}</span>
                    <div className='flex'>
                        <p>             "personality": </p> <span className='text-main text-pretty'>"Greg is optimistic and carefree, often seeing the bright side of situations. He is easily amused and tends to follow his impulses, which can lead to both joy and trouble."</span>
                    </div>
                    <div className='flex'>
                        <p>             "gender": </p> <span className='text-main text-pretty'>"Male"</span>
                    </div>
                    <span>          {"}"}</span>
                    <p>      {"]"}</p>
                    <div className='flex'>
                        <p>      "Age": </p> <span className='text-main text-pretty'>"Child"</span>
                    </div>
                    <span>  {"}"},</span>
                    <p>  {"{"}</p>
                    <span>      // ...</span>
                </code>
            </pre>
            <div className='mt-6'>
                <strong className='text-4xl'>Get Character</strong>
            </div>
            <div className='my-6'>
                <p>Here you can access character by character (id)  .</p>
            </div>
            <hr />
            <div className='mt-6'>
                <strong>Request:</strong>
                <div className="my-4 border border-black bg-get flex justify-between items-center p-4 relative">
                    <div>
                        <p className="font-mono text-white">
                            <span className="font-bold">[GET] </span>
                            <span id='apiLink2'>https://api-overthegardenwall.up.railway.app/api/character/3</span>
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
                        <p>      "name": </p> <span className='text-main'>"Beatrice"</span>
                    </div>
                    <div className='flex'>
                        <p>      "description": </p> <span className='text-main text-pretty'>"Beatrice is a bluebird who has been cursed and turned into a human. She joins Wirt and Greg on their journey."</span>
                    </div>
                    <div className='flex' style={{ wordBreak: 'break-word' }}>
                        <p>      "image": </p> <span className='text-main text-pretty'>https://imgs.search.brave.com/4ZBqlfvERCuf-dRaXn1t6wStCL8AixD1Jq-vnF5I-bQ/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9wcmFj/dGljYWx0eXBpbmcu/Y29tL3dwLWNvbnRl/bnQvdXBsb2Fkcy8y/MDIwLzA3L2JlYXRy/aWNlLmpwZw</span>
                    </div>
                    <p>      "about": [</p>
                    <span>          {"{"}</span>
                    <div className='flex'>
                        <p>             "personality": </p> <span className='text-main text-pretty'>"Beatrice is initially sarcastic and self-serving, but she gradually becomes more caring and loyal to Wirt and Greg. She is resourceful and often provides guidance on their journey."</span>
                    </div>
                    <div className='flex'>
                        <p>             "gender": </p> <span className='text-main text-pretty'>"Female"</span>
                    </div>
                    <span>          {"}"}</span>
                    <p>      {"]"}</p>
                    <div className='flex'>
                        <p>      "Age": </p> <span className='text-main text-pretty'>"Adult (in bird years)"</span>
                    </div>
                    <span>  {"}"}</span>
                </code>
            </pre>
            <div className='my-6'>
                <p className='text-lg font-semibold'>Now, you can get the "<Link to='/api/soundtracks' className='font-bold underline'>Soundtracks</Link>".</p>
            </div>
            <ToastContainer />
        </div>
    )
}

export default CharactersAPI