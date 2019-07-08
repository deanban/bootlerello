import React, { useState } from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import CardContent from '@material-ui/core/CardContent';
import { Draggable } from 'react-beautiful-dnd';

import Modal from './ModalContainer/Modal';

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

const ListCard = ({ text, cardId, index }) => {
  const [showModal, setShowModal] = useState(false);

  const classes = useStyles();
  return (
    <Draggable draggableId={String(cardId)} index={index}>
      {provided => (
        <div
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <Card className={classes.card} onClick={() => setShowModal(true)}>
            {showModal ? (
              <Modal onClose={() => setShowModal(false)} text={text} />
            ) : null}
            <Typography
              className={classes.title}
              color="textPrimary"
              gutterBottom
            >
              <CardContent>{text}</CardContent>
            </Typography>
          </Card>
        </div>
      )}
    </Draggable>
  );
};

export default ListCard;
