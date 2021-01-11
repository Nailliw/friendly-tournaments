import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { registerUserThunk } from "../../store/modules/users/thunk";

export const RegisterUser = () => {
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

  const handleRegister = () => {
    const registerData = {
      email,
      password: senha,
      invites: [],
    };
    dispatch(registerUserThunk(registerData));
  };

  useEffect(() => {
    console.log(users);
  }, [users]);
  return (
    <>
      <input type="text" placeholder="Email" onChange={handleEmail} />
      <input type="text" placeholder="senha" onChange={handleSenha} />
      <button onClick={handleRegister}>Cadastrar</button>
    </>
  );
};
