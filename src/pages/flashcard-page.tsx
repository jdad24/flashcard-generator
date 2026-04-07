import FlashCard from "../components/flashcard"
import TextArea from "../components/text-area";
import SubmitButton from "../components/submit-button";
import { useState, useEffect, useRef } from "react"
import { getFlashcards } from "../services";
import Ripples from "../assets/ripples.svg"

interface FlashCard {
    question: string;
    answer: string;
}

export default function FlashCardPage({ className }: { className?: string }) {
    const [text, setText] = useState<string>('');
    const [flashcards, setFlashcards] = useState<FlashCard[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    const flashcardRef = useRef(null)

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                addMoreFlashcards(text)
            }
        })
    })

    useEffect(() => {
        const lastFlashCard = flashcardRef.current;
        if (lastFlashCard) {
            observer.observe(lastFlashCard);
        }
        return () => {
            if (lastFlashCard) {
                observer.unobserve(lastFlashCard);
            }
        }
    }, [flashcards])

    const handleGenerateFlashcards = async (notes: string) => {
        setLoading(true);
        const response = await getFlashcards(notes);
        setFlashcards(response.flashcards || []); // Update state with fetched flashcards, or an empty array if there's an error
        setLoading(false);
    }

    const addMoreFlashcards = async (notes: string) => {
        // setLoading(true);
        const response = await getFlashcards(notes);
        setFlashcards(prevFlashcards => [...prevFlashcards, ...(response.flashcards || [])]);
        // setLoading(false);
    }

    return (
        <div className={className}>
            <div className="flex flex-col">
                <TextArea onChange={e => setText(e.target.value)} placeholder="Enter your notes here..." />
                <SubmitButton className="mt-4 mb-10 w-50" onClick={() => handleGenerateFlashcards(text)} />
            </div>
            <div className="flex flex-col gap-4 justify-center items-center">
                <div className="text-white text-xl font-bold">Generated Flashcards</div>
                <div className="text-gray-500">
                    {flashcards.length === 0 ? <p>No flashcards generated yet. Please enter your notes and click "Submit".</p>
                        : <p>Click on a flashcard to reveal the answer. Scroll down to generate more flashcards.</p>}
                </div>
                {loading ? <img className="w-20" src={Ripples} alt="Loading" /> :
                <div className="grid grid-cols-2 gap-4">
                    {flashcards.map((card, index) => (
                        <FlashCard key={index} question={card?.question} answer={card?.answer} ref={index==flashcards.length-1 ? flashcardRef : null} />
                    ))}
                </div>
}
            </div>
        </div>
    )
}