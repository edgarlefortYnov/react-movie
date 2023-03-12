import { signInWithEmailAndPassword } from 'firebase/auth'
import React, {useContext, useState} from "react";
import {Typography} from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {makeStyles} from "@material-ui/core/styles";
import { useNavigate } from 'react-router-dom'
import { auth } from '../firebase'
import { AuthContext } from '../provider/AuthProvider'
import './Login.css'

const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(2),
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(2),
        width: '100%',
    },
}));

const Login: React.FC = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate()
    const { user, setUser } = useContext(AuthContext)
    const classes = useStyles();

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await signInWithEmailAndPassword(auth, email, password)
        if (response.user) {
            setUser(response.user)
            console.log(user)
            localStorage.setItem('@user', JSON.stringify(response.user))
            navigate('/')
        }
    };

    return (
        <div className='login-container'>
            <Typography component="h1" variant="h5">
                Login
            </Typography>
            <form className="login-form" onSubmit={handleSubmit}>
                <TextField
                    className={classes.formControl}
                    variant="outlined"
                    label="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                    className={classes.formControl}
                    variant="outlined"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <Button className={classes.button} variant="contained" color="primary" type="submit">
                    Login
                </Button>
            </form>
        </div>
    );
};

export default Login