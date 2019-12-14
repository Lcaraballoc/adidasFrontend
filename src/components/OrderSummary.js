import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 32,
    paddingBottom: 16,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function SimpleCard() {
  const classes = useStyles();

  return (
    <>
      <Card className={classes.card}>
        <CardContent>
          <Typography className={classes.title}>
                        ORDER SUMMARY
          </Typography>
          <Typography variant='h5' component='h2'>
                        ITEMS :
          </Typography>
          <Typography variant='h5' component='h2'>
                        DELIVERY:
          </Typography>
          <Typography variant='h5' component='h2'>
                        TAXES:
          </Typography>
          <Typography variant='h5' component='h2'>
                        TOTAL:
          </Typography>
        </CardContent>
      </Card>
      <Button className={classes.button} variant='contained'>Default</Button>
    </>
  );
};
