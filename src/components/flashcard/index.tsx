import { useState } from "react";

function FlashCard({question, answer, ref}: {question: string, answer: string, ref: any}) {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div ref={ref} className={`${isFlipped ? 'bg-gray-300' : 'bg-white'} rounded-lg border-gray-400 border shadow-md shadow-white p-4 w-80 h-35 lg:w-120 lg:h-50 relative hover:cursor-pointer`}
            onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`${isFlipped ? 'hidden' : 'block'} flex items-center justify-center h-full`}>
                <p className="text-black font-bold">{question}</p>
            </div>
            <div className={`${isFlipped ? 'block' : 'hidden'} flex items-center justify-center h-full`}>
                <p className="text-black font-bold">{answer}</p>
            </div>
        </div>
    )
}

export default FlashCard;