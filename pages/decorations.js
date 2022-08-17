import Link from "next/link";
import Layout from "../components/layout";

export default function Decorations() {
  return (

    <div className="centered">
      <div className="header">
        <h3>校内装飾の見どころ</h3>
      </div>
      <main className="greeting">
        <section>
          <h4>HONJO</h4>
          <p>毎年恒例のHONJOオブジェです！本所祭のテーマである「虹」をイメージして作りました。例年と同様グラウンドに設置したので、スカイツリーと本所をバックに写真をたくさん撮ってください！</p>
          <hr />
        </section>
        <section>
          <h4>コンセプト</h4>
          <p>今年の校内装飾のコンセプトは「お祭り」なので、例年よりも雰囲気が大きく変わったのではないかと思います。お祭りならではの装飾や、写真スポットもたくさん作ったのでぜひたくさん写真を撮ってください！！</p>
          <hr />
        </section>
        <section>
          <h4>アーチ</h4>
          <p>アーチは、校内装飾のコンセプトである「お祭り」をイメージしてデザインしました。インパクトのあるアーチにぜひよくご注目ください！</p>
          <hr />
        </section>
      </main>
    </div>
  );
}

Decorations.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}