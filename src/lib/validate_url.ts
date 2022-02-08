import Axios from "axios"; // IMPORTANTE

export const validate_url = (url: string): boolean => {
  console.log(url);
  const expresion=/https:\/\/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-z]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/;
  const comprobacion=expresion.test(url);
  return comprobacion;

};