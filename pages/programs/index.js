import Link from "next/link";
import getData from "../../functions/main";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import ProgramLayout from "../../components/layout-program";
import { defaultHead } from "next/head";


export default function Programs(prgrmsList) {


  const { success, data } = getData();
  if (success == false || success == undefined) {
    return <div>loading...</div>
  } else if (success == true) {
    console.log(data);
    return (
      <>
        <Tabs>
          <TabList>
            <Tab>プログラム一覧</Tab>
            <Tab data-display-on-live-when-disabled="true">
              <div className="on-live">
                <section>
                  <p className="header"><span className="material-symbols-outlined">radio_button_checked</span><span>Live in 第一選択教室</span></p>
                  <h4>響愛～みんなで奏でるカラフルな愛～</h4>
                  <i>ブラスバンド部</i>
                  <h5>12:00-13:00</h5>
                </section>
                <section>
                  <p className="header"><span>Coming Up Next in 体育館</span></p>
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
                    console.log(index)
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
              <div className="cards">
                {
                  Object.keys(data).map((id, index) => {
                    const queryData = {
                      index
                    }
                    if (data[Number(id)].realtime == true) {
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
                    }
                  })}
              </div>
            </div>
          </TabPanel>
        </Tabs>

      </>
    );
  }



}


Programs.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}