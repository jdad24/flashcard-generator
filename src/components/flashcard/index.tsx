import { useState } from "react";

function FlashCard() {
    const [isFlipped, setIsFlipped] = useState(false);
    return (
        <div className="bg-white rounded-lg shadow-md p-4 w-120 h-50 relative hover:cursor-pointer"
            onClick={() => setIsFlipped(!isFlipped)}>
            <div className={`${isFlipped ? 'hidden' : 'block'}`}>
                <p className="text-black">Front of the flashcard</p>
            </div>
            <div className={`${isFlipped ? 'block' : 'hidden'}`}>
                <p className="text-black">Back of the flashcard</p>
            </div>
        </div>
    )
}

export default FlashCard;