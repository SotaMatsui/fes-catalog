import Link from "next/link";
import Layout from "../components/layout";
import Image from "next/image";

export default function Notes() {
  return (

    <div className="centered">
      <div className="header">
        <h3>おねがい</h3>
      </div>
      <main className="greeting">
        <ul>
          <p>校内は土足厳禁です。</p>
        </ul>
      </main>
    </div>
  );
}

Notes.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}