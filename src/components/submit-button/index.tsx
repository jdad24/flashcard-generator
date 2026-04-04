function SubmitButton({className, onClick}: {className?: string, onClick: () => void}) {
  return (
    <button className={`bg-blue-500 text-white px-4 py-2 rounded hover:cursor-pointer hover:bg-blue-600 ${className || ''}`} onClick={onClick}>
      Submit
    </button>
  )
}

export default SubmitButton