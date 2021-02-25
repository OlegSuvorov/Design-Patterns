import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { RealSubject, Proxy } from './implementation';

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
  const [realSubject, setRealSubject] = useState();
  const [proxy, setProxy] = useState();

  const handleCreateRealSubject = () => {
    const subject = new RealSubject();
    addMessage('Real Subject was created!');
    setRealSubject(subject);
  };

  const handleCreateProxy = () => {
    const proxy = new Proxy(realSubject);
    addMessage('Proxy was created!');
    setProxy(proxy);
  };

  const handleRequestRealSubject = () => {
    addMessage(realSubject.request());
  };

  const handleRequestProxy = () => {
    addMessage(proxy.request());
  };

  const handleClearAll = () => {
    setProxy(null);
    setRealSubject(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateRealSubject}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Real Subject
        </Button>
        {realSubject &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleRequestRealSubject}
          classes={{ root: classes.button }}
          fullWidth
        >
          Request Real Subject
        </Button>}
        {realSubject &&
        <Button
          variant="contained"
          onClick={handleCreateProxy}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Proxy
        </Button>}
        {proxy &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleRequestProxy}
          classes={{ root: classes.button }}
          fullWidth
        >
         Request Proxy
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
