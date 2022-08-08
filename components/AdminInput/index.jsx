import React from 'react';
import styles from './styles.module.scss'

const AdminInput = ({type, name, placeholder, value, onChange, defaultValue}) => {
    return (<>
            <label className={'pt-15'} htmlFor="1">{placeholder}</label>
            <input defaultValue={defaultValue} onChange={onChange} value={value} id={'1'} className={styles.adminInput} type={type} name={name} placeholder={placeholder}/>
        </>

    );
};

export default AdminInput;