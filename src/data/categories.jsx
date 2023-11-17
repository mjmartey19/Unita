import { ImBriefcase } from "react-icons/im";
import { MdAssignmentInd } from "react-icons/md";
import { MdMarkEmailUnread } from "react-icons/md";
import { FaPaintBrush } from "react-icons/fa";
import { IoMdFlash } from "react-icons/io";
import { FaUmbrellaBeach } from "react-icons/fa";
import { IoHome } from "react-icons/io5";
import { FaCloudSun } from "react-icons/fa6";
import { MdDeveloperMode } from "react-icons/md";
import { BsLaptop } from "react-icons/bs";
import { FaBuilding } from "react-icons/fa";
import { RiMentalHealthFill } from "react-icons/ri";
import { RiCheckboxMultipleFill } from "react-icons/ri";
import { FaUserGroup } from "react-icons/fa6";
import { FaMoneyBill1Wave } from "react-icons/fa6";
import { MdCardGiftcard } from "react-icons/md";
import { SiYourtraveldottv } from "react-icons/si";
import { MdDeviceHub } from "react-icons/md";
import { FaPencil } from "react-icons/fa6";
import { GiLovers } from "react-icons/gi"
import { GiMoneyStack } from "react-icons/gi"
import { IoGameController } from "react-icons/io5";
import { HiMiniCursorArrowRipple } from "react-icons/hi2";
import { BiFemale } from "react-icons/bi";
import { MdPower } from "react-icons/md";
import { BsStarFill } from "react-icons/bs";
import { MdLocalLibrary } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";
import { GiDiscGolfBag } from "react-icons/gi"
import { GiHeartBeats } from "react-icons/gi"
import { MdFavorite } from "react-icons/md";
import { FaMicrophoneAlt } from "react-icons/fa";
import { FaSearchPlus } from "react-icons/fa";
import { FaBitcoin } from "react-icons/fa";

const categories = [
    {
        icon: <ImBriefcase />,
        title: "Business",
        listing: 211, 
        viewLink: "category/business",
    },
    {
        icon: <MdAssignmentInd />,
        title: "Entreprenuers",
        listing: 218, 
        viewLink: "category/entreprenuers",
    },
    {
        icon: <MdMarkEmailUnread />,
        title: "Marketing",
        listing: 150, 
        viewLink: "category/marketing",
    },
    {
        icon: <FaPaintBrush />,
        title: "Design",
        listing: 99, 
        viewLink: "category/design",
    },
    {
        icon: <IoMdFlash />,
        title: "NoCode",
        listing: 42, 
        viewLink: "category/nocode",
    },
    {
        icon: <FaUmbrellaBeach />,
        title: "Nomad",
        listing: 211, 
        viewLink: "category/nomad",
    },
    {
        icon: <IoHome />,
        title: "Remote Workers",
        listing: 57, 
        viewLink: "category/remote-workers",
    },
    {
        icon: <FaBitcoin />,
        title: "Crypto",
        listing: 82, 
        viewLink: "category/crypto",
    },
    {
        icon: <FaCloudSun />,
        title: "Climate Change",
        listing: 29, 
        viewLink: "category/climate-change", 
    },
    {
        icon: <MdDeveloperMode />,
        title: "Developers",
        listing: 210, 
        viewLink: "category/developers",
    },
    {
        icon: <RiCheckboxMultipleFill />,
        title: "Accountability",
        listing: 16, 
        viewLink: "category/accountability",
    },
    {
        icon: <GiMoneyStack />,
        title: "Investing",
        listing: 93, 
        viewLink: "category/investing",
    },
    {
        icon: <BsLaptop />,
        title: "Startups",
        listing: 86, 
        viewLink: "category/startups",
    },
    {
        icon: <FaBuilding />,
        title: "Real Estate",
        listing: 4, 
        viewLink: "category/real-estate",
    },
    {
        icon: <RiMentalHealthFill />,
        title: "Mental Health",
        listing: 4, 
        viewLink: "category/mental-health",
    },
    {
        icon: <FaUserGroup />,
        title: "Coaching",
        listing: 211, 
        viewLink: "category/coaching",
    },
    {
        icon: <FaMoneyBill1Wave />,
        title: "Sales",
        listing: 23, 
        viewLink: "category/sales",
    },
    {
        icon: <MdCardGiftcard />,
        title: "eCommerce",
        listing: 24, 
        viewLink: "category/ecommerce",
    },
    {
        icon: <SiYourtraveldottv />,
        title: "Travel",
        listing: 17, 
        viewLink: "category/travel",
    },
    {
        icon: <MdDeviceHub />,
        title: "Human Resources",
        listing: 15, 
        viewLink: "category/human-resources",
    },
    {
        icon: <FaPencil />,
        title: "Writing",
        listing: 47, 
        viewLink: "category/writing",
    },
    {
        icon: <GiLovers />,
        title: "Relationship",
        listing: 211, 
        viewLink: "category/relationship",
    },
    {
        icon: <IoGameController />,
        title: "Gaming",
        listing: 41, 
        viewLink: "category/gaming",
    },
    {
        icon: <HiMiniCursorArrowRipple />,
        title: "Product Management",
        listing: 24, 
        viewLink: "category/product-mangament",
    },
    {
        icon: <BiFemale />,
        title: "Women In Tech",
        listing: 211, 
        viewLink: "category/women-in-tech",
    },
    {
        icon: <FaUserGroup />,
        title: "Community Bulders",
        listing: 54, 
        viewLink: "category/community-bulders",
    },
    {
        icon: <MdPower />,
        title: "Engineering",
        listing: 211, 
        viewLink: "category/engineering",
    },
    {
        icon: <BsStarFill />,
        title: "Brands",
        listing: 1, 
        viewLink: "category/brands",
    },
    {
        icon: <MdLocalLibrary />,
        title: "General Knowledge",
        listing: 45, 
        viewLink: "category/general-knowledge",
    },
    {
        icon: <MdHighQuality />,
        title: "Product Based",
        listing: 61, 
        viewLink: "category/product-based",
    },
    {
        icon: <GiDiscGolfBag />,
        title: "Fashion",
        listing: 7, 
        viewLink: "category/fashion",
    },
    {
        icon: <GiHeartBeats />,
        title: "Health",
        listing: 33, 
        viewLink: "category/health",
    },
    {
        icon: <MdFavorite />,
        title: "LGBTQ+",
        listing: 16, 
        viewLink: "category/lgbtq+",
    },
    {
        icon: <FaMicrophoneAlt />,
        title: "Podcasters",
        listing: 9, 
        viewLink: "category/podcasters",
    },
    {
        icon: <FaPaintBrush />,
        title: "UX",
        listing: 8, 
        viewLink: "category/ux",
    },
    {
        icon: <FaSearchPlus />,
        title: "SEO",
        listing: 8, 
        viewLink: "category/seo",
    },

];

export default categories