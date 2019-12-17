import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  title: {
    fontSize: 26,
    paddingBottom: 16,
    fontWeight: 'bold',
  },
  item: {
    marginTop: 16,
  },
  button: {
    marginTop: 30,
    color: 'white',
    backgroundColor: 'black',
    '&:hover': {
      backgroundColor: 'black',
      borderColor: 'gray',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
      backgroundColor: 'gray',
      borderColor: 'gray',
    },
  },
});

const OrderSummary = (props) => {
  const classes = useStyles();
  const { total, taxes, items } = props;
  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
            ORDER SUMMARY
          </Typography>
          <Divider />
          <Grid container direction='row' justify='space-between' alignItems='center' spacing={2}>
            <Grid item xs={6}>
              <Typography className={classes.item} variant='h6' component='h2'>
                {`${items} Items `}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography className={classes.item} align='right' variant='h5' component='h2'>
                {`$${total}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6' component='h2'>
                Delivery
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align='right' variant='h5' component='h2'>
                FREE
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6' component='h2'>
                Taxes
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography align='right' variant='h5' component='h2'>
                {`$${taxes}`}
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Typography variant='h6' component='h2'>
                TOTAL
              </Typography>
            </Grid>
            <Grid item xs={6}>
              <Divider />
              <Typography align='right' variant='h5' component='h2'>
                {`$${total}`}
              </Typography>
            </Grid>
          </Grid>
          <Button
            variant='contained'
            className={classes.button}
            size='large'
            fullWidth={true}
          >
            Checkout
          </Button>
        </CardContent>
      </Card>

    </>
  );
};

const mapStateToProps = (state) => {
  return {
    total: state.total,
    delivery: state.delivery,
    taxes: state.taxes,
    items: state.items,
  };
};

export default connect(mapStateToProps, null)(OrderSummary);
