import React, { useState } from 'react';
import { makeStyles  } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
});

const Implementation = ({ children }: { children: React.ReactNode }) => {
  const [messages, setMessages] = useState(['']);
  const classes = useStyles();

  const addMessage = (message: string) => setMessages([...messages, message]);

  const childrenWithProps = React.Children.map(children, (child: React.ReactNode) => {
    if (child && React.isValidElement(child)) {
      return React.cloneElement(child, { addMessage });
    }
    return child;
  });

  return (
    <div className={classes.root}>
      <Grid item xs={12} sm={12}>
        {childrenWithProps}
      </Grid>
      <Grid item xs={12} sm={12}>
        <Card variant="outlined">
          <CardContent>
            {messages && messages.length > 0 &&
              messages.map((message: string, index: number) => (
                <Typography key={`${message}${index}`} color="textSecondary" gutterBottom>
                  {message}
                </Typography>
            ))}
          </CardContent>
        </Card>
      </Grid>
    </div>
  );
};

export default Implementation;
