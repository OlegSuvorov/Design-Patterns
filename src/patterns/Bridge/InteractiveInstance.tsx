import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  Abstraction,
  ExtendedAbstraction,
  ConcreteImplementationA,
  ConcreteImplementationB,
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
  const [abstraction, setAbstraction] = useState();
  const [extendedAbstraction, setExtendedAbstraction] = useState();

  const handleCreateExtendedAbstraction = () => {
    const implementation = new ConcreteImplementationB();
    const abstraction = new ExtendedAbstraction(implementation);
    setExtendedAbstraction(abstraction);
    addMessage('Extended abstraction was created!');
  };

  const handleCreateAbstraction = () => {
    const implementation = new ConcreteImplementationA();
    const abstraction = new Abstraction(implementation);
    setAbstraction(abstraction);
    addMessage('Abstraction was created!');
  };

  const handleUseAbstraction = () => {
    addMessage(abstraction.operation());
  };

  const handleUseExtendedAbstraction = () => {
    addMessage(extendedAbstraction.operation());
  };

  const handleClearAll = () => {
    setExtendedAbstraction(null);
    setAbstraction(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateAbstraction}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Abstraction with Concrete Implementation A
        </Button>
        {abstraction &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseAbstraction}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Abstraction
        </Button>}
        <Button
          variant="contained"
          onClick={handleCreateExtendedAbstraction}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Extended Abstraction with Concrete Implementation B
        </Button>
        {extendedAbstraction &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseExtendedAbstraction}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Extended Abstraction
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
