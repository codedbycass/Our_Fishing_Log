import feini from '../assets/feini.png';
import neal from '../assets/neal.png';
import rowhome from '../assets/rowhome.png';

export default function Photobooth() {
    return (
        <div className='transform hover:-rotate-2'>
            <div className='absolute left-0 bg-red-400 rounded-full text-white top--0 size-20 p-4 text-center z-10 transform rotate-12'>
                <p>Magnet</p>
            </div>
            <div className="border border-gray-200 rounded-sm p-4 inline-block">
                <h2 className="text-xs text-right">Feini Yin</h2>
                <h3 className='text-xs text-right text-gray-400'>Journalist</h3>
                <img src={feini} alt="Feini" className="mb-2 size-40" />
                <h2 className="text-xs text-right">Rowhome Productions</h2>
                <h3 className='text-xs text-right text-gray-400'>Production Team</h3>
                <img src={rowhome} alt="Row Home" className="mb-2 size-40" />
                <h2 className="text-xs text-right">Neal Santos</h2>
                <h3 className='text-xs text-right text-gray-400'>Photographer</h3>
                <img src={neal} alt="Neal" className="mb-2 size-40" />
                <h2 className='text-center'>Learn More...</h2>
            </div>
        </div>
        
    );
}
