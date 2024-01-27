import React, {useState,useEffect,useRef} from 'react'

function TodoForm(props) {
    const[input, setInput]=useState('')

    const inputRef=useRef(null)
    useEffect(()=>{
        inputRef.current.focus()
    })

    const handleChange=e=>{
        setInput(e.target.value)
    }

    const handleSubmit=e=>{
        e.preventDefault()

        props.onSubmit({
            id:Math.floor(Math.random() * 10000),
            text:input
        })

        setInput('')
        
    }

  return (
    <form className='todo-form' onSubmit={handleSubmit}>
        <h1>Que feras tu aujourd'hui?</h1>
        <input type='text' 
        placeholder='Vas y ajoute une tache'
        value={input} 
        name='text' 
        className='todo-input'
        onChange={handleChange}
        ref={inputRef}
    />
    <button className='todo-button'>Go</button>
    </form>
  )
}

export default TodoForm
