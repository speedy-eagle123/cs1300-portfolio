import styles from '../css/Hero.module.css'
import Blob from '../assets/blob.svg'
import Profile from '../assets/profile.png'
import { useEffect, useRef } from 'react'
import Down from '../assets/down.png'

export default function Hero() {
    const titleRef = useRef()
    const imgRef = useRef()
    const buttonRef = useRef()

    useEffect(() => {
        titleRef.current.animate(
            {
                opacity: [0, 1]
            },
            1300
        )

        imgRef.current.animate(
            {
                right: ['-80vw', '5vw']
            },
            800
        )

        buttonRef.current.animate(
            {
                marginTop: ['-100vh', 60]
            },
            1000
        )
    }, [])

    const handleContact = () => {
        alert('Contact form is disabled for demo purposes')
    }

    return (
        <div id={styles.container}>
            <img src={Profile} id={styles.profile} ref={imgRef} />

            <div id={styles.textWrapper} ref={titleRef}>
                <h3>Hello I'm,</h3>
                <h1>Speedy Eagle</h1>
                <h2>Full Stack SDE @ Amazon</h2>
            </div>
            <button ref={buttonRef} onClick={handleContact}>Contact</button>
            <img src={Blob} id={styles.blob} />
            <img src={Down} style={{
                width: 40,
                position: 'absolute',
                bottom: 20,
                left: '50vw',
                opacity: 0.25
            }} />
            {/* <KeyboardArrowDownIcon /> */}
        </div>
    )
}