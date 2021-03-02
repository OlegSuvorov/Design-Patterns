import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  Component1,
  Component2,
  ConcreteMediator,
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
  const [component1, setComponent1] = useState();
  const [component2, setComponent2] = useState();
  const [mediator, setMediator] = useState();

  const handleCreateComponent1 = () => {
    const component = new Component1();
    addMessage('Component 1 was created!');
    setComponent1(component);
  };

  const handleCreateComponent2 = () => {
    const component = new Component2();
    addMessage('Component 2 was created!');
    setComponent2(component);
  };

  const handleCreateMediator = () => {
    const mediator = new ConcreteMediator(component1, component2);
    addMessage('Mediator was created!');
    setMediator(mediator);
  };

  const handleTriggerOperationA = () => {
    addMessage(component1.doA());
  };

  const handleTriggerOperationD = () => {
    addMessage(component2.doD());
  };

  const handleClearAll = () => {
    setMediator(null);
    setComponent1(null);
    setComponent2(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!component1 &&
        <Button
          variant="contained"
          onClick={handleCreateComponent1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Component 1
        </Button>}
        {!component2 &&
        <Button
          variant="contained"
          onClick={handleCreateComponent2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Component 2
        </Button>}
        {component1 && component2 && !mediator &&
        <Button
          variant="contained"
          onClick={handleCreateMediator}
          classes={{ root: classes.button }}
          fullWidth
        >
         Create Mediator for Components 1 and 2
        </Button>}
        {mediator &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleTriggerOperationA}
          classes={{ root: classes.button }}
          fullWidth
        >
         Trigger operation A with Component 1
        </Button>}
        {mediator &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleTriggerOperationD}
          classes={{ root: classes.button }}
          fullWidth
        >
          Trigger operation D with Component 2
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
