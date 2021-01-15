import { Switch, Route } from "react-router-dom";

import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { RegisterUser } from "../pages/RegisterUser";
import { Users } from "../pages/Users";
import { RegisterTeam } from "../pages/RegisterTeam";
import { EditTeam } from "../pages/EditTeam";
import { TeamProfile } from "../pages/TeamProfile";
import { RegisterTournament } from "../pages/RegisterTournament";
import { EditTournament } from "../pages/EditTournament";
import { TournamentProfile } from "../pages/TournamentProfile";
import { Tournaments } from "../pages/Tournaments";
import { UserProfile } from "../pages/UserProfile";
import { EditUser } from "../pages/EditUser";
import { TesteApi } from "../TesteApi/index";

export const Routes = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/registerUser" component={RegisterUser} />
      <Route exact path="/users" component={Users} />
      <Route exact path="/registerTeam" component={RegisterTeam} />
      <Route exact path="/editTeam/:teamID" component={EditTeam} />
      <Route exact path="/teamProfile/:teamID" component={TeamProfile} />
      <Route exact path="/registerTournament" component={RegisterTournament} />
      <Route
        exact
        path="/editTournament/:tournamentID"
        component={EditTournament}
      />
      <Route exact path="/tournaments" component={Tournaments} />
      <Route
        exact
        path="/tournamentProfile/:tournamentID"
        component={TournamentProfile}
      />
      <Route exact path="/userProfile/:userID" component={UserProfile} />
      <Route exact path="/userProfile" component={UserProfile} />
      {/* <Route exact path="/editUser" component={EditUser} /> */}
      <Route exact path="/testeapi" component={TesteApi} />
    </Switch>
  );
};
