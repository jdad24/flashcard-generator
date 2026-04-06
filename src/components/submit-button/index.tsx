function SubmitButton({className, onClick}: {className?: string, onClick: () => void}) {
  return (
    <button className={`bg-blue-900 font-bold text-white px-4 py-2 rounded-xl hover:cursor-pointer hover:bg-blue-800 ${className || ''}`} onClick={onClick}>
      Submit
    </button>
  )
}

export default SubmitButton