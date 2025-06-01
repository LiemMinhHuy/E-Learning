// Layout components
import {HeaderOnly} from '~/layouts';

// Page components
import Home from '~/pages/Home';
import About from '~/pages/About';
import Contract from '~/pages/Contract';
import Upload from '~/pages/Upload';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contract },
    { path: '/upload', component: Upload, layout: HeaderOnly } // No layout for Upload page,
    
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
