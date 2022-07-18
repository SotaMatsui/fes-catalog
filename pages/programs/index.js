import Link from "next/link";
import axios from "axios";
import React from "react";
import useSWR from "swr";

import Layout from "../../components/layout";
import { defaultHead } from "next/head";

const endpoint = 'https://fesbrochuredata.web.app/data.json'

export default function Programs(prgrmsList) {
  /* const { data, error } = useSWR(endpoint, axios)

  
  const pData = data?.data.explore.scheduled;
  console.log(pData); */



  const [post, setPost] = React.useState(null);

  React.useEffect(() => {
    axios.get(endpoint).then((response) => {
      setPost(response.data);
    });
  }, []);

  if (!post) return null;



  const pData = post.explore.scheduled;




  return (
    <>
        <h1>welccccccccccccccccccccccccccccccocme</h1>
      <div className="cards-wrapper">
        <div className="cards">
          {
            pData.map((program) => {
              const queryData = {
                prevURL : '/programs',
                title: program.title,
                image: program.image,
                genre: program.genre,
                organizer: program.organizer,
                type: program.type,
                shortDesc: program.shortDesc,
                longDesc: program.longDesc
              }
              return (
                  <Link as={"programs/" + program.ID} href={{ pathname: "programs/" + program.ID, query: queryData }}>
                    <div className="card-master" key={program.ID}>
                      <img src={program.image} />
                      <div>
                        <h4>{program.title}</h4>
                        <i>{program.genre} / {program.organizer}</i>
                        <p>開催場所：{program.type}</p>
                      </div>
                   </div>
                  </Link>
              )
            })
          }
        </div>
      </div>
    </>
  );
}


Programs.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>
}