import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import shoesImage from '../assets/static/adidas1.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: '0 0 20px 0',
    maxWidth: '90%',
  },
  image: {
    width: 256,
    height: 256,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

const ProductInBasket = ({ view_list, name, model_number, pricing_information, attribute_list, variation_list }) => {
  const { image_url } = view_list[0];
  const { currentPrice } = pricing_information;
  const {color } = attribute_list;
  const {size} = variation_list[0];
  console.log(image_url);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt='complex' src={image_url} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='subtitle1'>
                  {`${name} ${model_number}`}
                </Typography>
                <Typography variant='body2' gutterBottom>
                  {color}
                </Typography>
                <Typography variant='body2' color='textSecondary'>
                  {size}
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant='body2' style={{ cursor: 'pointer' }}>
                  Remove
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='subtitle1'>{`$${currentPrice}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

export default ProductInBasket;
