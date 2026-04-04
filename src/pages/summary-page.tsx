import TextArea from '../components/text-area'
import SubmitButton from '../components/submit-button'
import { getSummary } from '../services'
import { useState } from 'react'

export default function Summary({ className }: { className?: string }) {
  const [text, setText] = useState<string>('');
  const [summary, setSummary] = useState<string>('');

  async function handleSummaryRequest(text: string) {
    const response = await getSummary(text);

    const summary = response.summary || response.error || 'No summary available';
    setSummary(summary);
  }

  const formattedSummary = summary ? summary.split('\n').map((line, index) => <li key={index}>{line}</li>) : null;


  return (
    <div className={`flex flex-col ${className}`}>
      {/* <p className='text-white'>This page serves as a simple summary generator for any text of your choice.</p> */}
      <TextArea onChange={e => setText(e.target.value)} placeholder='Enter your notes here...' />
      <SubmitButton className='mt-4 mb-10 w-50' onClick={() => handleSummaryRequest(text)} />
      <div>
        <p className='text-white text-xl text-left font-bold'>Summarized Notes</p>
        <div className='text-black bg-white border-gray-400 border-4 p-4 rounded-lg w-auto'>
          {summary && <ul>{formattedSummary}</ul>}
          {!summary && <p>No summary available</p>}
        </div>
      </div>
    </div>
  )
}