import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Facade, Subsystem1, Subsystem2 } from './implementation';

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
  const [facade, setFacade] = useState();
  const [subsystem1, setSubsystem1] = useState();
  const [subsystem2, setSubsystem2] = useState();

  const handleCreateFacade = () => {
    const facade = new Facade(subsystem1, subsystem2);
    addMessage('Facade was created!');
    setFacade(facade);
  };

  const handleCreateSubsystem1 = () => {
    const subsystem = new Subsystem1();
    addMessage('Subsystem 1 was created!');
    setSubsystem1(subsystem);
  };

  const handleCreateSubsystem2 = () => {
    const subsystem = new Subsystem2();
    addMessage('Subsystem 2 was created!');
    setSubsystem2(subsystem);
  };

  const handleUseFacade = () => {
    addMessage(facade.operation());
  };

  const handleUseSubsystem1 = () => {
    addMessage(subsystem1.operation1());
  };

  const handleUseSubsystem2 = () => {
    addMessage(subsystem2.operation1());
  };

  const handleClearAll = () => {
    setSubsystem1(null);
    setSubsystem2(null);
    setFacade(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateSubsystem1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Subsystem 1
        </Button>
        {subsystem1 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseSubsystem1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Subsystem 1
        </Button>}
        <Button
          variant="contained"
          onClick={handleCreateSubsystem2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Subsystem 2
        </Button>
        {subsystem2 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseSubsystem2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Subsystem 2
        </Button>}
        {subsystem1 && subsystem2 &&
        <Button
          variant="contained"
          onClick={handleCreateFacade}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Facade
        </Button>}
        {facade &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseFacade}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Facade
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
