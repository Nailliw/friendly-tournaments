import { useState, useEffect } from "react";
import { IsValidState } from "../IsValidState";
import "./style.css";
export const DeadlineClock = (props) => {
  const [dataTorneio, setDataTorneio] = useState("");
  const [tempo, setTempo] = useState("");

  const calcularTempoInscricao = (tempoSegundos) => {
    let res = "Encerra em ";
    let resto;

    if (tempoSegundos <= 0) {
      return "Inscrição encerrada em " + formatDate(dataTorneio);
    }

    if (tempoSegundos > 86400) {
      resto = tempoSegundos % 86400;
      tempoSegundos -= resto;
      res += `${(tempoSegundos / 86400).toString().padStart(2, "0")} dias e `;
      tempoSegundos = resto;
    }

    if (tempoSegundos > 3600) {
      resto = tempoSegundos % 3600;
      tempoSegundos -= resto;
      res += `${(tempoSegundos /= 3600).toString().padStart(2, "0")}h: `;
      tempoSegundos = resto;
    }

    if (tempoSegundos > 60) {
      resto = tempoSegundos % 60;
      tempoSegundos -= resto;
      res += `${(tempoSegundos / 60).toString().padStart(2, "0")}m: `;
      tempoSegundos = resto;
    }

    if (tempoSegundos <= 60) {
      res += `${tempoSegundos.toFixed(0).toString().padStart(2, "0")}s`;
    }

    return res;
  };

  const formatDate = (date) => {
    let res = "";
    let arrDate = date.split("-");
    let year = arrDate[0];
    let month = arrDate[1];
    let day = arrDate[2][0] + arrDate[2][0];
    let hours = arrDate[2].split("T")[1];
    res = `${day}/${month}/${year} às ${hours}`;

    return res;
  };

  const startClock = () => {
    console.log(dataTorneio);
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
          return calcularTempoInscricao(
            (diaInscricao.getTime() - hoje.getTime()) / 1000
          );
        });
        if ((diaInscricao.getTime() - hoje.getTime()) / 1000 <= 0) {
          clearInterval(cronometro);
        }
      }, 1000);
    } else {
      console.log("Inscrição encerrada em " + formatDate(dataTorneio));
      setTempo("Inscrição encerrada em " + formatDate(dataTorneio));
    }
  };

  useEffect(() => {
    setDataTorneio(props.deadline);
  }, []);

  useEffect(() => {
    if (IsValidState(dataTorneio)) {
      startClock();
    }
  }, [dataTorneio]);

  useEffect(() => {}, [tempo]);

  return <>{tempo && tempo}</>;
};
