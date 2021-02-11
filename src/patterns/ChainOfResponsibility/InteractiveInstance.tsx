import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  MonkeyHandler,
  DogHandler,
  SquirrelHandler,
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
  const [chain, setChain] = useState();
  const foodList = ['Nut', 'Banana', 'MeatBall', 'Cup of coffee'];

  const handleCreateChain = () => {
    const monkey = new MonkeyHandler();
    const squirrel = new SquirrelHandler();
    const dog = new DogHandler();

    monkey.setNext(squirrel).setNext(dog);
    addMessage('Chain was created!');
    setChain(monkey);
  };

  const handleFeedFood = (food: string) => () => {
    addMessage(`Who wants a ${food}?`);
    const result = chain.handle(food);
    if (result) {
      addMessage(result);
    } else {
      addMessage(`${food} was left untouched.`);
    }
  };

  const handleClearAll = () => {
    setChain(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateChain}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create the chain monkey -> squirrel -> dog
        </Button>
        {chain && foodList && foodList.length > 0 &&
        foodList.map(food => (
          <Button
            key={food}
            variant="contained"
            color="primary"
            onClick={handleFeedFood(food)}
            classes={{ root: classes.button }}
            fullWidth
          >
            Feed with a {food}
          </Button>
        ))}
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
