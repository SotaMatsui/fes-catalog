import Link from "next/link";
import Layout from "../components/layout";

export default function Docs() {
  return (

    <div className="centered">
      <div className="header">
        <h3>資料</h3>
      </div>
      <main className="docs">
        <ul>
          <li>
            <Link href='/creations/'>応募作品一覧</Link>
          </li>
          <li>
            <Link href='/workers/'>実行委員一覧</Link>
          </li>
          <li>
            <Link href='/editors-note/'>編集後記</Link>
          </li>
          <li>
            <Link href='/decorations/'>校内装飾</Link>
          </li>
        </ul>
      </main>
    </div>
  );
}

Docs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}