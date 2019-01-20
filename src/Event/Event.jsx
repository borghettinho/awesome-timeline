import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from '@material-ui/core/CardContent'
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 400,
    padding: 5
  },
  pos: {
    marginBottom: 10
  }
};

const event = props => {

  return (
    <Card style={styles.card}>
      <CardContent>
        <Typography variant="h5" component="h3"  style={styles.pos}>
          {props.title}
        </Typography>
        <Typography variant="h5" component="h5" align="justify" color="textSecondary" style={styles.pos}>
          {props.subtitle}
        </Typography>
        <Typography component="p" align="justify"style={styles.pos}>
          {props.content}
        </Typography>
      </CardContent>
    </Card>
  )
};

export default event;
