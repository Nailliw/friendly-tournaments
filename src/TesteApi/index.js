import { useState, useEffect } from "react";
import axios from "axios";

export const TesteApi = () => {
  const [dataTorneio, setDataTorneio] = useState("");
  const [tempo, setTempo] = useState("");
  const [hoje, setHoje] = useState("");
  const [diaInscricao, setDiaInscricao] = useState("");

  const handleRegisterUser = () => {
    const usuario = {
      email: "JoaoVitor@gmail.com",
      nome: "JoaoVitor",
      password: "123456",
    };

    axios
      .post("http://localhost:3001/users", usuario)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  const handleDate = (event) => {
    setDataTorneio(event.target.value);
  };

  const handleCompareDate = () => {
    let hoje = new Date();
    let diaInscricao = new Date(dataTorneio);
    let dia = hoje.getDate().toString().padStart(2, "0");
    let mes = (hoje.getMonth() + 1).toString().padStart(2, "0");
    let ano = hoje.getFullYear();
    let horas = hoje.getHours().toString().padStart(2, "0");
    let minutos = hoje.getMinutes().toString().padStart(2, "0");
    let dataAtual = `${ano}-${mes}-${dia}T${horas}:${minutos}`;

    if (dataTorneio >= dataAtual) {
      console.log("Ainda pode se inscrever até o dia " + dataTorneio);
      let cronometro = setInterval(() => {
        setTempo((t) => {
          let hoje = new Date();
          let diaInscricao = new Date(dataTorneio);
          console.log(t);
          return calcularTempo(
            (diaInscricao.getTime() - hoje.getTime()) / 1000
          );
        });
        if ((diaInscricao.getTime() - hoje.getTime()) / 1000 <= 0) {
          clearInterval(cronometro);
        }
      }, 1000);
    } else {
      console.log("Inscrição encerrada em " + dataTorneio);
      setTempo("Inscrição encerrada em " + dataTorneio);
    }
  };

  const calcularTempo = (tempoSegundos) => {
    let res = "A inscrição fecha em ";
    let resto;

    if (tempoSegundos <= 0) {
      return "00 Horas:00 :00";
    }

    if (tempoSegundos > 86400) {
      resto = tempoSegundos % 86400;
      tempoSegundos -= resto;
      res += `${(tempoSegundos / 86400).toString().padStart(2, "0")} dias `;
      tempoSegundos = resto;
    }

    if (tempoSegundos > 3600) {
      resto = tempoSegundos % 3600;
      tempoSegundos -= resto;
      res += `${(tempoSegundos /= 3600).toString().padStart(2, "0")} Horas: `;
      tempoSegundos = resto;
    }

    if (tempoSegundos > 60) {
      resto = tempoSegundos % 60;
      tempoSegundos -= resto;
      res += `${(tempoSegundos / 60).toString().padStart(2, "0")} Minutos: `;
      tempoSegundos = resto;
    }

    if (tempoSegundos <= 60) {
      res += `${tempoSegundos.toFixed(0).toString().padStart(2, "0")} Segundos`;
    }

    return res;
  };

  return (
    <>
      <button onClick={handleRegisterUser}>Cadastrar Usuário</button>
      <input id="dataTorneio" type="datetime-local" onChange={handleDate} />
      <button onClick={handleCompareDate}>Prazo de inscrição</button>
      {tempo && <div style={{ color: "red", fontSize: "3vw" }}>{tempo}</div>}
    </>
  );
};
