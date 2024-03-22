import wirt from '../img/Wirt.jpg'
import greg from '../img/Gregory.jpg'
import beatrice from '../img/Beatrice.jpg'
import beast from '../img/Beast.jpg'

const Characters = () => {
    return (
        <div className="grid grid-cols-4">
            <div className='mr-2'>
                <img className='w-96 h-52' src={wirt} alt="" />
                <p className='font-semibold text-xl mt-2'>Wirt</p>
                <small>Male</small>
            </div>
            <div className='mx-2'>
                <img className='w-96 h-52' src={greg} alt="" />
                <p className='font-semibold text-xl mt-2'>Gregory</p>
                <small>Male</small>
            </div>
            <div className='mx-2'>
                <img className='w-96 h-52' src={beatrice} alt="" />
                <p className='font-semibold text-xl mt-2'>Beatrice</p>
                <small>Female</small>
            </div>
            <div className='ml-2'>
                <img className='w-96 h-52' src={beast} alt="" />
                <p className='font-semibold text-xl mt-2'>The beast</p>
                <small>Male</small>
            </div>
        </div>
    )
}

export default Characters