import DvrIcon from '@mui/icons-material/Dvr';
import { faChartSimple } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AnimationIcon from '@mui/icons-material/Animation';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import DevicesIcon from '@mui/icons-material/Devices';
import AppsIcon from '@mui/icons-material/Apps';
export const Services = [
    {
        Title: 'Static Websites',
        Desc: 'Transforming designs into static websites that are elegant, responsive, and optimized for performance.',
        Icon: <DvrIcon />,
        Delay: 0
    },
    {
        Title: 'Animated Websites',
        Desc: 'Creating captivating web experiences through CSS animations, JavaScript libraries, and creative design techniques.',
        Icon: <AnimationIcon />,
        Delay: 0.2
    },
    {
        Title: 'Web Apps',
        Desc: 'Developing robust web applications with intuitive user interfaces, real-time functionality, and seamless navigation.',
        Icon: <AppsIcon />,
        Delay: 0.4
    },
    {
        Title: 'E-commerce Development',
        Desc: 'Specialize in building e-commerce websites and online stores using platforms like Shopify, WooCommerce, or custom solutions. Offer services such as product catalog setup, payment gateway integration, and order management systems.',
        Icon: <AddShoppingCartIcon />,
        Delay: 0.6
    },
    {
        Title: 'Responsive Design Optimization',
        Desc: `Provide services to optimize existing websites for responsiveness across various devices and screen sizes. 
        Ensure that websites adapt seamlessly to mobile, 
        tablet, and desktop environments for an enhanced user experience.`,
        Icon: <DevicesIcon />,
        Delay: 0.8
    },
    {
        Title: 'Performance Optimization',
        Desc: ` Offer performance optimization services to improve website speed and efficiency. Implement techniques such as code minification, image compression, lazy loading, 
        and caching to enhance website performance and load times.`,
        Icon: <FontAwesomeIcon icon={faChartSimple} />,
        Delay: 1
    }
]