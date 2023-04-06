import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Loader from '../../components/Loader'

export default function Second() {
    const [isLoading, setIsLoading] = useState(true)
    const [countDown, setСountDown] = useState(new Date('2023-04-17T08:00:00'))
    const [timeLeft, setTimeLeft] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })
    const [email, setEmail] = useState('')

    useEffect(() => {
        const interval = setInterval(() => {
            const now = new Date().getTime()
            const distance = countDown.getTime() - now
            const days = Math.floor(distance / (1000 * 60 * 60 * 24))
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
            const seconds = Math.floor((distance % (1000 * 60)) / 1000)
            setTimeLeft({ days, hours, minutes, seconds })
        }, 1000)
        setTimeout(() => {
            setIsLoading(false)
        }, 1000)
        return () => clearInterval(interval)
    }, [countDown])

    const handleSubmit = event => {
        event.preventDefault()
        if (isValidEmail(email)) {
            console.log(email)
            setEmail('')
        } else {
            alert('Enter the correct email.')
        }
    }
    const isValidEmail = email => {
        const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return pattern.test(email)
    }

    return (
        <div className={styles.second_page}>
            {isLoading ? (
                <Loader />
            ) : (
                <div>
                    <p>
                        We are working on a new and existing product that we think you will really like! Enter your email address bellow to be the
                        first to know when we launch it.
                    </p>
                    <div className={styles.time}>
                        <div>
                            <p className={styles.days}>{timeLeft.days}</p>
                            <p>days</p>
                        </div>
                        <div>
                            <p className={styles.hours}>{timeLeft.hours}</p>
                            <p>hours</p>
                        </div>
                        <div>
                            <p className={styles.minutes}>{timeLeft.minutes}</p>
                            <p>minutes</p>
                        </div>
                        <div>
                            <p className={styles.seconds}>{timeLeft.seconds}</p>
                            <p>seconds</p>
                        </div>
                    </div>
                    <div className={styles.mail}>
                        <input autoFocus value={email} onChange={event => setEmail(event.target.value)} type='email' />
                        <button onClick={handleSubmit} type='submit' />
                    </div>
                </div>
            )}
        </div>
    )
}
