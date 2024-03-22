
const Features = () => {
    return (
        <div className="my-12">
            <div className="flex items-center">
                <strong className="text-3xl">Features</strong>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 ml-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                </svg>
            </div>
            <div className="grid grid-cols-2 mt-4">
                <div className="border-2 p-8 mr-4 my-4 border-crud rounded-md bg-white">
                    <div className="flex mb-2 justify-between">
                        <strong className="text-2xl">CRUD Operations</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-7 h-7 text-crud">
                            <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab in et, praesentium quo non minima laboriosam illum itaque soluta.</p>
                    </div>
                </div>
                <div className="border-2 p-8 ml-4 my-4 border-jwt rounded-md bg-white">
                    <div className="flex mb-2 justify-between">
                        <strong className="text-2xl">JWT Authentication</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-7 h-7 text-jwt">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab in et, praesentium quo non minima laboriosam illum itaque soluta.</p>
                    </div>
                </div>
                <div className="border-2 p-8 mr-4 my-4 border-route rounded-md bg-white">
                    <div className="flex mb-2 justify-between">
                        <strong className="text-2xl">Route management</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-route">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab in et, praesentium quo non minima laboriosam illum itaque soluta.</p>
                    </div>
                </div>
                <div className="border-2 p-8 ml-4 my-4 border-error rounded-md bg-white">
                    <div className="flex mb-2 justify-between">
                        <strong className="text-2xl">Error handling</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-error">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab in et, praesentium quo non minima laboriosam illum itaque soluta.</p>
                    </div>
                </div>
                <div className="border-2 p-8 mr-4 my-4 border-characters rounded-md bg-white">
                    <div className="flex mb-2 justify-between">
                        <strong className="text-2xl">Characters & Soundtracks</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-characters">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab in et, praesentium quo non minima laboriosam illum itaque soluta.</p>
                    </div>
                </div>
                <div className="border-2 p-8 ml-4 my-4 border-postman rounded-md bg-white">
                    <div className="flex mb-2 justify-between">
                        <strong className="text-2xl">Postman & ThunderClient</strong>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.3} stroke="currentColor" className="w-7 h-7 text-postman">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75" />
                        </svg>
                    </div>
                    <div>
                        <p className="font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero ab in et, praesentium quo non minima laboriosam illum itaque soluta.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features