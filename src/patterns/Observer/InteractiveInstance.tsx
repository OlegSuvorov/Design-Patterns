import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  ConcreteObserverA,
  ConcreteObserverB,
  ConcreteSubject,
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
  const [subject, setSubject] = useState();
  const [observerA, setObserverA] = useState();
  const [observerB, setObserverB] = useState();

  const handleCreateSubject = () => {
    const subject = new ConcreteSubject();
    addMessage('Subject was created!');
    setSubject(subject);
  };

  const handleCreateObserverA = () => {
    const observer = new ConcreteObserverA();
    addMessage('Observer A was created!');
    setObserverA(observer);
  };

  const handleCreateObserverB = () => {
    const observer = new ConcreteObserverB();
    addMessage('Observer B was created!');
    setObserverB(observer);
  };

  const handleAttachObserverA = () => {
    addMessage(subject.attach(observerA));
  };

  const handleAttachObserverB = () => {
    addMessage(subject.attach(observerB));
  };

  const handleDetachObserverA = () => {
    addMessage(subject.detach(observerA));
  };

  const handleDetachObserverB = () => {
    addMessage(subject.detach(observerB));
  };

  const handleUseBusinessLogic = () => {
    addMessage(subject.someBusinessLogic());
  };

  const handleClearAll = () => {
    setObserverA(null);
    setSubject(null);
    setObserverB(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!subject &&
        <Button
          variant="contained"
          onClick={handleCreateSubject}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Subject
        </Button>}
        {!observerA &&
        <Button
          variant="contained"
          onClick={handleCreateObserverA}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Observer A
        </Button>}
        {!observerB &&
        <Button
          variant="contained"
          onClick={handleCreateObserverB}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Observer B
        </Button>}
        {subject && observerA &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAttachObserverA}
          classes={{ root: classes.button }}
          fullWidth
        >
          Attach Observer A
        </Button>}
        {subject && observerB &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAttachObserverB}
          classes={{ root: classes.button }}
          fullWidth
        >
          Attach Observer B
        </Button>}
        {subject && observerA &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleDetachObserverA}
          classes={{ root: classes.button }}
          fullWidth
        >
         Detach Observer A
        </Button>}
        {subject && observerB &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleDetachObserverB}
          classes={{ root: classes.button }}
          fullWidth
        >
          Detach Observer B
        </Button>}
        {subject &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseBusinessLogic}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Subject business logic
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
