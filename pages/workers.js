import Link from "next/link";
import Layout from "../components/layout";

export default function Workers() {
  return (

    <div className="centered">
      <div className="header">
        <h3>実行委員一覧</h3>
      </div>
      <main className="greeting">
        <table className="c15">
          <tr className="c12">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c4"><span className="c3">2A&#38463;&#37096; &#38588;&#26007;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c4"><span className="c3">2A &#30000;&#21407; &#24859;&#32654;
                &#65288;&#22996;&#21729;&#38263;&#65289;</span></p>
            </td>
          </tr>
          <tr className="c7">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2B &#38263;&#35895;&#24029; &#24515;&#29748;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2B &#23567;&#27849; &#33673;&#29786;</span></p>
            </td>
          </tr>
          <tr className="c8">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2C &#28580;&#30000; &#12402;&#12394;
                &#65288;&#21103;&#22996;&#21729;&#38263;&#65289;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2C&#30707;&#28580; &#12388;&#12412;&#12415;</span></p>
            </td>
          </tr>
          <tr className="c13">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2D &#23567;&#24029; &#27193;&#20035;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2D &#27973;&#24029; &#35433;&#21517;</span></p>
            </td>
          </tr>
          <tr className="c10">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2E &#27224; &#22823;&#27193;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2E&#23567;&#26519; &#20339;&#32654;
                &#65288;&#21103;&#22996;&#21729;&#38263;&#65289;</span></p>
            </td>
          </tr>
          <tr className="c16">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2F &#21450;&#24029; &#23563;&#22823;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">2F &#26494;&#26519; &#36637;</span></p>
            </td>
          </tr>
          <tr className="c16">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1A &#31282;&#30000; &#36637;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1A &#20117;&#19978; &#24515;&#28186;</span></p>
            </td>
          </tr>
          <tr className="c18">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1B &#37326;&#30000; &#33909;&#29705;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1B &#23665;&#64017; &#32654;&#32080;</span></p>
            </td>
          </tr>
          <tr className="c9">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1C &#20304;&#34276; &#30001;&#28165;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1C &#29287;&#37326; &#33673;&#23376;</span></p>
            </td>
          </tr>
          <tr className="c10">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1D &#20234;&#34276; &#12422;&#12363;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1D &#26494;&#26412; &#12422;&#12398;</span></p>
            </td>
          </tr>
          <tr className="c13">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1E &#22823;&#37324; &#20955;&#33775;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1E &#38272; &#12422;&#12365;&#33756;</span></p>
            </td>
          </tr>
          <tr className="c14">
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1F &#26893;&#20117; &#40635;&#22915;</span></p>
            </td>
            <td className="c5" colspan="1" rowspan="1">
              <p className="c0"><span className="c3">1F &#22633;&#24029; &#24515;&#32070;</span></p>
            </td>
          </tr>
        </table>
      </main>
    </div>
  );
}

Workers.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}