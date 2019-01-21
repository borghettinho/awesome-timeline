import React from "react";

// Import material-ui components
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import IconButton from "@material-ui/core/IconButton";

const event = props => {
  const styles = {
    card: {
      width: "40%",
      padding: "5",
      margin: 15
    },
    pos: {
      marginBottom: "10"
    },
    media: {
      height: 100
    },
    actions: {
      display: "flex",
    }
  };

  return (
    <Card style={styles.card}>
      <CardHeader title={props.title} subheader={props.subtitle} />
      <CardMedia image={props.image} style={styles.media} />
      <CardActions style={styles.actions}>
        <IconButton>
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse>
        <CardContent>
          <Typography component="p" align="justify" style={styles.pos}>
            {props.content}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default event;
