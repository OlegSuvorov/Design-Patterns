import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  WordsCollection,
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
  const [wordsCollection, setWordsCollection] = useState();
  const [iterator, setIterator] = useState();
  const [reverseIterator, setReverseIterator] = useState();

  const handleCreateWordsCollection = () => {
    const wordsCollection = new WordsCollection();
    addMessage('WordsCollection was created!');
    setWordsCollection(wordsCollection);
  };

  const handleCreateIterator = () => {
    const iterator = wordsCollection.getIterator();
    addMessage('Iterator was created!');
    setIterator(iterator);
  };

  const handleCreateReverseIterator = () => {
    const iterator = wordsCollection.getReverseIterator();
    addMessage('Reverse Iterator was created!');
    setReverseIterator(iterator);
  };

  const handleAddItem = (item: string) => () => {
    wordsCollection.addItem(item);
    addMessage(`${item} was added!`);
  };

  const iterateCollection = () => {
    const result = ['Iterator result:'];
    while (iterator.valid()) {
      result.push(iterator.next());
    }
    iterator.rewind();
    addMessage(result);
  };

  const iterateReverseCollection = () => {
    const result = ['Reverse Iterator result:'];
    while (reverseIterator.valid()) {
      result.push(reverseIterator.next());
    }
    reverseIterator.rewind();
    addMessage(result);
  };

  const handleClearAll = () => {
    setReverseIterator(null);
    setIterator(null);
    setWordsCollection(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {!wordsCollection &&
        <Button
          variant="contained"
          onClick={handleCreateWordsCollection}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Words Collection
        </Button>}
        {wordsCollection &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem('First')}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add 'First' to collection
        </Button>}
        {wordsCollection &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem('Second')}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add 'Second' to collection
        </Button>}
        {wordsCollection &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddItem('Third')}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add 'Third' to collection
        </Button>}
        {wordsCollection && !iterator &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateIterator}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Iterator
        </Button>}
        {wordsCollection && !reverseIterator &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleCreateReverseIterator}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Reverse Iterator
        </Button>}
        {iterator &&
        <Button
          variant="contained"
          color="secondary"
          onClick={iterateCollection}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Iterator
        </Button>}
        {reverseIterator &&
        <Button
          variant="contained"
          color="secondary"
          onClick={iterateReverseCollection}
          classes={{ root: classes.button }}
          fullWidth
        >
          Use Reverse Iterator
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
