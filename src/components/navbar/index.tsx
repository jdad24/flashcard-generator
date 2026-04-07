import { Link } from 'react-router-dom';

export default function NavBar({className}: {className?: string}) {
    return (
        <nav className={`bg-blue-500/20 font-bold text-white p-4 flex flex-row items-center h-15 w-auto mx-40 mt-4 rounded-3xl border-white/20 border-2 ${className || ''}`}>
            <div className='text-lg'>AI Flashcard Generator</div>
            <div className='text-md flex flex-row gap-10 ml-40'>
                <Link to="/" className='hover:text-blue-300 hover:scale-110'>Flashcards</Link>
                <Link to="/summary" className='hover:text-blue-300 hover:scale-110'>Summary</Link>
                <Link to="http://github.com/jdad24" target='_blank' rel="noopener noreferrer" className='hover:text-blue-300 hover:scale-110'>Other Projects (GitHub)</Link>
            </div>
        </nav>
    )
}