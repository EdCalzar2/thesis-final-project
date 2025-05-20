import { useState } from "react"

export default function Form({stories, setStories}) {
    const [story, setStory] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setStories([...stories, story])
        setStory("")
    }

    return (
        <form onSubmit={handleSubmit}>
            <input onChange={(e) => setStory(e.target.value)} type='text' value={story}></input>
            <button type='submit'>Submit</button>
        </form>
    )
}