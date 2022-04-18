import Link from "next/link";


const LinkBtn =({link,children})=>{
    const {url,text} = link
    return (
        <Link href={url}>
            <div className="link_btn">
                <p>{text}</p>
                {children}
            </div>
        </Link>
    )
}

export default LinkBtn;