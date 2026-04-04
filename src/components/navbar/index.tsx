import { Link } from 'react-router-dom';

export default function NavBar({className}: {className?: string}) {
    return (
        <nav className={`bg-gray-800 text-white p-4 flex flex-row h-20 w-screen ${className || ''}`}>
            <div className='text-2xl font-bold text-center'>Flashcard Generator</div>
            <div className='text-lg flex flex-row gap-10 ml-80 items-center'>
                <Link to="/" className='hover:underline'>Flashcards</Link>
                <Link to="/summary" className='mr-4 hover:underline'>Summary</Link>
            </div>
        </nav>
    )
}