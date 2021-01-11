import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerTournamentThunk } from "../../store/modules/tournaments/thunk";

export const RegisterTournament = () => {
  const dispatch = useDispatch();
  const tournaments = useSelector((state) => state.TournamentsReducer);
  const users = useSelector((state) => state.UsersReducer);
  const [tournamentName, setTournamentName] = useState("");
  const [teamsSize, setTeamsSize] = useState("");
  const [dataTorneio, setDataTorneio] = useState("");

  const handleDate = (event) => {
    setDataTorneio(event.target.value);
  };

  const handleTournamentName = (event) => {
    setTournamentName(event.target.value);
  };

  const handleTeamsSize = (event) => {
    setTeamsSize(event.target.value);
  };

  const handleRegisterTournament = (event) => {
    const tournamentData = {
      game: tournamentName,
      teamsSize: Number(teamsSize),
      teamsId: [],
      inGame: [],
      matches: [],
      status: "",
      deadline: dataTorneio,
      userId: Number(
        JSON.parse(window.localStorage.getItem("users")).loggedUser.user.sub
      ),
    };
    dispatch(registerTournamentThunk(tournamentData));
  };

  return (
    <>
      <div>
        <input
          type="text"
          onChange={handleTournamentName}
          placeholder="Digite o nome do Torneio"
        />
        <input
          type="text"
          onChange={handleTeamsSize}
          placeholder="Tamanho dos times"
        />
        <input id="dataTorneio" type="datetime-local" onChange={handleDate} />
        <button onClick={handleRegisterTournament}>Registrar Torneio</button>
      </div>
    </>
  );
};
