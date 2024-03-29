import { Box, Button, Card, CardContent, TextField, Typography } from '@mui/material'
import React, { useEffect } from 'react'
import Center from './Center'
import useForm from '../Hooks/useForms'
import { ENDPOINTS, createAPIEndpoint } from '../api'
import useStateContext from '../Hooks/useStateContext'
import { useNavigate } from 'react-router-dom'

const getFreshModelObject = ()=> ({
    name: '',
    email:''
})

export default function Login() {

    const {context, setContext, resetContext} = useStateContext(); 
    const navigate = useNavigate()
    const {
        values,
        setValues,
        errors,
        setErrors,
        handleInputChange
    } = useForm(getFreshModelObject);

    useEffect(() => {
        resetContext()
    }, [])

    const login = e =>{
        e.preventDefault();
        if(validate())
            createAPIEndpoint(ENDPOINTS.participant)
            .post(values)
            .then(res => {
                setContext({participantId:res.data.participantId})
                navigate('/quiz')
            })
            .catch(err => console.log(err))
    } 

    const validate = ()=>{
        let temp = {}
        temp.email = (/\S+@\S+\.\S+/).test(values.email)?"":"Email is not valid."
        temp.name = values.name!=""?"":"This field is required."
        setErrors(temp)
        return Object.values(temp).every(x=> x=="")
    }

    return (
        <Center>
            <Card sx= {{ width: 400 }}>

                <CardContent sx={{textAlign:"Center"}}>

                    <Typography variant="h3" sx={{my:4}}>
                        Quiz App
                    </Typography>

                <Box sx= {{
                    '& .MuiTextField-root': {
                    margin: 1,
                    width:'90%'
                }
                    }} > 
                <form noValidate onSubmit={login}>
                    <TextField
                        label="Email"
                        name='email'
                        value={values.email}
                        onChange={handleInputChange}
                        variant='outlined'
                        {...(errors.email && {error:true, helperText:errors.email})}/>

                    <TextField
                        label="Name"
                        name='name'
                        value={values.name}
                        onChange={handleInputChange}
                        variant='outlined'
                        {...(errors.name && {error:true, helperText:errors.name})}/>
                    
                    <Button     
                        type="submit"
                        variant='contained'
                        size='large'
                        sx={{width:'90%'}}>Start</Button>
                </form>
            </Box>
                </CardContent>
            </Card>
        </Center>


    )
}
