import feini from '../assets/feini.png'
import neal from '../assets/neal.png'
import rowhome from '../assets/rowhome.png'

export default function FridgeTeam() {
    return (
        <>
            <div className="grid grid-cols-2 grid-rows-2 text-xs gap-1">
                <div className="bg-white flex flex-col items-center py-2">
                    <img src={feini} className='w-44 h-auto'/>
                    <h3>Feini Yin</h3>
                    <h4>Journalist</h4>
                </div>
                <div className="bg-white flex flex-col items-center py-2">
                    <img src={rowhome} className='w-44 h-auto'/>
                    <h3>Rowhome Productions</h3>
                    <h4>Production Team</h4>
                </div>
                <div className="bg-white flex flex-col items-center py-2">
                    <img src={neal} className='w-44 h-auto'/>
                    <h3>Neal Santos</h3>
                    <h4>Photographer</h4>
                </div>
                <div className="bg-white flex flex-col items-center py-2">
                    <h3>This weeks episode</h3>
                    <h4>Their role</h4>
                </div>
            </div>
        </>
    );
}
