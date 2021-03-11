import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ConcreteClass1, ConcreteClass2 } from './implementation';

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
  const [class1, setClass1] = useState();
  const [class2, setClass2] = useState();

  const handleCreateClass1 = () => {
    const class1 = new ConcreteClass1();
    addMessage('Class 1 was created!');
    setClass1(class1);
  };

  const handleCreateClass2 = () => {
    const class2 = new ConcreteClass2();
    addMessage('Class 2 was created!');
    setClass2(class2);
  };

  const handleUseClass1 = () => {
    addMessage(class1.templateMethod());
  };

  const handleUseClass2 = () => {
    addMessage(class2.templateMethod());
  };

    const handleClearAll = () => {
    setClass1(null);
    setClass2(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!class1 &&
        <Button
          variant="contained"
          onClick={handleCreateClass1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Class 1
        </Button>}
        {!class2 &&
        <Button
          variant="contained"
          onClick={handleCreateClass2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Class 2
        </Button>}
        {class1 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseClass1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Launch Class 1 templateMethod
        </Button>}
        {class2 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleUseClass2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Launch Class 2 templateMethod
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
