import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Target, Adaptee, Adapter } from './implementation';

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

  const handleUseTarget = () => {
    const target = new Target();
    addMessage(target.request());
  };

  const handleUseAdaptee = () => {
    const adaptee = new Adaptee();
    addMessage(adaptee.specificRequest());
  };

  const handleUseAdapter = () => {
    const adaptee = new Adaptee();
    const adapter = new Adapter(adaptee);
    addMessage(adapter.request());
  };

  const handleClearAll = () => {
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleUseTarget}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Target request
        </Button>
        <Button
          variant="contained"
          onClick={handleUseAdaptee}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Adaptee specific request
        </Button>
        <Button
          variant="contained"
          onClick={handleUseAdapter}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Adaptee specific request with Adapter
        </Button>
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
