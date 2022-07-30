import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";
import axios from "axios";
import useSWR from "swr";

export default function Home() {
  /* const fetcher = () => axios.get('https://fesbrochuredata.web.app/data.json');
  const { data, error } = useSWR('maindata', fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <div>hello {data.data.others.henshuu}!</div> */

    return (
    <div>

      <Image src="/poster-main.jpg" alt="HonjoHighSchool Logo" width={514} height={728} />
    </div>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}