import Link from "next/link";
import getData from "../../functions/main";

import ProgramLayout from "../../components/layout-program";
import { defaultHead } from "next/head";


export default function Programs(prgrmsList) {
  

  const { success, data} = getData();
  if (success == false || success == undefined) {
    console.log('success == false || success == undefined')
    return <div>loading...</div>
  } else if(success == true){
    console.log('success == true')
    console.log(data)
    return (
      <>
        <div className="header">
          <h3>開催プログラム一覧</h3>
        </div>
        <div className="cards-wrapper">
          <div className="cards">
            {
              data.data.explore.permanent.map((program,index) => {
                const queryData = {
                  index,
                  prevURL: '/programs',
                  title: program.title,
                  image: program.image,
                  genre: program.genre,
                  organizer: program.organizer,
                  type: program.type,
                  shortDesc: program.shortDesc,
                  longDesc: program.longDesc
                }
                console.log(index)
                return (
                  <Link key={index} as={"programs/" + index} href={{ pathname: "programs/" + index, query: queryData }}>
                    <div className="card-master">
                      <div className="img-wrapper"><img src={program.image} /></div>
                      <div className="descriptions">
                        <h4>{program.title}</h4>
                        <i>{program.genre} / {program.organizer}</i>
                      </div>
                    </div>
                  </Link>
                )
              })}
          </div>
        </div>
      </>
    );
  }



}


Programs.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}