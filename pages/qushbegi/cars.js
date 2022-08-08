import {useDispatch, useSelector} from "react-redux";
import React, {useEffect, useState} from 'react';
import AdminSidebar from '../../components/AdminSidebar';
import AdminHeader from '../../components/AdminHeader';
import styles from './styles.module.scss';
import CarsAdmin from '../../components/AdminCarCard';
import AdminModal from '../../components/AdminModal';
import {UPDATE_STATE} from "../../redux/types/constants";
import {postCar, putCar} from "../../redux/car/action";

const cars = () => {

    const {editorAddCar, carItem, edit1, adminModall} = useSelector(state => state.home)
    const dispatch = useDispatch();

    const [edit, setEdit] = useState({
        name: '',
        doors: '',
        seats: '',
        buggage: '',
        transmission: '',
        conditioner: '',
        fuel: '',
        insurance: '',
        price: '',
        brand: '',
        category: ''
    })


    const onSubmit = (e) => {
        const form = document.forms.namedItem("fileinfo");
        const oData = new FormData(form);
        dispatch(putCar({id: carItem.id, info: oData}))
        e.preventDefault()
    }


    useEffect(() => {
        if (adminModall === true && document.getElementById('imgForm') !== null) {
            document.getElementById('imgForm').reset();
        } else if (adminModall === true && editorAddCar === true && carItem) {
            delete carItem.image;
            delete carItem.image1;
            setEdit(carItem)
        }
    }, [adminModall])

    const onFinish = (e) => {
        e.preventDefault()
        const form = document.forms.namedItem("form1");
        const oData = new FormData(form);
        console.log(oData, 'oData')
        if (carItem) {
            dispatch(putCar({id: edit.id, info: edit}))
        }
        else {
            dispatch(postCar(oData))
        }
        console.log(e.target, 'e')
        console.log(edit, 'edit');

    }


    return (
        <div className={styles.admin__layout}>
            <AdminHeader/>
            <div className={styles.admin__body}>
                <AdminSidebar/>
                <div className={styles.admin__content}>
                    <button className={ styles.Addcarbtn +  ' titlebtn'} onClick={() => dispatch({type: UPDATE_STATE, data: {adminModall: true, editorAddCar: true}})}>Add Car</button>
                    <div className='w-100'>
                        <CarsAdmin/>
                    </div>
                </div>
            </div>

            <AdminModal>
                {
                    editorAddCar ? <div width="100%" className={styles.modelcard}>
                            <form onSubmit={onFinish} className='w-100' name={'form1'} encType={'multipart/form-data'}>
                                <div className="row w-100">
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Name
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, name: e.target.value})}
                                                    value={edit?.name}
                                                    type="text" name={'name'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Doors
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, doors: e.target.value})}
                                                    value={edit?.doors}
                                                    type="number" name={'doors'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Seats
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, seats: e.target.value})}
                                                    value={edit?.seats}
                                                    type="text" name={'seats'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Buggage
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, buggage: e.target.value})}
                                                    value={edit?.buggage} type="number" name={'buggage'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Transmission
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, transmission: e.target.value})}
                                                    value={edit?.transmission} type="number" name={'transmission'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Conditioner
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, conditioner: e.target.value})}
                                                    value={edit?.conditioner} type="number" name={'conditioner'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Fuel
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, fuel: e.target.value})}
                                                    value={edit?.fuel}
                                                    type="text" name={'fuel'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Insurance
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, insurance: e.target.value})}
                                                    value={edit?.insurance} type="number" name={'insurance'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Price
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, price: e.target.value})}
                                                    value={edit?.price}
                                                    type="number" name={'price'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Brand
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, brand: e.target.value})}
                                                    value={edit?.brand}
                                                    type="number" name={'brand'}/>
                                    </div>
                                    <div className="col-6">
                                        <p className='title14 pt-15'>
                                            Category
                                        </p>
                                        <input onChange={(e) => setEdit({...edit, category: e.target.value})}
                                                    value={edit?.category} type="number" name={'category'}/>
                                    </div>
                                    {!carItem && <>
                                        <div className="col-6">
                                            <p className='title14 pt-15'>
                                                Image
                                            </p>
                                            <input type="file" name={'image'}
                                                   onChange={(e) => setEdit({...edit, image: e.target.value})}/>
                                        </div>
                                        <div className="col-6">
                                            <p className='title14 pt-15'>
                                                Image-1
                                            </p>
                                            <input type="file" name={'image1'} onChange={(e) => setEdit({...edit, image1: e.target.value})}/>
                                        </div>
                                    </>}
                                    <div className='w-100 flex spaceBetween pt-15 p-15'>
                                        <button
                                            onClick={() => dispatch({type: UPDATE_STATE, data: {adminModall: false}})}
                                            className="adminButton danger"
                                            color={"danger"}
                                            type={'button'}
                                        >
                                            Cancel
                                        </button>
                                        <button type={'submit'} className="adminButton green" color={"green"}>
                                            Save
                                        </button>
                                    </div>
                                </div>
                            </form>
                        </div> :
                        <div width="100%" className={styles.modelcard}>
                            <p className='title'>
                                Edit Image
                            </p>
                            <form onSubmit={onSubmit} className='w-100' name={'fileinfo'} id={'imgForm'}>
                                {edit1 === true ? <>
                                        <label htmlFor="1">Image-1</label>
                                        <input id={'1'} className={'adminInput'} type="file" placeholder={'Image1'}
                                               name={'image'}/>
                                    </> :
                                    <>
                                        <label htmlFor="2">Image-2</label>
                                        <input id={'2'} className={'adminInput pt-15'} type="file"
                                               placeholder={'Image2'}
                                               name={'image1'}/>
                                    </>
                                }

                                <div className='w-100 flex spaceBetween pt-15'>
                                    <button type={'submit'} className="adminButton green" color={"green"}>
                                        Save
                                    </button>
                                    <button
                                        onClick={() => dispatch({type: UPDATE_STATE, data: {adminModall: false}})}
                                        className="adminButton danger"
                                        color={"danger"}
                                    >
                                        Cancel
                                    </button>
                                </div>
                            </form>
                            <div>
                            </div>
                        </div>
                }
            </AdminModal>

        </div>
    );
};

export default cars;