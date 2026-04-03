function SubmitButton({className}: {className?: string}) {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-600 ${className || ''}`}>Submit</button>
  )
}

export default SubmitButton