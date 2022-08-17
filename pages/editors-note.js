import Link from "next/link";
import Layout from "../components/layout";

export default function EditorsNote() {
  return (

    <div className="centered">
      <div className="header">
        <h3>編集後記</h3>
      </div>
      <main className="greeting">
        <section>
          <h4>Next.js × SSG × FirebaseHosting</h4>
          <p>昨年度は新型コロナウイルス感染症拡大防止のため本所祭は縮小する形で実施することになりました。本年はコロナ禍で安全に実施できる方法を協議してきました。その結果、本所祭を実施できることになりました。これもみなさんの努力の結果だと思っています。生徒と保護者など多くの人々のご理解とご協力のおかげであり、大変感謝しています。<br /><br />　さて、本年度の本所祭のテーマは『虹 -彩れ、青春の1ページ-』です。<br /><br />　各クラス・団体の企画などを見ますと、自分たちの特徴を出そうと工夫の跡が見られます。 文化祭は発表当日だけではなく、準備の時点が非常に大切だと思っています。 各クラス・団体の企画で彩られ、文化祭は生徒一人一人の青春の1ページとして長く記憶に残ることができると思います。<br /><br />　どうか生徒のみなさんには「文化的」な面と「お祭り的」な明るさの両面を兼ね備えたバランスのとれた楽しい文化祭を創造していただきたい。生徒全員が一致協力して文化祭を盛り上げ、仲間とともに明日の本所高校につながる充実した展示や発表を大いに期待したいと思います。</p>
          <hr />
        </section>
      </main>
    </div>
  );
}

EditorsNote.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}