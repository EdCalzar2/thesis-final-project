import React from 'react'
import Header from '../Header'
import Form from '../Form'
import StoryList from '../StoryList'

export const Story = ({ stories, setStories }) => {
    const handleDeleteStory = (storyToDelete) => {
        setStories(stories.filter(story => story !== storyToDelete));
    };

    return (
        <div>
            <Header/>
            <Form stories={stories} setStories={setStories} />
            <StoryList stories={stories} onDeleteStory={handleDeleteStory} />
        </div>
    )
}
