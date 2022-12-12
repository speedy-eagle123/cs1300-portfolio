import styles from '../css/AboutMe.module.css'

export default function AboutMe() {
    return (
        <div id={styles.wrapper}>
            <h1>About Me</h1>
            <h3>** the paragraph describing this author has been redacted for anonymity on UX Factor **</h3>
            <h3>
                The following portfolio was the final project for my UI + UX course at Brown University and highights four of my project from the course. This course taught me when to use different interfaces, how to model and represent user interaction, how to elicit requirements and feedback from users, as well as the principles of user experience design, methods for designing and prototyping interfaces, and user interface evaluation.
            </h3>
        </div>
    )
}