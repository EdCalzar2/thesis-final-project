import { useState } from "react"
import styles from './form.module.css'

export default function Form({stories, setStories}) {
    const [story, setStory] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        setStories([...stories, story])
        setStory("")
    }

    return (
        <form className={styles.storyForm} onSubmit={handleSubmit}>
            <input className={styles.modernInput} onChange={(e) => setStory(e.target.value)} type='text' value={story} placeholder="Enter your story"></input>
            <button className={styles.modernButton} type='submit'>Submit</button>
        </form>
    )
}