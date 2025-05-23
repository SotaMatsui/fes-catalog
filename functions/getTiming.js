import useSWR from "swr";
import axios from "axios";

export default function getTiming() {
  const fetcher = () => axios.get('https://fesbrochuredata.web.app/fes22.timing.json');
  const { data, error } = useSWR('timingdata', fetcher);
  if (error) return { success: false, data: error }
  if (!data) return { success: undefined, data: 'loading...' }
  return { success: true, data: data.data.main,timing:data.data.timing };
}