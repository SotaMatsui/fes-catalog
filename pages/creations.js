import Link from "next/link";
import Layout from "../components/layout";

export default function Creations() {
  return (

    <div className="centered">
      <div className="header">
        <h3>応募作品一覧</h3>
      </div>
      <main className="creations">
        <sections>
          <h4>本所 花子</h4>
          <p>使用場所ポスター表紙とか</p>
          <img src="/monden.jpeg" />
        </sections>
        <hr/>
        <sections>
          <h4>本所 花子</h4>
          <p>使用場所ポスター表紙とか</p>
          <img src="/hirooka.jpeg" />
        </sections>
        <hr/>
        <sections>
          <h4>本所 花子</h4>
          <p>使用場所ポスター表紙とか</p>
          <img src="/oosawa.jpeg" />
        </sections>
      </main>
    </div>
  );
}

Creations.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}