import Link from "next/link";
import Layout from "../components/layout";
import axios from "axios";
import useSWR from "swr";

export default function Home() {
  /* const fetcher = () => axios.get('https://fesbrochuredata.web.app/data.json');
  const { data, error } = useSWR('maindata', fetcher);

  if (error) return <div>failed to load</div>
  if (!data) return <div>loading...</div>

  return <div>hello {data.data.others.henshuu}!</div> */

    return (
    <>
      <div className="hero">
          <div className="hero-img-wrap"><img src="/hero.png" alt="HonjoHighSchool Logo"  /></div>
          <div className="title-img-wrap"><img src="/title.svg" alt="HonjoHighSchool Logo"  /></div>
        <div className="subTitle">
          <p>彩れ、</p>
            <p>青春の一ページ。</p>
            <p className="desc">東京都立本所高校2022文化祭 「虹」</p>
          </div>
          <div className="dates">
            <p>2022 9/9<span className="material-symbols-outlined">arrow_right</span>10</p>
          </div>
        </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}