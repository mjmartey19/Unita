import { slack, circle, discord, telegram, } from '../assets';

const platforms = [
    {
        image: slack,
        name:'Slack',
        color: '#540a4c',
        groups: 186,
        siteLink: 'platform/slack-groups/',
    },

    {
        image: circle,
        name:'Circle',
        color: '#337ab7',
        groups: 218,
        siteLink: 'platform/circle/',
    },

    {
        image: discord,
        name:'Discord',
        color: '#5a69ea',
        groups: 206,
        siteLink: 'platform/discord/',
    },

    {
        image: telegram,
        name:'Telegram',
        color: '#2fa5e1',
        groups: 21,
        siteLink: 'platform/telegram/',
    },

]

export default platforms;