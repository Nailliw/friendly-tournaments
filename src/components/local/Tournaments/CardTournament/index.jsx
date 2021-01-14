import { DeadlineClock } from "../../../global/DeadlineClock";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { updateCategoriesListThunk } from "../../../../store/modules/categories/thunk";
import { IsValidState } from "../../../global/IsValidState";
import "./style.css";

export const CardTournament = (props) => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.CategoriesReducer);
  const [imgUrl, setImgUrl] = useState("");

  useEffect(() => {
    dispatch(updateCategoriesListThunk());
    console.log(props.tournament);
  }, []);

  useEffect(() => {
    const filtro = categories.categoriesList.filter((category) => {
      return category.id === props.tournament.category;
    });

    if (IsValidState(filtro)) {
      console.log(filtro);
      setImgUrl(filtro[0].imgUrl);
    }
  }, [categories]);

  return (
    <>
      <div className="tournamentCard">
        {IsValidState(imgUrl) && (
          <img className="logo" src={imgUrl} alt="Logo da Categoria" />
        )}
        <div className="tournamentInfoContainer">
          <div className="tournamentTitle">{props.tournament.title}</div>
          <div className="tournamentInfo">{props.tournament.info}</div>
          <div className="teamsSize">
            {props.tournament.teamsSize} vs {props.tournament.teamsSize}
          </div>
        </div>
        <div className="tournamentInfoContainer2">
          <DeadlineClock deadline={props.tournament.deadline} />
          <div>
            Vagas disponíveis:{" "}
            {props.tournament.numberOfTeams - props.tournament.teamsId.length}
          </div>
        </div>
      </div>
    </>
  );
};
