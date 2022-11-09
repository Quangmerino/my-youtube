import HomeIcon from '@mui/icons-material/Home';
import AppShortcutIcon from '@mui/icons-material/AppShortcut';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import SmartDisplayIcon from '@mui/icons-material/SmartDisplay';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';

type navigationProps = {
    icon:  any;
    name: string;
    link: string;
}
export const navigation: navigationProps[]= [
    {
        icon:<HomeIcon/>,
        name: "Trang chủ",
        link: "csd",
    },
    {
        icon: <AppShortcutIcon/>,
        name: "Short",
        link: "",
    },
    {
        icon: <SubscriptionsIcon/>,
        name: "Kênh đăng kí",
        link: "",
    },
    {
        icon: <VideoLibraryIcon/>,
        name: "Thư viện",
        link: "",
    },
    {
        icon: <HistoryIcon/>,
        name: "Video đã xem",
        link: "",
    },
    {
        icon: <SmartDisplayIcon/>,
        name: "Video của bạn",
        link: "",
    },
    {
        icon: <AccessTimeIcon/>,
        name: "Xem sau",
        link: "",
    },
    {
        icon: <PlaylistPlayIcon/>,
        name: "Highlight",
        link: "",
    },
    {
        icon: <ThumbUpOffAltIcon/>,
        name: "Video đã thích",
        link: "",
    },
];

