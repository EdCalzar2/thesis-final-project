import styles from './manageStories.module.css';
import { NavLink } from 'react-router-dom';
// import logo from '../../assets/final_logo.png';

export default function ManageStories({ 
  pendingStories = [], 
  approvedStories = [], 
  onApprove, 
  onReject, 
  onDelete 
}) {
  return (
    <div className={styles.manageStoriesBackground}>
      {/* <img src={logo} alt="logo" /> */}
      <nav className={styles.navStories}>
        <ul>
          <li>
            <NavLink 
              to="/manageStories" 
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Manage Stories
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/manageSafetyMap" 
              className={({ isActive }) => isActive ? styles.active : undefined}
            >
              Manage Safety Map
            </NavLink>
          </li>
        </ul>
      </nav>

      <div className={styles.contentContainer}>
        {/* Pending Stories Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Pending Stories ({pendingStories.length})
          </h2>
          <div className={styles.storiesGrid}>
            {pendingStories.length === 0 ? (
              <p className={styles.emptyMessage}>No pending stories</p>
            ) : (
              pendingStories.map((story) => (
                <div key={story.id} className={styles.storyCard}>
                  <div className={styles.storyHeader}>
                    <span className={styles.statusBadge}>Pending</span>
                  </div>
                  <div className={styles.storyContent}>
                    <p className={styles.storyText}>
                      {story.text}
                    </p>
                    <small className={styles.submissionDate}>
                      Submitted: {new Date(story.submittedAt).toLocaleDateString()}
                    </small>
                  </div>
                  <div className={styles.actionButtons}>
                    <button 
                      className={styles.approveButton}
                      onClick={() => onApprove(story.id)}
                    >
                      Approve
                    </button>
                    <button 
                      className={styles.rejectButton}
                      onClick={() => onReject(story.id)}
                    >
                      Reject
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Approved Stories Section */}
        <section className={styles.section}>
          <h2 className={styles.sectionTitle}>
            Approved Stories ({approvedStories.length})
          </h2>
          <div className={styles.storiesGrid}>
            {approvedStories.length === 0 ? (
              <p className={styles.emptyMessage}>No approved stories</p>
            ) : (
              approvedStories.map((story, index) => (
                <div key={index} className={styles.storyCard}>
                  <div className={styles.storyHeader}>
                    <span className={`${styles.statusBadge} ${styles.approved}`}>Approved</span>
                  </div>
                  <div className={styles.storyContent}>
                    <p className={styles.storyText}>
                      {story}
                    </p>
                  </div>
                  <div className={styles.actionButtons}>
                    <button 
                      className={styles.deleteButton}
                      onClick={() => onDelete(story)}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </section>
      </div>
    </div>
  );
}
