import Layout from "../components/layout";
import Countdown from "react-countdown";

export default function Home() {
  var countdownDate = new Date("2022/09/09 9:00:00+0900");
  return (
    <>
      <div className="hero-wrap">
        <div className="hero">
          <div className="hero-img-wrap"><img src="/hero.png" alt="HonjoHighSchool Logo" /></div>
          <div className="title-img-wrap"><img src="/title.svg" alt="HonjoHighSchool Logo" /></div>
          <div className="subTitle">
            <img className="hero-desc" src="/hero-desc.svg" alt="彩れ、青春の一ページ。東京都立本所高校2022文化祭 「虹」" />
          </div>
          <div className="dates">
            <img className="hero-date" src="/hero-date.svg" alt="2022/9/9 -> 9/10" />
          </div>
  
          <div className="scrolldown4"><span>next</span></div>
        </div>
        <div className="countdown-towards-1stday" >
          <p>生徒公開日まで</p>
          <Countdown date={countdownDate} />
        </div>
      </div>
      <div className="infos-wrap">
        <div className="theme-summary" >
          <div className="header">
            <h3>2022年度テーマ「虹」</h3>
          </div>
          <img src="/niji.png" alt="HonjoHighSchool Logo" />
          <p>
            2022年度本所高校文化祭のテーマは「虹（にじ）」です。<br />ともに定められたサブテーマ「彩れ、青春の一ページ」にも基づいて、生徒一人ひとりの色が織りなす個性豊かな展示をお楽しみください。
          </p>
        </div>
        <div className="outline-summary" >
          <div className="header">
            <h3>開催概要</h3>
          </div>
          <section>
            <h4>開催日時</h4>
            <img src="/dates.svg" alt="HonjoHighSchool Logo" />
          </section>
          <section>
            <h4>開催場所</h4>
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
        <div className="catalog-introduction" >
          <div className="header">
            <h3>企画を楽しもう</h3>
          </div>
          <p>
            2022年度本所高校文化祭のテーマは「虹（にじ）」です。<br />ともに定められたサブテーマ「彩れ、青春の一ページ」にも基づいて、生徒一人ひとりの色が織りなす個性豊かな展示をお楽しみください。
          </p>
        </div>
      </div>
    </>
  );
}

Home.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}