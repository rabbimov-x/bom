import AdminSidebar from '../../components/AdminSidebar'
import AdminHeader from '../../components/AdminHeader';
import React from 'react';
import styles from './styles.module.scss';

const brands = () => {
    return (
        <div className={styles.admin__layout}>
            <AdminHeader />
            <div className={styles.admin__body}>
                <AdminSidebar />
                <div className={styles.admin__content}>
                    <p>Brands</p>
                </div>
            </div>
        </div>  
    );
};

export default brands;
