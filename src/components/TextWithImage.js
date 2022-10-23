import { Link } from 'react-router-dom'
import "../css/text_with_image.css"

export default function TextWithImage({ title,subTitle, body, body_list, cta, cta_link, img_src, img_position_left, theme_light, txt_alignment_left }) {
    return ( 
        <div className={theme_light ? 'img_txt_light' : 'img_txt_dark'}>
            <div className={img_position_left ? 'img_left' : 'img_right'}>
                <img src={img_src} />
                <div className={txt_alignment_left ? 'text_align_left' : ''}>
                    {title && <h1>{title}</h1>}
                    {subTitle && <h3>{subTitle}</h3>}
                    <p>{body}</p>
                    {body_list && <ul>
                        {body_list.map((item, index) => (
                            <li key={index}>{item}</li>
                        ))}
                        </ul>}
                    <Link to={cta_link}><button>{cta}</button></Link>
                </div>
            </div>
        </div>
    )
}