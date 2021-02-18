import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Prototype, ComponentWithBackReference } from './implementation';

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
  const [prototype1, setPrototype1] = useState();
  const [isPrototype1Filled, setIsPrototype1Filled] = useState(false);
  const [prototype2, setPrototype2] = useState();

  const handleCreatePrototype1 = () => {
    const prototype = new Prototype();
    addMessage('Prototype 1 was created!');
    setPrototype1(prototype);
  };

  const handleCreatePrototype2 = () => {
    const prototype = prototype1.clone();
    addMessage('Prototype 2 was created!');
    setPrototype2(prototype);
  };

  const handleFillPrototype1 = () => {
    prototype1.primitive = 245;
    prototype1.component = new Date();
    prototype1.circularReference = new ComponentWithBackReference(prototype1);

    // setPrototype1(filledPrototype);
    setIsPrototype1Filled(true);
    addMessage([
      'Prototype 1 was filled!',
      `Prototype 1 primitive = ${prototype1.primitive}`,
      `Prototype 1 component = ${prototype1.component}`,
      'Prototype 1 circularReference = Prototype 1',
    ]);
  };

  const handleCheckPrototypesEquality = () => {
    addMessage([
      `${prototype1.primitive} === ${prototype2.primitive}!`,
      `${prototype1.component} === ${prototype2.component.__proto__}!`,
      `prototype 1 circularReference === prototype 2 circularReference!`,
    ]);
  };

  const handleClearAll = () => {
    setPrototype1(null);
    setPrototype2(null);
    setIsPrototype1Filled(false);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreatePrototype1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Prototype 1 with new Prototype() constructor
        </Button>
        {prototype1 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleFillPrototype1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Fill Prototype 1 with  <br />
          primitive = 245, <br />
          component = new Date(), <br />
          circularReference = new ComponentWithBackReference(Prototype 1)
        </Button>}
        {isPrototype1Filled &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreatePrototype2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Prototype 2 with Prototype 1 clone() method
        </Button>}
        {prototype2 &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleCheckPrototypesEquality}
          classes={{ root: classes.button }}
          fullWidth
        >
          Check equality of two prototypes
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
