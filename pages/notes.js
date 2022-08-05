import Link from "next/link";
import Layout from "../components/layout";

export default function Notes() {
  return (

    <div className="centered">
      <div className="header">
        <h3>おねがい</h3>
      </div>
      <main className="greeting">
        <ul>
          <li>校内は土足厳禁です。上履きまたはスリッパに履き替えてください。</li>
          <li>学校敷地内はすべて禁煙です。喫煙はご遠慮ください。</li>
          <li>飲食は指定教室に限らせていただきます。廊下・校庭・体育館での飲食はご遠慮ください。</li>
        </ul>
      </main>
    </div>
  );
}

Notes.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}