import Link from "next/link";


const LinkBtn =({text,url,children})=>{
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