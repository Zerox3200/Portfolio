import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { SideNavProvider } from './Context/Context.js';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <SideNavProvider>
    <App />
  </SideNavProvider>
);


reportWebVitals();
