import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  Originator,
  Caretaker,
} from './implementation';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(2),
    },
    button: {
      marginBottom: theme.spacing(2),
    },
  }),
);

const InteractiveInstance =
  ({
     addMessage,
     clearAll,
  }: {
    addMessage: Function;
    clearAll: Function;
  }) => {
  const classes = useStyles();
  const [originator, setOriginator] = useState();
  const [careTaker, setCareTaker] = useState();

  const handleCreateFactory1Originator = () => {
    const originator = new Originator('Super-duper', addMessage);
    setOriginator(originator);
  };

  const handleCreateCareTaker = () => {
    const careTaker = new Caretaker(originator);
    addMessage('CareTaker was created!');
    setCareTaker(careTaker);
  };

  const handleUseBackUp = () => {
    addMessage(careTaker.backup());
  };

  const handleShowState = () => {
    addMessage([
      'Current State:',
      originator.getState(),
    ]);
  };

  const handleUseUndo = () => {
    addMessage(careTaker.undo());
  };

  const handleDoSomething = () => {
    addMessage(originator.doSomething());
  };

  const handleShowHistory = () => {
    addMessage(careTaker.showHistory());
  };

  const handleClearAll = () => {
    setCareTaker(null);
    setOriginator(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!originator &&
        <Button
          variant="contained"
          onClick={handleCreateFactory1Originator}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Originator <br />
          with string 'Super-duper'
        </Button>}
        {originator && !careTaker &&
        <Button
          variant="contained"
          onClick={handleCreateCareTaker}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create CareTaker
        </Button>}
        {originator &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleShowState}
          classes={{ root: classes.button }}
          fullWidth
        >
          Show Originator state
        </Button>}
        {originator &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleDoSomething}
          classes={{ root: classes.button }}
          fullWidth
        >
          Do something with Originator
        </Button>}
        {careTaker &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseBackUp}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use backup
        </Button>}
        {careTaker &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseUndo}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use UnDo
        </Button>}
        {careTaker &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleShowHistory}
          classes={{ root: classes.button }}
          fullWidth
        >
          Show History
        </Button>}
        <Button
          variant="contained"
          onClick={handleClearAll}
          classes={{ root: classes.button }}
          fullWidth
        >
          Clear All
        </Button>
      </Grid>
    </div>
  );
};

export default InteractiveInstance;
