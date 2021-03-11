import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  ConcreteComponentA,
  ConcreteComponentB,
  ConcreteVisitor1,
  ConcreteVisitor2,
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
  const [componentA, setComponentA] = useState();
  const [componentB, setComponentB] = useState();
  const [visitor1, setVisitor1] = useState();
  const [visitor2, setVisitor2] = useState();

  const handleCreateComponentA = () => {
    const component = new ConcreteComponentA();
    addMessage('Component A was created!');
    setComponentA(component);
  };

  const handleCreateComponentB = () => {
    const component = new ConcreteComponentB();
    addMessage('Component B was created!');
    setComponentB(component);
  };

  const handleCreateVisitor1 = () => {
    const visitor = new ConcreteVisitor1();
    addMessage('Visitor 1 was created!');
    setVisitor1(visitor);
  };

  const handleCreateVisitor2 = () => {
    const visitor = new ConcreteVisitor2();
    addMessage('Visitor 2 was created!');
    setVisitor2(visitor);
  };

  const handleUseVisitor1 = () => {
    const message = ['The client code works with all visitors via the base Visitor interface:'];
    if (componentA) {
      message.push(componentA.accept(visitor1));
    }
    if (componentB) {
      message.push(componentB.accept(visitor1));
    }
    addMessage(message);
  };

  const handleUseVisitor2 = () => {
    const message = ['The client code works with all visitors via the base Visitor interface:'];
    if (componentA) {
      message.push(componentA.accept(visitor2));
    }
    if (componentB) {
      message.push(componentB.accept(visitor2));
    }
    addMessage(message);
  };

  const handleClearAll = () => {
    setVisitor1(null);
    setComponentA(null);
    setComponentB(null);
    setVisitor2(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!componentA &&
        <Button
          variant="contained"
          onClick={handleCreateComponentA}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Component A
        </Button>}
        {!componentB &&
        <Button
          variant="contained"
          onClick={handleCreateComponentB}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Component B
        </Button>}
        {!visitor1 &&
        <Button
          variant="contained"
          onClick={handleCreateVisitor1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Visitor 1
        </Button>}
        {!visitor2 &&
        <Button
          variant="contained"
          onClick={handleCreateVisitor2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Visitor 2
        </Button>}
        {(componentA || componentB) && visitor1 &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseVisitor1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Visitor 1 with existing components
        </Button>}
        {(componentA || componentB) && visitor2 &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseVisitor2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Visitor 2 with existing components
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
