"use client"

const WorkCardComponent = ({image, text, url}: {url: string} & ({image?: string, text: string} | {image: string, text?: string})) => {
    return (
        <a href={url} target={'_blank'} className='work-card'>
            {image ? <img src={image} alt={"Фото поста"}/> : null}
            <h3>{text}</h3>
        </a>
    )
}

export default WorkCardComponent