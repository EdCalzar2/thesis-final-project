import React, { useState } from 'react'
import Header from '../Header'
import Form from '../Form'
import StoryList from '../StoryList'

export const Story = () => {
    const [stories, setStories] = useState([])
    return (
        <div>
            <Header/>
            <Form stories={stories} setStories={setStories} />
            <StoryList stories={stories} />
        </div>
    )
}
