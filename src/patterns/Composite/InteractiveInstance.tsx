import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import {
  Leaf,
  Composite,
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
  const [leaf, setLeaf] = useState();
  const [tree, setTree] = useState();
  const [branch1, setBranch1] = useState();
  const [branch2, setBranch2] = useState();

  const handleCreateLeaf = () => {
    const leaf = new Leaf();
    addMessage('Leaf was created!');
    setLeaf(leaf);
  };

  const handleUseLeaf = () => {
    addMessage(`Result: ${leaf.operation()}!`);
  };

  const handleUseTree = () => {
    addMessage(`Result: ${tree.operation()}!`);
  };

  const handleUseBranch1 = () => {
    addMessage(`Result: ${branch1.operation()}!`);
  };

  const handleUseBranch2 = () => {
    addMessage(`Result: ${branch2.operation()}!`);
  };

  const handleCreateTree = () => {
    const tree = new Composite();
    addMessage('Tree was created!');
    setTree(tree);
  };

  const handleAddLeafToBranch1 = () => {
    branch1.add(new Leaf());
    addMessage('Leaf added to Branch 1!');
  };

  const handleAddLeafToBranch2 = () => {
    branch2.add(new Leaf());
    addMessage('Leaf added to Branch 2!');
  };

  const handleAddBranch1ToTree = () => {
    const branch = new Composite();
    setBranch1(branch);
    tree.add(branch);
    addMessage('Branch 1 added to the tree!');
  };

  const handleAddBranch2ToTree = () => {
    const branch = new Composite();
    setBranch2(branch);
    tree.add(branch);
    addMessage('Branch 2 added to the tree!');
  };

  const handleClearAll = () => {
    setLeaf(null);
    setBranch1(null);
    setBranch2(null);
    setTree(null);
    clearAll();
  };

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        <Button
          variant="contained"
          onClick={handleCreateLeaf}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Leaf
        </Button>
        {leaf &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseLeaf}
          classes={{ root: classes.button }}
          fullWidth
        >
          Result of Leaf
        </Button>}
        {!tree &&
        <Button
          variant="contained"
          onClick={handleCreateTree}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Tree
        </Button>}
        {tree && !branch1 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBranch1ToTree}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add branch 1 to tree
        </Button>}
        {tree && !branch2 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddBranch2ToTree}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add branch 2 to tree
        </Button>}
        {branch1 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddLeafToBranch1}
          classes={{ root: classes.button }}
          fullWidth
        >
         Add Leaf to Branch 1
        </Button>}
        {branch2 &&
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddLeafToBranch2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Add Leaf to Branch 2
        </Button>}
        {branch1 &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseBranch1}
          classes={{ root: classes.button }}
          fullWidth
        >
          Result of Branch 1
        </Button>}
        {branch2 &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseBranch2}
          classes={{ root: classes.button }}
          fullWidth
        >
          Result of Branch 2
        </Button>}
        {tree &&
        <Button
          variant="contained"
          color="secondary"
          onClick={handleUseTree}
          classes={{ root: classes.button }}
          fullWidth
        >
          Result of Tree
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
