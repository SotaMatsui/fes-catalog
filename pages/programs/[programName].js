import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";
import getData from '../../functions/main';
import ProgramLayout from '../../components/layout-program';


export default function Program() {
  const router = useRouter();
  const { success, data } = getData();
  if (success == false || success == undefined || router.query.programName == undefined) {
    return <div>loading...</div>
  } else if (success == true) {
    const program = data.data.explore.permanent[Number(router.query.programName)]
    return (
      <>
        <div className='view-wrapper'>
          <div className="view-master">
            <div className='infos'>
              <img src={program.image} />
            </div>
            <div>
              <i className='title'>{program.title}
                <i className='genre'>{program.organizer} / {program.genre}</i>
              </i>
              <i className='place'><span className="material-symbols-outlined">pin_drop</span>{program.type}</i>
              <hr />
              <div className='save-wishlist'>
                <span className="material-symbols-outlined">bookmark</span>
                <p>ウィッシュリストに保存</p>
              </div>
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