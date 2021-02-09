import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import { ConcreteBuilder1, Director } from './implementation';

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
    const [builderWithDirector, setBuilderWithDirector] = useState();
    const [director, setDirector] = useState();
    const [isProducedProductWithDirector, setIsProducedProductWithDirector] = useState(false);
    const [isProducedProductWithoutDirector, setIsProducedProductWithoutDirector] = useState(false);
    const [builderWithoutDirector, setBuilderWithoutDirector] = useState();

    const handleCreateBuilderWithDirector = () => {
      const builder = new ConcreteBuilder1();
      const director = new Director();
      director.setBuilder(builder);
      addMessage('Builder with Director was created!');
      setBuilderWithDirector(builder);
      setDirector(director);
    };

    const handleCreateBuilderWithoutDirector = () => {
      const builder = new ConcreteBuilder1();
      addMessage('Builder without Director was created!');
      setBuilderWithoutDirector(builder);
    };

    const handleBuildMinimalViableProduct = () => {
      director.buildMinimalViableProduct();
      if (!isProducedProductWithDirector) {
        setIsProducedProductWithDirector(true);
      }
      addMessage('Minimal Viable Product was created!');
    };

    const handleBuildProductPartA = () => {
      builderWithoutDirector.producePartA();
      addMessage('Product Part A was built!');
      if (!isProducedProductWithoutDirector) {
        setIsProducedProductWithoutDirector(true);
      }
    };

    const handleBuildProductPartB = () => {
      builderWithoutDirector.producePartB();
      addMessage('Product Part B was built!');
      if (!isProducedProductWithoutDirector) {
        setIsProducedProductWithoutDirector(true);
      }
    };

    const handleBuildProductPartC = () => {
      builderWithoutDirector.producePartC();
      addMessage('Product Part C was built!');
      if (!isProducedProductWithoutDirector) {
        setIsProducedProductWithoutDirector(true);
      }
    };

    const handleBuildFullFeaturedProduct = () => {
      director.buildFullFeaturedProduct();
      if (!isProducedProductWithDirector) {
        setIsProducedProductWithDirector(true);
      }
      addMessage('Full Featured Product was created!');
    };

    const handleShowProductsWithDirector = () => {
      builderWithDirector.getProduct().listParts(addMessage);
      setIsProducedProductWithDirector(false);
    };

    const handleShowProductsWithoutDirector = () => {
      builderWithoutDirector.getProduct().listParts(addMessage);
      setIsProducedProductWithoutDirector(false);
    };

    const handleClearAll = () => {
      setBuilderWithoutDirector(null);
      setBuilderWithDirector(null);
      setDirector(null);
      setIsProducedProductWithDirector(false);
      setIsProducedProductWithoutDirector(false);
      clearAll();
    };

    return (
      <div className={classes.root}>
        <Grid item xs={12} sm={12}>
          <Button
            variant="contained"
            onClick={handleCreateBuilderWithDirector}
            classes={{ root: classes.button }}
            fullWidth
          >
            Create Builder with Director
          </Button>
          {builderWithDirector &&
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuildMinimalViableProduct}
            classes={{ root: classes.button }}
            fullWidth
          >
            Build Minimal Viable Product
          </Button>}
          {builderWithDirector &&
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuildFullFeaturedProduct}
            classes={{ root: classes.button }}
            fullWidth
          >
            Build Full Featured Product
          </Button>}
          {isProducedProductWithDirector &&
          <Button
            variant="contained"
            color="secondary"
            onClick={handleShowProductsWithDirector}
            classes={{ root: classes.button }}
            fullWidth
          >
            Show Product List built with Director
          </Button>}
          <Button
          variant="contained"
          onClick={handleCreateBuilderWithoutDirector}
          classes={{ root: classes.button }}
          fullWidth
        >
          Create Builder without Director
        </Button>
          {builderWithoutDirector &&
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuildProductPartA}
            classes={{ root: classes.button }}
            fullWidth
          >
            Build Product Part A
          </Button>}
          {builderWithoutDirector &&
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuildProductPartB}
            classes={{ root: classes.button }}
            fullWidth
          >
            Build Product Part B
          </Button>}
          {builderWithoutDirector &&
          <Button
            variant="contained"
            color="primary"
            onClick={handleBuildProductPartC}
            classes={{ root: classes.button }}
            fullWidth
          >
            Build Product Part C
          </Button>}
          {isProducedProductWithoutDirector &&
          <Button
            variant="contained"
            color="secondary"
            onClick={handleShowProductsWithoutDirector}
            classes={{ root: classes.button }}
            fullWidth
          >
            Show Product List built without Director
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
