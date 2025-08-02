
import { Outlet } from 'react-router-dom';
import Navbar from '../Share/Navbar';
import Footer from '../Share/Footer';

const MainLayoot = () => {
    return (
        <div className='max-w-6xl mx-auto'>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default MainLayoot;