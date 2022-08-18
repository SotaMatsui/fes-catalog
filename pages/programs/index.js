import Link from "next/link";
import getData from "../../functions/getData";
import getTiming from "../../functions/getTiming";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import ProgramLayout from "../../components/layout-program";
import { defaultHead } from "next/head";


export default function Programs(prgrmsList) {


  const { success, data, timing } = getData();
  if (success == false || success == undefined) {
    return <div>loading...</div>

  } else if (success == true) {
    const timingData = createTimingData(timing)
    const timingKeys = Object.keys(timingData).sort((a, b) => (new Date(a).getTime() > new Date(b).getTime() ? 1 : -1));
    console.log(timing)
    return (
      <>
        <Tabs>
          <TabList>
            <Tab>プログラム一覧</Tab>
            <Tab data-display-on-live-when-disabled="true">
              <div className="on-live">
                <section>
                  <p className="header live"><div className="live-wrap"><div className="circle"></div></div><span>Live<span className="place"> : 第一選択教室</span></span></p>
                  <h4>響愛～みんなで奏でるカラフルな愛～</h4>
                  <i>ブラスバンド部</i>
                  <h5>12:00-13:00</h5>
                </section>
                <section>
                  <p className="header"><span>Coming Up Next : 体育館</span></p>
                  <h4>響愛～みんなで奏でるカラフルな愛～</h4>
                  <i>ブラスバンド部</i>
                  <h5>開始まで0:24:16(12:00-13:00)</h5>
                </section>
              </div>
              タイムテーブル
            </Tab>
          </TabList>

          <TabPanel>
            <div className="cards-wrapper">
              <div className="cards">
                {
                  Object.keys(data).map((id, index) => {
                    const queryData = {
                      index
                    }
                    return (
                      <Link key={Number(id)} as={"programs/" + Number(id)} href={{ pathname: "programs/" + Number(id), query: queryData }}>
                        <div className="card-master">
                          <div className="img-wrapper"><img src={data[Number(id)].image == undefined ? '/noimage.png' : data[Number(id)].image} /></div>
                          <div className="descriptions">
                            <h4>{data[Number(id)].title}</h4>
                            <i>{data[Number(id)].category} / {data[Number(id)].orgName}</i>
                          </div>
                        </div>
                      </Link>
                    )
                  })}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="cards-wrapper">
              <div className="cards-timetable">
                {
                  timingKeys.map((a, b) => {
                    return (
                      <>
                        <div className="header"><p>{a}より開始</p></div>
                        {timingData[a].map((x, y) => {
                          const queryData = {
                            y
                          }
                          return (
                            <Link key={Number(x)} as={"programs/" + Number(x)} href={{ pathname: "programs/" + Number(x), query: queryData }}>
                              <div className="card-master">
                                <div className="img-wrapper"><img src={data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image} /></div>
                                <div className="descriptions">
                                  <h4>{data[Number(x)].title}</h4>
                                  <i>{data[Number(x)].category} / {data[Number(x)].orgName}</i>
                                  {/* <h4>{timing[Number(x)].time.split('&').map((f, g) => {
                                    return <p>{f}</p>
                                  })}</h4> */}
                                </div>
                              </div>
                            </Link>
                          )
                        })}
                      </>
                    )
                  })
                }
              </div>
            </div>
          </TabPanel>
        </Tabs>

      </>
    );
  }



}

const createTimingData = (tim) => {
  var timingData = {}; //データ用の空のやつ
  Object.keys(tim).map((id, index) => { //json読み取ってひとつづつ追加
    var timeList = tim[Number(id)].time.split("&")
    return (
      timeList.map((data, i) => {
        var start = data.split("-")[0]
        var end = data.split("-")[1]
        if (timingData[start] == undefined) {
          timingData[start] = [id]
        } else {
          timingData[start].push(id)
        }
      })
    )
  })
  return timingData;
}


Programs.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}