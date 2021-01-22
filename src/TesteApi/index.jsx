import { useState, useEffect } from "react";
import { CardTeam } from "../components/global/CardTeam";
import { TeamIsEligible } from "../components/local/TournamentInfo/TeamIsEligible";
import { CardMessages } from "../components/global/CardMessages";
import { Message } from "../components/global/CardMessages/Message";
import { EditTournament } from "../components/local/EditTournament";
import { SubscribeTeam } from "../components/local/TournamentInfo/SubscribeTeam";
import { logoutThunk, loginUserThunk } from "../store/modules/users/thunk";
import { useDispatch, useSelector } from "react-redux";

export const TesteApi = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  const team = {
    teamName: "LA Eagles",
    teamInfo: "League of Legends Team based in Los Angeles",
    playersId: [1, 2, 3],
    tournamentsWon: [1, 3],
    tournamentsDisputed: [1, 2, 3],
    userId: 1,
    id: 2,
  };

  // useEffect(() => {}, []);
  // console.log(TeamIsEligible(1, 6));

  const message = {
    name: "Felipe",
    message:
      "Aliquam non justo in neque suscipit sodales. Curabitur ipsum sem, semper eget ligula vitae, tempus pretium sem. Aliquam at metus nunc. Duis congue lacus sed facilisis condimentum. Integer maximus nibh a sapien gravida, nec gravida nisl bibendum. Mauris leo risus, bibendum in ultricies a, pharetra quis felis. Duis sit amet tempus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  };

  const User = {
    email: "felipe@gmail.com",
    password: "$2a$10$AZGpj7BqYMlwb9UwRuEa9uSWFMN7dj6hpm69YbGuyg1maDwo2HdR2",
    firstName: "Felipe",
    lastName: "Molina",
    nickName: "dev1",
    bio: "Just a humble developer",
    invites: [1, 2, 3, 4],
    memberOfTeams: [1, 2],
    tournamentsWon: [],
    id: 1,
  };

  const tournament = {
    category: 1,
    gameName: "Xadrez",
    title: "Jungle Bog",
    info: "Clash",
    numberOfTeams: 20,
    teamsSize: 2,
    messagesList: [
      {
        name: "Felipe",
        message:
          "Aliquam non justo in neque suscipit sodales. Curabitur ipsum sem, semper eget ligula vitae, tempus pretium sem. Aliquam at metus nunc. Duis congue lacus sed facilisis condimentum. Integer maximus nibh a sapien gravida, nec gravida nisl bibendum. Mauris leo risus, bibendum in ultricies a, pharetra quis felis. Duis sit amet tempus tortor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      },
      {
        name: "Jefte",
        message:
          "Nam pretium, tellus eget pharetra tempor, felis nisi sollicitudin velit, dapibus mollis leo elit a massa. In finibus porttitor lectus eget egestas. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur pharetra, turpis in rhoncus consequat, felis sem venenatis dolor, vel consectetur diam ex non enim. Curabitur et ante at felis molestie interdum. Sed vulputate, tortor et pretium sagittis, dolor lectus lobortis nisi, ac eleifend magna mi ut ipsum. Ut varius consequat mi non imperdiet.",
      },
      {
        name: "Marcos",
        message:
          "Donec malesuada tortor purus, sit amet dignissim erat suscipit non. Etiam a diam a nulla sodales blandit. Aenean iaculis lacus ex, ac tincidunt dui tempor sed. Fusce non rhoncus elit. Ut auctor nec quam ut vestibulum. Vivamus sollicitudin, purus ac vulputate tempus, felis erat blandit tortor, in ultrices nisl ipsum eu lacus. Ut sit amet mollis turpis.",
      },
      {
        name: "William",
        message:
          "Ut viverra tempus leo, vitae venenatis odio dictum at. Cras dui ligula, porta a mollis eu, mollis vitae metus. Nullam non ullamcorper turpis. Suspendisse elementum leo sit amet lacus viverra, et convallis lacus lobortis. Morbi sollicitudin neque diam, a tincidunt arcu dapibus et. In tristique non dolor pharetra pharetra. Phasellus non leo vitae sapien porta ultricies ac eget purus.",
      },
      {
        name: "João",
        message:
          "Proin et volutpat tellus. Sed sit amet leo augue. In a venenatis sem, vel venenatis felis. Nullam molestie id arcu quis tempus. Nullam aliquam mi quis egestas mattis. Donec pharetra nulla elementum justo feugiat, in sollicitudin purus congue. Aenean sed augue maximus, cursus felis nec, molestie nunc. Vestibulum sollicitudin quam luctus, vestibulum ex id, hendrerit nulla. Donec facilisis interdum placerat. Vestibulum dolor lorem, dictum vitae sodales eget, mollis et lectus. Sed id sollicitudin ex",
      },
    ],
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

  // useEffect(() => {
  //   dispatch(loginUserThunk({ email: "felipe@gmail.com", password: "123456" }));
  //   setTimeout(() => {
  //     dispatch(logoutThunk());
  //   }, 5000);
  // }, []);

  // useEffect(() => {
  //   console.log(users);
  // }, [users]);

  return (
    <>
      {/* <EditTournament {...tournament} /> */}
      {/* <CardMessages tournamentId={2} /> */}
      <SubscribeTeam openDialog={true} tournamentId={6} />
    </>
  );
};
