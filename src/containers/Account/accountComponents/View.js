import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useStyles } from '../Account.styles';
//import Logo from './Logo'
import Info from './Info';
import catalogs from '../../../constants/catalogs';
import api from '../../../constants/api';
import axios from 'axios';
import Text from '../../../components/Text/Text'

import {
    Snackbar,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Typography,
} from '@material-ui/core'

const { errors, vertical, horizontal, inputStr } = catalogs

const View = props => {
    const { title, highlight, message, carId,selectId } = props
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);
    const [cars, setCars] = useState([]);

    const classes = useStyles();

    const handleCloseToast = () => {
        setOpen(false);
    };

    const renderCar = (car) => {
        const { description, make, id, model, km, image } = car
        
        return <div key={id} className={carId === id ? classes.selected : classes.nonSelected} onClick={() => selectId(id)} >
            {make.toUpperCase() + "-" + model.toUpperCase()}
            <Text type="small">{"km:" + km}</Text>
            <img className={classes.img} src={image} />
            <Text type="subtitle">
                {description.toUpperCase()}
            </Text>

        </div>
    }
    const getCars = () => {

        setLoading(true)
        axios.get(api.getCars).then((res) => {

            if (res.data && res.data.success) {
                setCars(res.data.data)
                setToastMessage("Modelos obtenidos")
                setToastType(classes.success)
            } else {
                setToastType(classes.error)
                setToastMessage(res.data.message)

            }
            setOpen(true)
            setLoading(false)

        }).catch(err => {
            console.log(err)
            setToastMessage(errors.serverError)
            setToastType(classes.error)
            setOpen(true)
            setLoading(false)
        })
    }


    useEffect(() => {
        getCars()
    }, [])

    return (
        <div className={classes.viewRoot} >
            <div className={classes.carWrapper} >
                {cars.length ? cars.map(car => renderCar(car)) : null}
            </div>
            <Snackbar
                anchorOrigin={{ vertical, horizontal }}
                open={open}
                autoHideDuration={3000}
                onClose={handleCloseToast}
                message={
                    <div className={toastType}>
                        {toastMessage}
                    </div>
                }
                key={vertical + horizontal}
            />
        </div>
    )
}



export default View
