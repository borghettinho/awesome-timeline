import React, { Component } from "react";
import Event from "./Event/Event";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import "./App.css";

class App extends Component {
  state = {
    events: [
      {
        id: 0,
        title: "Dilma eleita",
        subtitle: "Dilma Roussef é reeleita presidenta do Brasil",
        date: {
          day: null,
          month: null,
          year: "2014"
        },
        img:
          "https://conteudo.imguol.com.br/c/noticias/2014/10/26/dilma-eleita-1414359092930_956x500.jpg",
        content:
          "Após campanha turbulenta, Dilma Roussef é eleita presidenta do Brasil com 51% dos votos válidos"
      }
    ]
  };

  render() {
    let events = null;
    events = this.state.events.map(event => {
      return (
        <Event
          key={event.id}
          title={event.title}
          subtitle={event.subtitle}
          content={event.content}
          date={event.date}
          image={event.img}
        />
      );
    });

    return (
      <Grid container direction="row" alignItems="center" justify="center">
        {events}
      </Grid>
    );
  }
}

export default App;
