import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';

import { makeStyles } from '@mui/styles';
import "./Signup.css";
import insta from "../Assets/insta.jpg";
import Alert from '@mui/material/Alert';

export default function Login() {
  const useStyles = makeStyles({
    text1:{
      color:"grey",
      textAlign:"center"
    }
  })
  const classes = useStyles();
  return (
    <div className="signupWrapper">
      <div className="signupCard">
      <Card varient = "outlined">  
              <div className="insta-logo">
                 <img src={insta} alt="" />
              </div>     
        <CardContent>
          <Typography className={classes.text1}  variant="subtitle1">
            Signup to see Photos And Videos from your friends
          </Typography>
               {true && <Alert severity="error">This is an error alert — check it out!</Alert>}

          <Typography variant="body2" color="text.secondary">
            Lizards are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent> 
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
      </div>
    </div>

  );
}