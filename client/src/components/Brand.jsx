import { useState, useEffect } from 'react';
import brandImg from '../img/brandImg.png';
import { Link } from 'react-router-dom';

const Brand = () => {
    const [showArrow, setShowArrow] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            setShowArrow(scrollTop <= 250);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <section className='flex items-center justify-between' style={{ height: 'calc(100vh - 130px)' }}>
            <div>
                <h2 className='text-7xl font-semibold'>Garden API</h2>
                <p className='mb-16 mt-2 font-semibold'>Explore our API of Over the garden wall.</p>
                <Link to='/api/all' className="noselect button">
                    <span className="text">Get started</span>
                    <span className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                        </svg>
                    </span>
                </Link>
            </div>
            <div>
                <img className='w-96 img' src={brandImg} alt="over the garden wall image" />
            </div>
            {showArrow && <div className="arrow-10" id='arrow'></div>}
        </section>
    );
};

export default Brand;