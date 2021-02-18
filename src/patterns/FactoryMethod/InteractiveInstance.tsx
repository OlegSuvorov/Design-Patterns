import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ConcreteCreator1, ConcreteCreator2 } from './implementation';

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
    const [creator1, setCreator1] = useState();
    const [creator2, setCreator2] = useState();

  const handleCreateCreator1 = () => {
    addMessage('Launched with the ConcreteCreator 1');
    const creator = new ConcreteCreator1();
    setCreator1(creator);
  };

  const handleUseProduct1 = () => {
    addMessage(creator1.someOperation());
  };

  const handleUseProduct2 = () => {
    addMessage(creator2.someOperation());
  };

  const handleCreateCreator2 = () => {
    addMessage('Launched with the ConcreteCreator 2');
    const creator = new ConcreteCreator2();
    setCreator2(creator);
  };

  const handleClearAll = () => {
    setCreator1(null);
    setCreator2(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateCreator1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Launch with Concrete Creator 1
        </Button>
        {creator1 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseProduct1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Product created with Creator 1
        </Button>}
        <Button
          variant="contained"
          onClick={handleCreateCreator2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Launch with Concrete Creator 2
        </Button>
        {creator2 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseProduct2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Product created with Creator 2
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
