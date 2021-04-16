import React, { useState, useEffect } from 'react';
import { useStyles } from './Form.styles';
import { checkLength, checkNumber, resizeImage } from './validations';
import catalogs from '../../constants/catalogs';
import api from '../../constants/api';
import axios from 'axios';

import {
    Snackbar,
    TextField,
    Button,
    InputAdornment,
    IconButton,
    Typography,
} from '@material-ui/core'

//import * as ACTIONS from '../../store/actions';
const { errors, vertical, horizontal, inputStr } = catalogs



const SignInForm = (props) => {
    const { carId , selectId} = props
    const classes = useStyles();
    const [error, setError] = useState(true);
    const [errorMessage, setErrorMessage] = useState('');
    //snackbar
    const [open, setOpen] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [toastType, setToastType] = useState({});
    const [loading, setLoading] = useState(false);



    const [formData, setFormData] = useState({
        nombre: undefined,
    });

    const { nombre } = formData;

    //GENERAL FUNCTIONS
  
    const validate = (data, id) => {
        const { nombre } = data;
        if (!nombre || !id || checkLength(id, 1, 20)) {
            setError(true)
            setErrorMessage(errors.default)
            return false
        }
        if (checkLength(nombre, 2, 20)) {
            setError(true)
            setErrorMessage(errors.nombre)
            return false
        }

        setError(false)
        setErrorMessage('')
    }

    const handleCloseToast = () => {
        setOpen(false);
    };



    //MAIN FUNCTIONS
    const handleChange = event => {

        setFormData({ ...formData, [event.target.name]: event.target.value });
    };

    const handleUploadCar = (event) => {
        event.preventDefault();
        setLoading(true)

        axios.post(api.upload, {
            ...formData,
            id:carId
        }).then((res) => {
            if (res.data && res.data.success) {
                setToastMessage("Tu información fue guardada")
                setToastType(classes.success)
                setFormData({ ...formData, ["nombre"]: undefined });
                selectId("") 
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
        validate(formData, carId)
    }, [formData])


    return (

        <form onSubmit={handleUploadCar} className={classes.form}>
            <TextField
                className={classes.inputs}
                label={"Nombre"}
                type="text"
                size="small"
                name="nombre"
                value={nombre || ''}
                onChange={handleChange}
                focus="true"
            />
            {error && <Typography variant="subtitle2" color="error">{errorMessage}</Typography>}
            <Button
                // className={classes.inputs}
                variant="contained"
                color="primary"
                type="submit"
                disabled={error || loading}
                style={{ textTransform: 'none', marginTop: 10 }}
            >
                {loading ? "Publicando" : "Guardar información"}
            </Button>
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
        </form>

    )
}





export default SignInForm;
