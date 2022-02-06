import React from "react";
import Axios from "axios"; // IMPORTANTE

export const validate_url = async (url: string): Promise<boolean> => {
  console.log(url);
  try {
    //axios.get(url)
    await Axios.get(url)
    console.log("Url valida");
    return true;

  } catch (error) {
    console.log("Url no valida");
    return false;
  }
};