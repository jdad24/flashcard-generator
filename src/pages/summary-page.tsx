import TextArea from '../components/text-area'
import SubmitButton from '../components/submit-button'
import { getSummary } from '../services'
import { useState } from 'react'
import Ripples from "../assets/ripples.svg"

export default function Summary({ className }: { className?: string }) {
  const [text, setText] = useState<string>('');
  const [summary, setSummary] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  async function handleSummaryRequest(text: string) {
    setLoading(true);
    const response = await getSummary(text);

    const summary = response.summary || response.error || 'No summary available';
    setSummary(summary);
    setLoading(false);
  }

  const formattedSummary = summary ? summary.split('\n').map((line, index) => <li key={index}>{line}</li>) : null;


  return (
    <div className={`flex flex-col ${className}`}>
      <div className='text-gray-500 mb-4'>Click the "Submit" button to generate a summary of your notes.</div>
      <TextArea onChange={e => setText(e.target.value)} placeholder='Enter your notes here...' />
      <div className='flex flex-row gap-4'>
        <SubmitButton className='mt-4 mb-10 w-50' onClick={() => handleSummaryRequest(text)} />
       {loading ?  <img className='w-15' src={Ripples} alt="Loading" /> : null}
      </div>
      <div className='mt-4'>
        <p className='text-white text-xl text-left font-bold'>Summarized Notes</p>
        <div className='text-black bg-white border-gray-400 border-4 p-4 rounded-xl w-auto'>
          {summary && <ul>{formattedSummary}</ul>}
          {!summary && <p>No summary available</p>}
        </div>
      </div>
    </div>
  )
}