import styles from '../css/Preview.module.css'

export default function ProjectPreview({ title, description, image, reversed }) {
    return (
        <div id={styles.wrapper} style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}>
            <img src={'/blob.png'} id={reversed ? styles.titleBlobReverse : styles.titleBlob} />
            <div id={reversed ? styles.contentReverse : styles.content}>
                <h1>{title}</h1>
                <h3>{description}</h3>
                <button>Learn More</button>
            </div>
            <div id={styles.right}>
                <img src={image} id={reversed ? styles.previewReverse : styles.preview} />
            </div>
        </div>
    )
}