import React, { useState, useEffect } from 'react';

import { useStyles } from './Account.styles';
import catalogs from '../../constants/catalogs';


import { Card, } from '@material-ui/core'
//componentes
import Info from './accountComponents/Info';
import View from './accountComponents/View';
import SignInForm from '../../components/Forms/SignInForm';

const SignIn = (props) => {

    const { pageInfo } = catalogs
    const classes = useStyles();
    const [image, setImage] = useState('');
    const [carId, setCarId] = useState('');
    const selectId = (id)=>{
        setCarId(id)
    }


    return (
        <>
            <Card className={classes.signInRoot}>
                <div className={classes.content}>
                    <Info title={"BIENVENIDO A"}   highlight={"ECB"} message={pageInfo.welcomeMessage} />
                    <SignInForm carId={carId} selectId={(id) => selectId(id)} />
                </div>
                <View carId={carId} selectId={(id) => selectId(id)} className={classes.cover} />

            </Card>
        </>
    )
}



export default SignIn;
