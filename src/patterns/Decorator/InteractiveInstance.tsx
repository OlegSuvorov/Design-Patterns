import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  ConcreteComponent,
  ConcreteDecoratorA,
  ConcreteDecoratorB,
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
  const [component, setComponent] = useState();
  const [decoratorA, setDecoratorA] = useState();
  const [decoratorB, setDecoratorB] = useState();

  const handleCreateComponent = () => {
    const component = new ConcreteComponent();
    addMessage('Component was created!');
    setComponent(component);
  };

  const handleCreateAdapterA = () => {
    const decorator = new ConcreteDecoratorA(component);
    addMessage('Component was wrapped with Decorator A!');
    setDecoratorA(decorator);
  };

  const handleCreateAdapterB = () => {
    const decorator = new ConcreteDecoratorB(decoratorA);
    addMessage('Decorator A was wrapped with Decorator B!');
    setDecoratorB(decorator);
  };

  const handleUseComponent = () => {
    addMessage(`Result: ${component.operation()}!`);
  };

  const handleUseDecoratorA = () => {
    addMessage(`Result: ${decoratorA.operation()}!`);
  };

  const handleUseDecoratorB = () => {
    addMessage(`Result: ${decoratorB.operation()}!`);
  };

  const handleClearAll = () => {
    setDecoratorA(null);
    setComponent(null);
    setDecoratorB(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateComponent}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Component
        </Button>
        {component && !decoratorA &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateAdapterA}
          classes={{ root: classes.button }}
          fullWidth
        >
          Wrap Component with Decorator A
        </Button>}
        {decoratorA && !decoratorB &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateAdapterB}
          classes={{ root: classes.button }}
          fullWidth
        >
          Wrap Decorator A with Decorator B
        </Button>}
        {component &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseComponent}
          classes={{ root: classes.button }}
          fullWidth
        >
          Result of Component
        </Button>}
        {decoratorA &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseDecoratorA}
          classes={{ root: classes.button }}
          fullWidth
        >
          Result of Decorator A
        </Button>}
        {decoratorB &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseDecoratorB}
          classes={{ root: classes.button }}
          fullWidth
        >
          Result of Decorator B
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
