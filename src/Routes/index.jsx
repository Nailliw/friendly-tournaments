import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";

import { Tournaments } from "../pages/Tournaments";
import { TournamentInfo } from "../pages/TournamentInfo";

import { Teams } from "../pages/Teams";
import { TeamInfo } from "../pages/TeamInfo";

// import { Users } from "../pages/Users";
import { UserProfile } from "../pages/UserProfile";

import { TesteApi } from "../TesteApi";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/teams" component={Teams} />
      <Route exact path="/teams/:teamID" component={TeamInfo} />

      <Route exact path="/tournaments" component={Tournaments} />

      <Route
        exact
        path="/tournaments/:tournamentID"
        component={TournamentInfo}
      />

      {/* <Route exact path="/users" component={Users} /> */}
      <Route exact path="/users/:userID" component={UserProfile} />

      <Route exact path="/testeapi" component={TesteApi} />

      <Route path="/" component={Home} />
      {/* Caso a URL digitada pelo Usuário não corresponda com nenhuma rota,
       a HomePage é Renderizada */}
    </Switch>
  );
};
