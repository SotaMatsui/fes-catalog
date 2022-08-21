import useSWR from "swr";
import axios from "axios";


export default function getData() {
  const timestamp = new Date()
  timestamp.setMinutes(0)
  timestamp.setSeconds(0)
  timestamp.setMilliseconds(0)
  const fetcher = () => axios.get('https://fesbrochuredata.web.app/fes22.data.json?timestamp='+timestamp.getTime); 
  const { data, error } = useSWR('maindata', fetcher);

  if (error) return { success:false,data: error }
  if (!data) return { success: undefined, data: 'loading...' }
  return { success: true, data: data.data.main, timing: data.data.timing };
}
