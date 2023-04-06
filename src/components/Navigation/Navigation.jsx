import React from 'react'
import styles from './styles.module.scss'
import { Link } from 'react-router-dom'

export default function Navigation() {
    return (
        <ul className={styles.navigation}>
            <li>
                <Link to='/first'>First</Link>
            </li>
            <li>
                <Link to='/second'>Second</Link>
            </li>
        </ul>
    )
}
