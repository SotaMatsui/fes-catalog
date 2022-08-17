import Layout from "../components/layout";

export default function Access() {
  return (

    <div className="centered">
      <div className="header">
        <h3>アクセス</h3>
      </div>
      <div className="infos-wrap">
        <div className="outline-summary" >
          <section>
            <h4>開催日時</h4>
            <img src="/dates.svg" alt="HonjoHighSchool Logo" />
          </section>
          <section>
            <img src="/accesses.svg" alt="HonjoHighSchool Logo" />
            <div>
              <b>
                東京都立本所高等学校
              </b>
              <p>
                東京都墨田区向島3-37-25
              </p>
              <div className="map-wrap"><iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3239.484861029742!2d139.80908601559784!3d35.71429233576474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188ed9b368a875%3A0xccf0dff3cd13a82!2z5p2x5Lqs6YO956uL5pys5omA6auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1659754606284!5m2!1sja!2sjp" width="600" height="450" frameBorder="0" allowFullScreen></iframe></div>
              <i>お越しの際は公共交通機関をご利用ください。</i>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}

Access.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}