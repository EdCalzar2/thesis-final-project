import { useState } from "react"
import styles from './form.module.css'

export default function Form({stories, setStories}) {
    const [story, setStory] = useState('')
    const [error, setError] = useState('')

    function handleSubmit(e) {
        e.preventDefault()
        if (!story.trim()) {
            setError("Please enter a story before submitting.")
            return
        }
        setStories([...stories, story])
        setStory("")
        setError("")
    }

    return (
        <>
            <form className={styles.storyForm} onSubmit={handleSubmit}>
                <input
                    className={styles.modernInput}
                    onChange={(e) => {
                        setStory(e.target.value)
                        setError("")
                    }}
                    type='text'
                    value={story}
                    placeholder="Enter your story"
                />
                <button className={styles.modernButton} type='submit'>Submit</button>
            </form>
            {error && (
                <div
                    style={{
                        color: "red",
                        marginTop: "20px",
                        textAlign: "center",
                        width: "fit-content",
                        padding: "10px",
                        borderRadius: "5px",
                        backgroundColor: "white",
                        marginLeft: "auto",
                        marginRight: "auto"
                    }}
                >
                    {error}
                </div>
            )}
        </>
    )
}
