import React, { Component } from "react";
import Event from "./Event/Event";
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
        img: "",
        content:
          "Após campanha turbulenta, Dilma Roussef é eleita presidenta do Brasil com 51% dos votos válidos"
      },
      {
        id: 1,
        title: "Aécio: o teimoso",
        subtitle: "Aécio questiona o resultado das urnas",
        date: {
          day: null,
          month: null,
          year: "2014"
        },
        img: "",
        content:
          "Após a divulgação dos resultados, Aécio Neves questiona o resultado nas urnas e diz que pedirá recontagem dos votos"
      },
      {
        id: 2,
        title: "O início do complô",
        subtitle: "Eduardo Cunha eleito presidente da câmara",
        date: {
          day: null,
          month: "february",
          year: "2015"
        },
        img: "",
        content:
          "Aproximação de PMDB e PSDB garante a eleição de Eduardo Cunha para a presidência da casa"
      },
      {
        id: 3,
        title: "Bombardeio",
        subtitle: "Guerra: Legislativo x Executivo",
        date: {
          day: null,
          month: "february",
          year: "2015"
        },
        img: "",
        content:
          "Oposição se organiza e votam as chamadas pautas bomba, que enfraquecem o governo"
      },
      {
        id: 4,
        title: "Pressão popular",
        subtitle: "População pede impeachment",
        date: {
          day: null,
          month: "march",
          year: "2015"
        },
        img: "",
        content:
          "Movimentos reacionários liderados pelo MBL organizam manifestações ao redor do Brasil pedindo o impeachment da presidenta"
      }
    ]
  };

  render() {
    let events = null;

    events = this.state.events.map(event => {
      return (
        <Event
          title={event.title}
          subtitle={event.subtitle}
          content={event.content}
          date={event.date}
        />
      );
    });

    return (
      <Grid container direction="column" alignItems="center">
        {events}
      </Grid>
    );
  }
}

export default App;
