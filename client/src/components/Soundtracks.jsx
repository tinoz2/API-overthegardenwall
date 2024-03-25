import soundtrack from '../img/soundtrack.jpg'
import patient from '../img/Patient.jpg'
import potatoes from '../img/potatoes.jpg'
import unknown from '../img/unknown.jpg'

const Soundtracks = () => {
    return (
        <div className="grid grid-cols-4 sm:grid-cols-2">
            <div className='mr-2'>
                <img className='w-96 h-52' src={soundtrack} alt="" />
                <p className='font-semibold text-xl mt-2'>Prelude</p>
                <small>1:11</small>
            </div>
            <div className='mx-2 sm:mx-0'>
                <img className='w-96 h-52' src={unknown} alt="" />
                <p className='font-semibold text-xl mt-2'>Into the Unknown</p>
                <small>0:39</small>
            </div>
            <div className='mx-2 sm:mx-0'>
                <img className='w-96 h-52' src={patient} alt="" />
                <p className='font-semibold text-xl mt-2'>Patient is the Night</p>
                <small>1:34</small>
            </div>
            <div className='ml-2'>
                <img className='w-96 h-52' src={potatoes} alt="" />
                <p className='font-semibold text-xl mt-2'>Potatoes & Molasses</p>
                <small>1:14</small>
            </div>
        </div>
    )
}

export default Soundtracks