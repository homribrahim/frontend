import { createBrowserRouter } from 'react-router-dom'
import Auth from '../components/Auth'
import Home from './pages/Home'
import Footer from "./components/Footer";
import Foot from "./components/Foot";
import PageNotFound from '../components/PageNotFound'
import Navbar from '../components/Navbar'
import Annon from "./pages/Annon";
import Sponsors from "./components/Sponsors";
import NouvelleAnnoce from "./pages/NouvelleAnnoce";


const router = createBrowserRouter(
    [
        <Navbar />,
        <Foot />,
        <Sponsors />,
        <Footer />,
        {
            path: '/',
            element: < Home />,
            errorElement: <PageNotFound />
        },
        {
            path: '/annoncement',
            element: <Annon />,

        },
        {
            path: '/Annonce',
            element: <NouvelleAnnoce />,
        },
        {
            path: '/auth',
            element: <Auth />
        },
        {
            path: '/home',
            element: <Home />
        }
    ]
)

export default router;