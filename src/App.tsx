import './App.css'
// import FlashCard from './components/flashcard'
import TextArea from './components/text-area'
import SubmitButton from './components/submit-button'

function App() {

  return (
    <>
      <h1>Flashcard Generator</h1>
      <TextArea />
      <SubmitButton className='mt-4 w-50' />
      {/* <div className='flex flex-row justify-center w-auto mt-10'>
        <FlashCard />
      </div>
      <p>Click on the flashcard to flip it and see the answer!</p> */}
    </>
  )
}

export default App
