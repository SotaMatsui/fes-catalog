import Link from "next/link";
import getData from "../../functions/getData";
import getTiming from "../../functions/getTiming";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Countdown, { zeroPad } from 'react-countdown';


import 'react-tabs/style/react-tabs.css';

import ProgramLayout from "../../components/layout-program";
import { useState, useEffect } from "react";


export default function Programs(prgrmsList) {
  const { success, data, timing } = getData();
  const [onLive, setOnLive] = useState(0);
  const [favs, setFavs] = useState([]);
  const [filter, setFilter] = useState("すべて");

  useEffect(() => {
    if (localStorage.getItem('favs') != undefined && localStorage.getItem('favs') != '') {
      let _arr = localStorage.getItem('favs').split(',').map(str => parseInt(str, 10));
      setFavs(_arr)
    }
  }, [])

  if (success == false || success == undefined) {
    return <div>読み込み中...</div>

  } else if (success == true) {

    const currentTime = new Date();
    const timingData = createTimingData(timing);
    const startTimingData = createStartTimingData(timing)
    const lives = createOnLiveList(timingData, currentTime);
    const upComings = createUpComingList(timingData, currentTime);
    const startTimingKeys = Object.keys(startTimingData).sort((a, b) => (new Date(a).getTime() > new Date(b).getTime() ? 1 : -1));
    const setFavorite = (_id) => {
      let _copy = favs.slice(0, favs.length);
      _copy.indexOf(Number(_id)) == -1 ? _copy.push(_id) : _copy.splice(_copy.indexOf(Number(_id)), 1)
      setFavs(_copy)

      let _str = _copy.join(',');
      localStorage.setItem('favs', _str);
    }
    const renderer = ({ days, hours, minutes, seconds }) => {
      const addedMins = ((Number(days) * 24) + Number(hours)) * 60 + Number(minutes)
      return (
        <span>
          {zeroPad(addedMins.toString())}:{zeroPad(seconds)}
        </span>
      );
    };
    return (
      <>
        <div id="on-live" data-current={onLive}>
          <div className="cards-wrapper">
            <div className="cards-timetable on-live-mode">
              {lives.length != 0 ?
                lives.map((x, y) => {
                  const queryData = {
                    y
                  }
                  return (
                    <Link key={Number(x.ID)} as={"programs/" + Number(x.ID)} href={{ pathname: "programs/" + Number(x.ID), query: queryData }}>
                      <div
                        key={y}
                        style={data[Number(x.ID)].image != undefined & data[Number(x.ID)].image?.indexOf('cut-vis') != -1 ? { filter: `hue-rotate(${Number(x.ID) * 1420.4567 + 9.8765}deg)` } : { opacity: '1' }}
                        data-is-cutvis={data[Number(x.ID)].image != undefined & data[Number(x.ID)].image?.indexOf('cut-vis') != -1 ? true : false}>
                        <span className="live-wrap live">
                          <div className="circle"></div>
                          <span className="live">
                            Live
                          </span>
                        </span>
                        <span className="time">
                          {x.start.split(' ')[1]}~{x.end.split(' ')[1]}
                        </span>
                        <div className="wrap" key={y} style={{ backgroundImage: `url(${data[Number(x.ID)].image == undefined ? '/noimage.png' : data[Number(x.ID)].image})` }}>
                          <Link key={Number(x.ID)} as={"programs/" + Number(x.ID)} href={{ pathname: "programs/" + Number(x.ID), query: queryData }}>
                            <div className="card-master">
                              <div className="descriptions">
                                <h4>{data[Number(x.ID)].title}</h4>
                                <i>{data[Number(x.ID)].orgName}</i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  )
                })
                :
                <></>
              }
              {upComings.length != 0 ?
                upComings.map((x, y) => {
                  const queryData = {
                    y
                  }
                  return (
                    <Link key={Number(x.ID)} as={"programs/" + Number(x.ID)} href={{ pathname: "programs/" + Number(x.ID), query: queryData }}>
                      <div
                        key={y}
                        style={data[Number(x.ID)].image != undefined & data[Number(x.ID)].image?.indexOf('cut-vis') != -1 ? { filter: `hue-rotate(${Number(x.ID) * 1420.4567 + 9.8765}deg)` } : { opacity: '1' }}
                        data-is-cutvis={data[Number(x.ID)].image != undefined & data[Number(x.ID)].image?.indexOf('cut-vis') != -1 ? true : false}>
                        <span className="live-wrap">
                          Coming Up Next
                        </span>
                        <span className="time">
                          開始まで<Countdown date={new Date(`2022/${x.start} (JST)`)} renderer={renderer} />
                          ({x.start.split(' ')[1]}~)
                        </span>
                        <div className="wrap" key={y} style={{ backgroundImage: `url(${data[Number(x.ID)].image == undefined ? '/noimage.png' : data[Number(x.ID)].image})` }}>
                          <Link key={Number(x.ID)} as={"programs/" + Number(x.ID)} href={{ pathname: "programs/" + Number(x.ID), query: queryData }}>
                            <div className="card-master">
                              <div className="descriptions">
                                <h4>{data[Number(x.ID)].title}</h4>
                                <i>{data[Number(x.ID)].orgName}</i>
                              </div>
                            </div>
                          </Link>
                        </div>
                      </div>
                    </Link>
                  )
                })
                :
                <></>
              }
            </div>
          </div>
        </div>
        <Tabs onSelect={(current) => { setOnLive(current); resetScrollPos() }} data-current={onLive} >
          <TabList>
            <Tab data-type='programs'>プログラム一覧</Tab>
            <Tab data-type='times'>タイムテーブル</Tab>
            <Tab data-type='favs'><span className="material-symbols-outlined">favorite</span></Tab>
          </TabList>

          <TabPanel>
            <div className="filters">
              <span className="material-symbols-outlined">filter_list</span>
              <select onChange={(e) => { setFilter(e.target.value) }}>
                <option value="すべて">すべて</option>
                <option value="パフォーマンス">パフォーマンス</option>
                <option value="イベント">イベント</option>
                <option value="アトラクション">アトラクション</option>
                <option value="映像">映像</option>
                <option value="展示">展示・販売（配布）</option>
              </select>
            </div>
            <div className="cards-wrapper">
              <div className="cards">
                {
                  Object.keys(data).map((id, index) => {
                    const queryData = {
                      index
                    }
                    if (data[Number(id)].category.indexOf(filter) != -1 || filter == "すべて") {
                      return (
                        <div className="card-wrapper" key={index}>
                          <Link key={Number(id)} as={"programs/" + Number(id)} href={{ pathname: "programs/" + Number(id), query: queryData }}>
                            <div className="card-master">
                              <div
                                className="img-wrapper"
                                style={data[Number(id)].image != undefined & data[Number(id)].image?.indexOf('cut-vis') != -1 ? { filter: `hue-rotate(${Number(id) * 1420.4567 + 9.8765}deg)` } : { opacity: '1' }}
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
                    }
                  })}
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className="cards-wrapper">
              {
                startTimingKeys.map((a, b) => {
                  return (
                    <>
                      <div className="header"><p>{a}より</p></div>
                      <div className="cards-timetable">
                        {startTimingData[a].map((x, y) => {
                          const queryData = {
                            y
                          }
                          return (
                            <div
                              key={y}
                              style={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? { filter: `hue-rotate(${Number(x) * 1420.4567 + 9.8765}deg)` } : { opacity: '1' }}
                              data-is-cutvis={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? true : false}>
                              <div className="wrap" key={y} style={{ backgroundImage: `url(${data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image})` }}>
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
                            </div>
                          )
                        })}
                      </div>
                    </>
                  )
                })
              }
            </div>
          </TabPanel>
          <TabPanel>
            <div className="cards-wrapper">
              <div className="cards-timetable">
                {favs.length != 0 ?
                  favs.map((x, y) => {
                    const queryData = {
                      y
                    }
                    return (
                      <div
                        key={y}
                        style={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? { filter: `hue-rotate(${Number(x) * 1420.4567 + 9.8765}deg)` } : { opacity: '1' }}
                        data-is-cutvis={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? true : false}>
                        <div className="wrap" key={y} style={{ backgroundImage: `url(${data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image})` }}>
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
                      </div>
                    )
                  })
                  :
                  <p>まだ何もお気に入りに登録されていません</p>
                }
              </div>
            </div>
          </TabPanel>
        </Tabs>

      </>
    );
  }



}


const createStartTimingData = (tim) => {
  var timingData = {}; //データ用の空のやつ
  Object.keys(tim).map((id, index) => { //idずつ
    if (tim[Number(id)].time != "TBC") { //TBC無視
      Object.keys(tim[Number(id)].time).map((day, i) => {//dayずつ
        tim[Number(id)].time[day].map((eve, ind) => {//イベずつ
          var start = day + ' ' + eve.start
          if (timingData[start] == undefined) {
            timingData[start] = [id]
          } else {
            timingData[start].push(id)
          }
        })
      })
    }
  })
  return timingData;
}
const createTimingData = (tim) => {
  var arr = []; //データ用の空のやつ
  Object.keys(tim).map((id, index) => { //idずつ
    if (tim[Number(id)].time != "TBC") { //TBC無視
      Object.keys(tim[Number(id)].time).map((day, i) => {//dayずつ
        tim[Number(id)].time[day].map((eve, ind) => {//イベずつ
          var event = {
            "ID": Number(id),
            "start": day + ' ' + eve.start,
            "end": day + ' ' + eve.end
          }
          arr.push(event);
        })
      })
    }
  })
  return arr;
}
const createOnLiveList = (timingData, currentTime) => {
  var arr = []
  const currentNum = currentTime.getTime();
  timingData.map((eve, ind) => {
    const startNum = new Date('2022/' + eve.start + ' (JST)').getTime();
    const endNum = new Date('2022/' + eve.end + ' (JST)').getTime();
    if (startNum <= currentNum && currentNum <= endNum) {
      arr.push(eve);
    }
  })
  return arr
}
const createUpComingList = (timingData, currentTime) => {
  var arr = []
  const currentNum = currentTime.getTime();
  timingData.map((eve, ind) => {
    const startNum = new Date('2022/' + eve.start + ' (JST)').getTime();
    const endNum = new Date('2022/' + eve.end + ' (JST)').getTime();
    var currentStr = currentTime.getFullYear()
      + '/' + ('0' + (currentTime.getMonth() + 1)).slice(-2)
      + '/' + ('0' + currentTime.getDate()).slice(-2)
      + ' ' + ('0' + currentTime.getHours()).slice(-2)
      + ':' + ('0' + currentTime.getMinutes()).slice(-2)
      + ':' + ('0' + currentTime.getSeconds()).slice(-2)
      + ' (JST)';
    const limitTime = new Date(currentStr); //コピーした現在時刻（＝加算前のリミット
    limitTime.setMinutes(limitTime.getMinutes() + 15) //15分加算
    const limitNum = limitTime.getTime();
    if (currentNum <= startNum && startNum <= limitNum) {//まだ始まっていない＆１５分以内に開始
      arr.push(eve);
    }
  })
  return arr
}
const resetScrollPos = () => {
  window.scrollTo(0, 0);
}
Programs.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}