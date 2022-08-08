import styles from './styles.module.scss'
import AdminSidebar from '../../components/AdminSidebar';
import AdminHeader from '../../components/AdminHeader';


const cathegories = () => {
    return (
        <div className={styles.admin__layout}>
            <AdminHeader />
            <div className={styles.admin__body}>
                <AdminSidebar />
                <div className={styles.admin__content}>
                    <p>Cathegories</p>
                </div>
            </div>
        </div>  
    );
};

export default cathegories;