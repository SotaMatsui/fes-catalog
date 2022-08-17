import useSWR from "swr";
import axios from "axios";


export default function getData() {
  const fetcher = () => axios.get('https://fesbrochuredata.web.app/fes22.data.json');
  const { data, error } = useSWR('maindata', fetcher);

  if (error) return { success:false,data: error }
  if (!data) return { success: undefined, data: 'loading...' }

  return { success: true, data: data.data };
}