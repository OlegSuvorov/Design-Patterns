import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Context, ConcreteStateA } from './implementation';

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
  const [context, setContext] = useState();

  const handleCreateContext = () => {
    const context = new Context(new ConcreteStateA(), addMessage);
    setContext(context);
  };

  const handleRequest1 = () => {
    addMessage(context.request1());
  };

  const handleRequest2 = () => {
    addMessage(context.request2());
  };

  const handleClearAll = () => {
    setContext(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!context &&
        <Button
          variant="contained"
          onClick={handleCreateContext}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Context with ConcreteState A
        </Button>}
        {context &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleRequest1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Request 1
        </Button>}
        {context &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleRequest2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Request 2
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
