import {
    TwitterIcon,
    TwitterShareButton,
    FacebookIcon,
    FacebookShareButton,
    WhatsappIcon,
    WhatsappShareButton
} from 'next-share'

export const shareables =[
    {
        button:TwitterShareButton,
        icon:TwitterIcon
    },
    {
        button:FacebookShareButton,
        icon:FacebookIcon
    },
    {
        button:WhatsappShareButton,
        icon:WhatsappIcon
    }
]

