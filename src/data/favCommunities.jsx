import { BsSlack } from "react-icons/bs";
import { MdAssignmentInd } from "react-icons/md";
import { ImBriefcase } from "react-icons/im";
import { FaUserGroup } from "react-icons/fa6";
import { BsBookmark } from "react-icons/bs";
import { indie, vistage, ypo } from '../assets';

const favCommunities = [
    {
        image: indie,
        name: "Indie Worldwide",
        verified: true,
        star: [true, 4],
        members: 2000,
        desc: "Indie Worldwide is a community with 2,000+ members that connect indie makers around the world. You can join the community to receive feedback and support...",
        categories: [
            {
                icon: <MdAssignmentInd />,
                title: "Entreprenuers",
                number: 1,
            },
            {
                icon: <BsSlack />,
                title: "Slack",
                number: 0,
            },
         ],
         viewLink: "indie-worldwide",
         siteLink: "https://indieworldwide.com/"
    },

    {
        image: vistage,
        name: "Vistage",
        verified: true,
        star: [true, 1],
        members: 23000,
        desc: "Vistage is a community with the mission of connecting successful CEOs of small and midsize businesses to share expertise, challenge one another, and achieve...",
        categories: [
            {
                icon: <FaUserGroup />,
                title: "Coaching",
                number: 1,
            },
          
         ],
         viewLink: "vistage",
         siteLink: "https://www.vistage.com/"
    },

    {
        image: ypo,
        name: "YPO - Young Presidents' Organization",
        verified: false,
        star: [false, 1],
        members: 30000,
        desc: "Young Presidents' Organization, better known as YPO, is a global community for enterprise's young leaders. Its main approach is to promote education and...",
        categories: [
            {
                icon: <ImBriefcase />,
                title: "Business",
                number: 0,
            },
            {
                icon: <BsBookmark />,
                title: "Own Platform",
                number: 0,
            },
          
         ],
         viewLink: "vistage",
         siteLink: "https://www.vistage.com/"
    },
]

export default favCommunities;