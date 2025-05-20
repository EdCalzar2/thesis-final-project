import StoryItem from './StoryItem'

export default function StoryList({stories}) {
    return (
        <div>
            {stories.map((item) => (
                <StoryItem key={item} item={item}/>
            ))}
        </div>
    )
}