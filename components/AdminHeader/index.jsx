import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { UPDATE_STATE } from '../../redux/types/constants';
import styles from './styles.module.scss'

const AdminHeader = () => {
    const dispatch = useDispatch();
    const {controlASaytbar} = useSelector(state=>state.home);
    console.log(controlASaytbar)

    return (
        <div className={styles.admin__header}>
            <span className={styles.admin__logo}>
                <b>car to-go</b>
                <span>Admin dashboard</span>
            </span>
            <div className={styles.controles + " " + `${controlASaytbar? styles.close : styles.open }`} onClick = { ()=> dispatch({type: UPDATE_STATE, data : { controlASaytbar : !controlASaytbar}})} ></div>
        </div>
    );
};  

export default AdminHeader;