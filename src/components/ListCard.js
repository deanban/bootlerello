import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';

const useStyles = makeStyles({
  card: {
    minWidth: 275,
    marginBottom: 8
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  }
});

const ListCard = ({ text }) => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <Typography className={classes.title} color="textPrimary" gutterBottom>
        <CardContent>{text}</CardContent>
      </Typography>
    </Card>
  );
};

export default ListCard;
