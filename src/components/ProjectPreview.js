import styles from '../css/Preview.module.css'

export default function ProjectPreview({ title, description, image, reversed, link }) {
    return (
        <div id={styles.wrapper} style={{ flexDirection: reversed ? 'row-reverse' : 'row' }}>
            <img src={'/blob.png'} id={reversed ? styles.titleBlobReverse : styles.titleBlob} />
            <div
                id={reversed ? styles.contentReverse : styles.content}
            // style={{
            //     backgroundImage: 'url(/blob.png)'
            // }}
            >
                <h1>{title}</h1>
                <h3>{description}</h3>
                {link && (
                    <button onClick={() => {
                        window.open(link, "_blank")
                    }}>Learn More</button>
                )}
            </div>
            <div id={styles.right}>
                <img src={image} id={reversed ? styles.previewReverse : styles.preview} />
            </div>
        </div>
    )
}