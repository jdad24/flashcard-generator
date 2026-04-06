function TextArea({value, onChange, placeholder}: {value?: string, onChange?: (e: React.ChangeEvent<HTMLTextAreaElement>) => void, placeholder?: string}) {
    return (
        <textarea className='bg-white h-30 w-auto rounded-xl p-2' placeholder={placeholder} value={value} onChange={onChange}></textarea>
    )
}

export default TextArea;