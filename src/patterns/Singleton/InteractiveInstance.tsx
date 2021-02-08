import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { Singleton } from './implementation';

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
   }: {
    addMessage: Function;
  }) => {
  const classes = useStyles();

  const handleClick = () => {
    Singleton.getInstance(addMessage);
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleClick}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Singleton instance
        </Button>
      </Grid>
    </div>
  );
};

export default InteractiveInstance;
