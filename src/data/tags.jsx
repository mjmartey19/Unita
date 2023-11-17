import { SiRocketdotchat } from "react-icons/si";
import { FaMailBulk } from "react-icons/fa";
import { FaLocationArrow } from "react-icons/fa";
import { FaRegNewspaper } from "react-icons/fa";
import { FaHands } from "react-icons/fa";
import { FaPodcast } from "react-icons/fa";


const tags = [
    {
       icon: <SiRocketdotchat />,
       name: 'Communities with Forum',
       viewLink: 'tag/forum',
    },
    {
        icon: <FaMailBulk />,
        name: 'Communities only with invitation',
        viewLink: 'tag/invite-only/',
     },
     {
        icon: <FaLocationArrow />,
        name: 'Communities with Local Chapters',
        viewLink: 'tag/local-chapters/',
     },
     {
        icon: <FaRegNewspaper />,
        name: 'Communities with Newsletter',
        viewLink: 'tag/newsletter/',
     },
     {
        icon: <FaHands />,
        name: 'Communities without requirments',
        viewLink: 'tag/no-requirements/',
     },
     {
        icon: <FaPodcast />,
        name: 'Communities with Podcast',
        viewLink: 'tag/podcast/',
     },
]

export default tags;