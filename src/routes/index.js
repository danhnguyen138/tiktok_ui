import Home from "~/pages/Home"
import Following from "~/pages/Following"
import Upload from './../pages/Upload';
import HeaderOnly from '~/components/Layout/HeaderOnly';

//public routes
const publicRoutes= [
    {path:'/',component: Home},
    {path:'/following',component: Following},
    {path:'/upload',component:Upload,layout:HeaderOnly}
]
//private routes
const privateRoutes=[

]
export {publicRoutes, privateRoutes}