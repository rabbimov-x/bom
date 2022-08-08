import React from 'react';
import AdminHeader from '../../components/AdminHeader';
import AdminSidebar from '../../components/AdminSidebar';
import styles from "./styles.module.scss" 
const orderReceivers = () => {
    return (
        <div className={styles.admin__layout}>
            <AdminHeader />
            <div className={styles.admin__body}>
                <AdminSidebar />
                <div className={styles.admin__content}>
                    <p>Order Receivers</p>
                </div>
            </div>
        </div>  
    );
};

export default orderReceivers;