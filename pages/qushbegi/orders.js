import React from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminHeader from '../../components/AdminHeader';
import styles from './styles.module.scss'

const orders = () => {
    return (
        <div className={styles.admin__layout}>
            <AdminHeader />
            <div className={styles.admin__body}>
                <AdminSidebar />
                <div className={styles.admin__content}>
                    <h1>Orders List</h1>
                </div>
            </div>
        </div>  
    );
};

export default orders;