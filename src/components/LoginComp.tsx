import { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

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

interface LoginProps {
  onLogin: (username: string, password: string) => void;
}

const Login: React.FC<LoginProps> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const classes = useStyles();

  const handleUsernameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onLogin(username, password);
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
                label="Username"
                value={username}
                onChange={handleUsernameChange}
            />
            <TextField
                className={classes.formControl}
                variant="outlined"
                label="Password"
                type="password"
                value={password}
                onChange={handlePasswordChange}
            />
            <Button className={classes.button} variant="contained" color="primary" type="submit">
                Login
            </Button>
        </form>
    </div>

  );
};

export default Login;