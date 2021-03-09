import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Context, ConcreteStrategyA, ConcreteStrategyB } from './implementation';

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
      const context = new Context(new ConcreteStrategyA());
      setContext(context);
      addMessage([
        'Context was Created!',
        'Client: Strategy is set to normal sorting.'
      ]);
    };

    const handleSetStrategyA = () => {
      context.setStrategy(new ConcreteStrategyA());
      addMessage('Client: Strategy is set to normal sorting.');
    };

    const handleSetStrategyB = () => {
      context.setStrategy(new ConcreteStrategyB());
      addMessage('Client: Strategy is set to reverse sorting.');
    };

    const handleUseBusinessLogic = () => {
      addMessage(context.doSomeBusinessLogic());
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
          Create Context based on Strategy A
        </Button>}
        {context &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleSetStrategyA}
          classes={{ root: classes.button }}
          fullWidth
        >
          Set Strategy A
        </Button>}
        {context &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleSetStrategyB}
          classes={{ root: classes.button }}
          fullWidth
        >
          Set Strategy B
        </Button>}
        {context &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseBusinessLogic}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use business logic
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
