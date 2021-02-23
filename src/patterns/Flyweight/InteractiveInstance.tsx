import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { FlyweightFactory } from './implementation';

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
  const [factory, setFactory] = useState();
  const [isCar1Added, setIsCar1Added] = useState(false);
  const [isCar2Added, setIsCar2Added] = useState(false);

  const handleCreateFactory = () => {
    const carBase = [
      ['Chevrolet', 'Camaro2018', 'pink'],
      ['Mercedes Benz', 'C300', 'black'],
      ['Mercedes Benz', 'C500', 'red'],
      ['BMW', 'M5', 'red'],
      ['BMW', 'X6', 'white'],
    ];
    const factory = new FlyweightFactory(carBase);
    addMessage('Factory was created!');
    setFactory(factory);
  };

  const handleUseFactory = () => {
    factory.listFlyweights(addMessage);
  };

  const handleAddCar = (sharedProps: string[], uniqueProps: string[], carIndex: number) => () => {
    const [flyweight, message] = factory.getFlyweight(sharedProps, addMessage);
    addMessage([
      '\nClient: Adding a car to database.',
      message,
      flyweight.operation(uniqueProps),
    ]);

    if (carIndex === 1) {
      setIsCar1Added(true);
    } else {
      setIsCar2Added(true);
    }
  };

  const handleClearAll = () => {
    setFactory(null);
    setIsCar1Added(false);
    setIsCar2Added(false);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!factory &&
        <Button
          variant="contained"
          onClick={handleCreateFactory}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Factory of cars: <br />
          Chevrolet Camaro2018 pink <br />
          Mercedes Benz C300 black <br />
          Mercedes Benz C500 red <br />
          BMW M5 red <br />
          BMW X6 white <br />
        </Button>}
        {factory && !isCar1Added &&
        <Button
          variant="contained"
          onClick={handleAddCar(['BMW', 'M5', 'red'], ['CL234IR', 'James Doe'], 1)}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add car BMW M5 RED CL234IR James Doe
        </Button>}
        {factory && !isCar2Added &&
        <Button
          variant="contained"
          onClick={handleAddCar(['BMW', 'X1', 'red'], ['VB224IR', 'James Doe'], 2)}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add car BMW X1 red VB224IR James Doe
        </Button>}
        {factory &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseFactory}
          classes={{ root: classes.button }}
          fullWidth
        >
          Show Factory List
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
