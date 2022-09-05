import Document, { Html, Head, Main, NextScript } from "next/document"

const MyDocument =()=>{
    return(
        <Html>
            <Head/>
            <body>
                <Main/>
                <div id="modal-root"/>
                <NextScript/>
            </body>
        </Html>
    )
}

export default MyDocument;