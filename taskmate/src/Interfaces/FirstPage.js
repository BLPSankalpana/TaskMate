import React from 'react';
import styles from './FirstPage.module.css';
import FirstPageImage from './FirstPageImage.png';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import { FaGoogle } from 'react-icons/fa';

export default function FirstPage() {
  return (
    <div className={styles.MainContainer}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <h1 className={styles.Heading1}>Welcome to TaskMate,</h1>
          <p className={styles.para}>
            TaskMate is your go-to tool for seamless task organization in your
            day-to-day life. With our user-friendly interface, you can
            effortlessly create todo lists, weekly planners, monthly planners,
            and much more. Say goodbye to scattered notes and overwhelming
            to-do apps. TaskMate offers a range of tools designed to help you
            stay organized, prioritize tasks, and accomplish your goals
            effectively.
          </p>

          <Card sx={{ minWidth: 275, backgroundColor: '#AF7FA1' }} className={styles.card}>
            <CardContent>
              <Typography>
                <h3 className={styles.heading3}><b>Sign In with TaskMate</b></h3>
              </Typography>
              <TextField
                id="outlined-basic"
                label="Username"
                variant="outlined"
                className={styles.textfield}
              />
              <br /><br/>
              <TextField
                id="outlined-basic"
                label="Password"
                variant="outlined"
                className={styles.textfield}
                type="password"
                
              />
              <br/><br/>
              <Button variant="outlined">Sign In</Button>
              <br /><br/>
              <Typography className={styles.text}>OR</Typography>
              
              <Button variant="outlined">
                Sign In with Google.....<FaGoogle />
              </Button>
            </CardContent>
            <CardActions className={styles.cardAction}>
              <Typography className={styles.text}>Not Registered yet ?</Typography>
              <Button size="small">
                <u>SignUp</u>
              </Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6} className={styles.imageContainer}>
          <img src={FirstPageImage} alt="TaskMate" width={600} />
        </Grid>
      </Grid>
    </div>
  );
}
