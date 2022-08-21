import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";
import getData from '../../functions/getData';
import ProgramLayout from '../../components/layout-program';
import { useEffect, useState } from 'react';


export default function Program() {
  const router = useRouter();
  const { success, data, timing } = getData();
  const [favs, setFavs] = useState([]);
  useEffect(() => {
    if (localStorage.getItem('favs') != undefined) {
      let _arr = localStorage.getItem('favs').split(',').map(str => parseInt(str, 10));
      setFavs(_arr)
    }
  }, [])
  const setFavorite = (_id) => {
    let _copy = favs.slice(0, favs.length);
    _copy.indexOf(Number(_id)) == -1 ? _copy.push(_id) : _copy.splice(_copy.indexOf(Number(_id)), 1)
    setFavs(_copy)

    let _str = _copy.join(',');
    localStorage.setItem('favs', _str);
  }
  if (success == false || success == undefined || router.query.id == undefined) {
    return <div>loading...</div>
  } else if (success == true) {
    const program = data[Number(router.query.id)]
    return (
      <>
        <div className='view-wrapper'>
          <div className="view-master">
            <div className='infos'>
              <img src={program.image == undefined ? '/noimage.png' : program.image} />
            </div>
            <div>
              <i className='title'>
                <span className='id'>{program.ID}</span>
                {program.title}
                <i className='genre'>{program.orgName} / {program.category} : {program.genre}</i>
              </i>
              <i className='place'><span className="material-symbols-outlined">pin_drop</span>{program.place}
                <span
                  className="material-symbols-outlined favorite"
                  data-is-fav={favs.indexOf(Number(program.ID)) != -1 ? 'true' : 'false'}
                  onClick={() => setFavorite(Number(program.ID))}>favorite</span>
              </i>
              <hr/>
              {timing[program.ID] != undefined ?
                timing[program.ID] == "TBC"?
                Object.keys(timing[program.ID].time).map((x, y) => {
                return (
                  <section key={y}>
                    <h4>{x}</h4>
                    <ul>
                      {timing[program.ID].time[x].map((a, b) => {
                        return <li key={b}>{a.start}~{a.end}</li>
                      })}
                    </ul>
                  </section>
                )
                })
                  :<p>開催時刻は未定です</p>
                :
              <p>時間指定はありません</p>  
            }
              <p className='shortDesc'>{program.shortDesc}</p>
              <p className='longDesc'>{program.longDesc}</p>
            </div>
          </div>
        </div>

      </>
    )
  }
}


Program.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}