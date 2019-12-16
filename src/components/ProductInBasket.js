import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import Typography from '@material-ui/core/Typography';
import ControlPointIcon from '@material-ui/icons/ControlPoint';
import ButtonBase from '@material-ui/core/ButtonBase';
import { addProduct, deleteProduct } from '../actions';

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
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

const ProductInBasket = (props) => {
  const { imageUrl } = props.view_list[0];
  const { currentPrice } = props.pricing_information;
  const { color } = props.attribute_list;
  const { size } = props.variation_list[0];
  const { amountToBuy } = props;
  const { name, modelNumber } = props;
  const classes = useStyles();

  const handleAddProduct = (name) => {
    props.addProduct(name);
  };

  const handleDeleteProduct = (name) => {
    props.deleteProduct({
      name,
      currentPrice,
    });
  };

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt='complex' src={imageUrl} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction='column' spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant='h5'>
                  {`${name} ${modelNumber}`}
                </Typography>
                <Typography variant='h6' gutterBottom>
                  {color}
                </Typography>
                <Typography variant='h6' color='textSecondary'>
                  {size}
                </Typography>
                <Typography variant='h6'>
                  Amount:
                </Typography>
                <Typography variant='h6'>
                  {amountToBuy}
                </Typography>
              </Grid>
              <Grid item>
                <ControlPointIcon onClick={() => handleAddProduct(name)} />
                <DeleteIcon onClick={() => handleDeleteProduct(name)} />
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant='h5'>{`$${currentPrice * amountToBuy}`}</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
};

const mapDispatchToProps = {
  addProduct,
  deleteProduct,
};

export default connect(null, mapDispatchToProps)(ProductInBasket);
