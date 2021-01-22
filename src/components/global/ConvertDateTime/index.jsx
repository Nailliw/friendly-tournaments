export const ConvertDateTime = (dateTime) => {
  let diaInscricao = new Date(dateTime);
  let dia = diaInscricao.getDate().toString().padStart(2, "0");
  let mes = (diaInscricao.getMonth() + 1).toString().padStart(2, "0");
  let ano = diaInscricao.getFullYear();
  let horas = diaInscricao.getHours().toString().padStart(2, "0");
  let minutos = diaInscricao.getMinutes().toString().padStart(2, "0");
  let convertedDate = `${dia}/${mes}/${ano} até as ${horas}h:${minutos}m`;
  return convertedDate;
};
