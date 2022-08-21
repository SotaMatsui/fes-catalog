import Link from "next/link";
import getData from "../../functions/getData";
import getTiming from "../../functions/getTiming";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

import 'react-tabs/style/react-tabs.css';

import ProgramLayout from "../../components/layout-program";
import { useState, useEffect } from "react";


export default function Programs(prgrmsList) {
  const { success, data, timing } = getData();
  const [onLive, setOnLive] = useState(0);
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('favs') != undefined) {
      let _arr = localStorage.getItem('favs').split(',').map(str => parseInt(str, 10));
      setFavs(_arr)
    }
  }, [])

  if (success == false || success == undefined) {
    return <div>loading...</div>

  } else if (success == true) {
    const timingData = createTimingData(timing)
    const timingKeys = Object.keys(timingData).sort((a, b) => (new Date(a).getTime() > new Date(b).getTime() ? 1 : -1));
    const setFavorite = (_id) => {
      let _copy = favs.slice(0, favs.length);
      _copy.indexOf(Number(_id)) == -1 ? _copy.push(_id) : _copy.splice(_copy.indexOf(Number(_id)), 1)
      setFavs(_copy)

      let _str = _copy.join(',');
      localStorage.setItem('favs', _str);
    }
    return (
      <>
        <div id="on-live" data-current={onLive}>
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
        <Tabs onSelect={(current) => { setOnLive(current); resetScrollPos() }} data-current={onLive} >
          <TabList>
            <Tab data-type='programs'>プログラム一覧</Tab>
            <Tab data-type='times'>タイムテーブル</Tab>
            <Tab data-type='favs'><span className="material-symbols-outlined">favorite</span></Tab>
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
                      <div className="card-wrapper">
                        <Link key={Number(id)} as={"programs/" + Number(id)} href={{ pathname: "programs/" + Number(id), query: queryData }}>
                          <div className="card-master">
                            <div
                              className="img-wrapper"
                              data-is-cutvis={data[Number(id)].image != undefined & data[Number(id)].image?.indexOf('cut-vis') != -1 ? true : false}
                            >
                              <img
                                src={data[Number(id)].image == undefined ? '/noimage.png' : data[Number(id)].image}
                                alt={data[Number(id)].title}
                              />
                            </div>
                            <div className="descriptions">
                              <h4>{data[Number(id)].title}</h4>
                              <i>{data[Number(id)].category} / {data[Number(id)].orgName}</i>
                            </div>
                          </div>
                        </Link>
                        <span className="material-symbols-outlined favorite"
                          data-is-fav={favs.indexOf(Number(id)) != -1 ? 'true' : 'false'}
                          onClick={() => setFavorite(Number(id))}>
                          favorite
                        </span>
                      </div>
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
                        <div className="header"><p>{a}より</p></div>
                        {timingData[a].map((x, y) => {
                          const queryData = {
                            y
                          }
                          return (
                            <div className="wrap" style={{ backgroundImage: `url(${data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image})` }}>
                              <Link key={Number(x)} as={"programs/" + Number(x)} href={{ pathname: "programs/" + Number(x), query: queryData }}>
                                <div className="card-master">
                                  <div className="img-wrapper"><img src={data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image} /></div>
                                  <div className="descriptions">
                                    <h4>{data[Number(x)].title}</h4>
                                    <i>{data[Number(x)].category} / {data[Number(x)].orgName}</i>
                                  </div>
                                </div>
                              </Link>
                              <span
                                className="material-symbols-outlined favorite"
                                data-is-fav={favs.indexOf(Number(x)) != -1 ? 'true' : 'false'}
                                onClick={() => setFavorite(Number(x))}>
                                favorite
                              </span>
                            </div>
                          )
                        })}
                      </>
                    )
                  })
                }
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="cards-wrapper">
              <div className="cards-timetable">
                {
                  favs.map((x, y) => {
                    const queryData = {
                      y
                    }
                    return (
                      <div className="wrap" style={{ backgroundImage: `url(${data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image})` }}>
                        <Link key={Number(x)} as={"programs/" + Number(x)} href={{ pathname: "programs/" + Number(x), query: queryData }}>
                          <div className="card-master">
                            <div className="img-wrapper"><img src={data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image} /></div>
                            <div className="descriptions">
                              <h4>{data[Number(x)].title}</h4>
                              <i>{data[Number(x)].category} / {data[Number(x)].orgName}</i>
                            </div>
                          </div>
                        </Link>
                        <span
                          className="material-symbols-outlined favorite"
                          data-is-fav={favs.indexOf(Number(x)) != -1 ? 'true' : 'false'}
                          onClick={() => setFavorite(Number(x))}>
                          favorite
                        </span>
                      </div>
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
const resetScrollPos = () => {
  window.scrollTo(0, 0);
}
Programs.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}