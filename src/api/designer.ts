import axios from "axios";
import { Designer, IDesignersAPI } from "../interfaces/interfaces";

export const getDesigners = async(): Promise<Designer[]> => {

  let res: Designer[] = []
  let url: string | null = 'https://sandbox.creos.me/api/v1/designer/?limit=128'

  while (url) {
    const response = await axios.get<IDesignersAPI>(url)
    const data: IDesignersAPI = response.data;
    url = data.next
    res = res.concat(data.results)
  }
  
  return res
}
