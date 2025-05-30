import styles from './manageStories.module.css'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/final_logo.png'

export default function ManageStories() {
    return(
        <div className={styles.manageStoriesBackground}>
            <img src={logo} alt="Logo"/>
            <nav className={styles.navStories}>
            <ul>
                <li>
                    <NavLink to='/manageStories' className={({ isActive }) => isActive ? styles.active : undefined}> Manage Stories
                    </NavLink>
                </li>
                <li>
                    <NavLink to='/manageSafetyMap' className={({ isActive }) => isActive ? styles.active : undefined}> Manage Safety Map
                    </NavLink>
                </li>
            </ul>
            </nav>
        </div>
    )
}