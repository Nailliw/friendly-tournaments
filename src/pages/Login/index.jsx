import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  loginUserThunk,
  updateUsersListThunk,
} from "../../store/modules/users/thunk";

export const Login = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.UsersReducer);
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();

  const handleEmail = (event) => {
    setEmail(event.target.value);
  };

  const handleSenha = (event) => {
    setSenha(event.target.value);
  };

  const handleLogin = () => {
    const loginData = {
      email,
      password: senha,
    };
    dispatch(loginUserThunk(loginData));
    dispatch(updateUsersListThunk());
  };

  useEffect(() => {
    console.log(users);
  }, [users]);

  return (
    <>
      <input type="text" placeholder="Email" onChange={handleEmail} />
      <input type="text" placeholder="senha" onChange={handleSenha} />
      <button onClick={handleLogin}>Logar</button>
    </>
  );
};
