import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  SimpleCommand,
  ComplexCommand,
  Invoker,
  Receiver,
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
  const [simpleCommand, setSimpleCommand] = useState();
  const [complexCommand, setComplexCommand] = useState();
  const [invoker, setInvoker] = useState();

  const handleCreateSimpleCommand = () => {
    const command = new SimpleCommand('Say Hi!');
    addMessage('Simple command was created!');
    setSimpleCommand(command);
  };

  const handleCreateComplexCommand = () => {
    const receiver = new Receiver();
    const command = new ComplexCommand(receiver, 'Send email', 'Save report');
    addMessage('Complex command was created!');
    setComplexCommand(command);
  };

  const handleCreateInvoker = () => {
    const invoker = new Invoker();
    invoker.setOnStart(simpleCommand);
    invoker.setOnFinish(complexCommand);
    setInvoker(invoker);
    addMessage('Invoker was created!');
  };

  const handleExecuteSimpleCommand = () => {
    addMessage(simpleCommand.execute());
  };

  const handleExecuteComplexCommand = () => {
    addMessage(complexCommand.execute());
  };

  const handleExecuteInvoker = () => {
    addMessage(invoker.doSomethingImportant());
  };

  const handleClearAll = () => {
    setInvoker(null);
    setComplexCommand(null);
    setSimpleCommand(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateSimpleCommand}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Simple Command 'Say Hi!'
        </Button>
        <Button
          variant="contained"
          onClick={handleCreateComplexCommand}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Complex Command 'Send email' + 'Save report' <br />
          With Receiver
        </Button>
        {!invoker && simpleCommand && complexCommand &&
        <Button
          variant="contained"
          onClick={handleCreateInvoker}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Invoker (launch Simple and Complex Commands)
        </Button>}
        {simpleCommand &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleExecuteSimpleCommand}
          classes={{ root: classes.button }}
          fullWidth
        >
          Execute Simple Command
        </Button>}
        {complexCommand &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleExecuteComplexCommand}
          classes={{ root: classes.button }}
          fullWidth
        >
          Execute Complex Command
        </Button>}
        {invoker &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleExecuteInvoker}
          classes={{ root: classes.button }}
          fullWidth
        >
          Execute Invoker
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
