import React from 'react'
import Link from 'next/link';
import { useRouter } from "next/router";

import Layout from '../../components/layout';


export default function Program() {
  const router = useRouter();
  console.log(router.query);
  return (
    <>
      <Link href={router.query.prevURL}>
        <a>back</a>
      </Link>
      <div className='view-wrapper'>
        This is a page of {router.query.title}
        <div className="view-master">
          <div className='infos'>
            <img src={router.query.image} />
          </div>
          <div>
            <h4 className='title'>{router.query.title}</h4>
            <i>{router.query.genre} / {router.query.organizer}</i>
            <p>開催場所：{router.query.type}</p>
            <p className='shortDesc'>{router.query.shortDesc}</p>
            <p className='longDesc'>{router.query.longDesc}</p>
          </div>
        </div>
      </div>
    </>
  )
}


Program.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}