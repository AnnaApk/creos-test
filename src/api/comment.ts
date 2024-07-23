import axios from "axios";
import { IComment } from "../interfaces/interfaces";

const instance = axios.create({
  baseURL: 'https://sandbox.creos.me/api/v1/',
});

export const getComments = async(): Promise<IComment[]> => {
  const { data } = await instance.get('comment/')
  return data
}
