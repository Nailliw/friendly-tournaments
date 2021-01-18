import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";

import { RegisterUser } from "../pages/RegisterUser";
import { RegisterTeam } from "../pages/RegisterTeam";
import { RegisterTournament } from "../pages/RegisterTournament";

import { Tournaments } from "../pages/Tournaments";

import { TournamentInfo } from "../pages/TournamentInfo";
import { EditTournament } from "../pages/EditTournament";

import { TeamInfo } from "../pages/TeamInfo";
import { EditTeam } from "../pages/EditTeam";

import { Users } from "../pages/Users";
import { UserProfile } from "../pages/UserProfile";

import { TesteApi } from "../TesteApi";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />

      <Route exact path="/registerUser" component={RegisterUser} />
      <Route exact path="/registerTeam" component={RegisterTeam} />
      <Route exact path="/registerTournament" component={RegisterTournament} />

      <Route exact path="/teams/:teamID" component={TeamInfo} />
      <Route exact path="/editTeam/:teamID" component={EditTeam} />

      <Route exact path="/tournaments" component={Tournaments} />

      <Route
        exact
        path="/tournaments/:tournamentID"
        component={TournamentInfo}
      />
      <Route
        exact
        path="/editTournament/:tournamentID"
        component={EditTournament}
      />

      <Route exact path="/users" component={Users} />
      <Route exact path="/userProfile" component={UserProfile} />
      <Route exact path="/userProfile/:userID" component={UserProfile} />

      <Route exact path="/testeapi" component={TesteApi} />

      <Route path="/" component={Home} />
      {/* Caso a URL digitada pelo Usuário não corresponda com nenhuma rota,
       a HomePage é Renderizada */}
    </Switch>
  );
};
