import { render, screen } from "@testing-library/react";
import { CardTournament } from "../global/CardTournament";
import { Provider } from "react-redux";
import { store } from "../../store";

const tournamentTest = {
  category: 1,
  title: "Jungle Bog",
  info: "Clash",
  numberOfTeams: 20,
  teamsSize: 2,
  teamsData: [
    {
      teamName: "Dummy",
      id: 1,
    },
    {
      teamName: "Miami Aligators",
      id: 3,
    },
  ],
  remainingTeams: [
    {
      teamName: "Dummy",
      id: 2,
    },
    {
      teamName: "Miami Aligators",
      id: 3,
    },
  ],
  matches: [
    {
      teamData: [
        {
          teamName: "Dummy",
          id: 1,
        },
        {
          teamName: "Miami Aligators",
          id: 3,
        },
      ],
      winner: {
        teamName: "Miami Aligators",
        id: 3,
      },
    },
  ],
  status: "Concluído",
  tournamentWinner: {
    teamName: "Miami Aligators",
    id: 3,
  },
  deadline: "2021-01-22T14:15",
  userId: 1,
  id: 1,
};

describe("When everything is ok", () => {
  test("Should title appear", async () => {
    render(
      <Provider store={store}>
        <CardTournament tournament={tournamentTest} />
      </Provider>
    );
    const titleinScreen = screen.getByText(tournamentTest.title);
    expect(titleinScreen).toBeInTheDocument();
  });

  test("Should info appear", async () => {
    render(
      <Provider store={store}>
        <CardTournament tournament={tournamentTest} />
      </Provider>
    );
    const infoinScreen = screen.getByText(tournamentTest.info);
    expect(infoinScreen).toBeInTheDocument();
  });

  test("Should Teams size appear", async () => {
    render(
      <Provider store={store}>
        <CardTournament tournament={tournamentTest} />
      </Provider>
    );
    const teamsSizeinScreen = screen.getByText(
      `${tournamentTest.teamsSize} vs ${tournamentTest.teamsSize}`
    );
    expect(teamsSizeinScreen).toBeInTheDocument();
  });

  test("Should Teams spots appear", async () => {
    render(
      <Provider store={store}>
        <CardTournament tournament={tournamentTest} />
      </Provider>
    );
    const teamsSoptsinScreen = screen.getByText(
      `Vagas disponíveis: ${
        [tournamentTest.numberOfTeams] - [tournamentTest.teamsData.length]
      }`
    );
    expect(teamsSoptsinScreen).toBeInTheDocument();
  });
});
