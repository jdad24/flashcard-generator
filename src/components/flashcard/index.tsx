import { useState } from "react";

function FlashCard({question, answer}: {question: string, answer: string}) {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="bg-white rounded-lg border-gray-400 border shadow-md shadow-white p-4 w-120 h-50 relative hover:cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`${isFlipped ? 'hidden' : 'block'}`}>
                <p className="text-black">{question}</p>
            </div>
            <div className={`${isFlipped ? 'block' : 'hidden'}`}>
                <p className="text-black">{answer}</p>
            </div>
        </div>
    )
}

export default FlashCard;