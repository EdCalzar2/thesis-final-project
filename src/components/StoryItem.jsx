import styles from './storyItem.module.css'

export default function StoryItem({ item }) {
    return (
        <div className={styles.item}>
            <div className={styles.itemName}>{item}</div>
        </div>
    )
}
