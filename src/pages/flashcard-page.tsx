import FlashCard from "../components/flashcard"
import TextArea from "../components/text-area";
import SubmitButton from "../components/submit-button";
import { useState } from "react"
import { getFlashcards } from "../services";

interface FlashCard {
    question: string;
    answer: string;
}

export default function FlashCardPage({ className }: { className?: string }) {
    const [text, setText] = useState<string>('');

    const [flashcards, setFlashcards] = useState<FlashCard[]>([]);

    const handleGenerateFlashcards = async (notes: string) => { 
        const response = await getFlashcards(notes);        
        setFlashcards(response.flashcards || []); // Update state with fetched flashcards, or an empty array if there's an error
    }

    return (
        <div className={className}>                        
            <div className="flex flex-col">
                <TextArea onChange={e => setText(e.target.value)} placeholder="Enter your notes here..." />
                <SubmitButton className="mt-4 mb-10 w-50" onClick={() => handleGenerateFlashcards(text)} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                {flashcards.map((card, index) => (
                    <FlashCard key={index} question={card?.question} answer={card?.answer} />
                ))}
            </div>
        </div>
    )
}