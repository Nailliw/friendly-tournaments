import { render, screen } from "@testing-library/react";
import { CardTeam } from "../global/CardTeam";
import { Provider } from "react-redux";
import { store } from "../../store";

const teamTest = {
  teamName: "LA Eagles",
  teamInfo: "League of Legends Team based in Los Angeles",
  playersId: [1, 2, 3],
  tournamentsWon: [1, 3],
  tournamentsDisputed: [1, 2, 3],
  userId: 1,
  id: 2,
};

describe("When everything is ok", () => {
  test("Should title appear", async () => {
    render(
      <Provider store={store}>
        <CardTeam team={teamTest} />
      </Provider>
    );
    const titleinScreen = screen.getByText(teamTest.teamName);
    expect(titleinScreen).toBeInTheDocument();
  });

  test("Should Team Info appear", async () => {
    render(
      <Provider store={store}>
        <CardTeam team={teamTest} />
      </Provider>
    );
    const titleinScreen = screen.getByText(teamTest.teamInfo);
    expect(titleinScreen).toBeInTheDocument();
  });
});
