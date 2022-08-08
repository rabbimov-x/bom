import Link from "next/link";
import styles from './styles.module.scss'
import {useDispatch ,useSelector} from 'react-redux'
const AdminSidebar = () => {
    const {controlASaytbar} = useSelector(state=>state.home)
    return (
        <div className={styles.sidebar + " " + `${controlASaytbar? styles.control : ""}`}>
            <div className={styles.sidebar__inner}>
                <Link href="/qushbegi/cathegories">
                    <li>Cathegories</li>
                </Link> 
                <Link href="/qushbegi/brands">
                    <li>Brands</li>
                </Link> 
                <Link href="/qushbegi/cars">
                    <li>Cars</li>
                </Link> 
                <Link href="/qushbegi/orders">
                    <li>Orders</li>
                </Link> 
                <Link href="/qushbegi/order-receivers">
                    <li>Order receivers</li>
                </Link>
            </div> 
        </div>
    );
};

export default AdminSidebar;