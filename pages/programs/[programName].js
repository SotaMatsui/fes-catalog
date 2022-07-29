import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";

import ProgramLayout from '../../components/layout-program';


export default function Program() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <div className='view-wrapper'>
        <div className="view-master">
          <div className='infos'>
            <img src={router.query.image} />
          </div>
          <div>
            <i className='title'>{router.query.title}
              <i className='genre'>{router.query.organizer} / {router.query.genre}</i>
            </i>
            <i className='place'><span class="material-symbols-outlined">pin_drop</span>{router.query.type}</i>
            <hr />
            <p className='shortDesc'>{router.query.shortDesc}</p>
            <p className='longDesc'>{router.query.longDesc}</p>
          </div>
        </div>
      </div>
    </>
  )
}


Program.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}