import Layout from "../components/layout";

export default function Creations() {
  return (

    <div className="centered">
      <div className="header">
        <h3>応募作品一覧</h3>
      </div>
      <main className="creations">
        <sections>
          <span>2年E組</span>
          <h4>門田 真奈</h4> 
          <img src="/monden.jpeg" />
        </sections>
        <hr/>
        <sections>
          <span>3年B組</span>
          <h4>広岡 佑弥</h4>
          <img src="/hirooka.jpeg" />
        </sections>
        <hr/>
        <sections>
          <span>3年B組</span>
          <h4>大澤 向日葵</h4>
          <img src="/oosawa.jpeg" />
        </sections>
      </main>
    </div>
  );
}

Creations.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}