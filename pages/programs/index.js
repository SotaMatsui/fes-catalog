import Link from "next/link";
import getData from "../../functions/main";

import ProgramLayout from "../../components/layout-program";
import { defaultHead } from "next/head";


export default function Programs(prgrmsList) {
  

  const { success, data} = getData();
  if (success == false || success == undefined) {
    return <div>loading...</div>
  } else if(success == true){
    return (
      <>
        <div className="header">
          <h3>開催プログラム一覧</h3>
        </div>
        <div className="cards-wrapper">
          <div className="cards">
            {
              Object.keys(data).map((id,index) => {
                const queryData = {
                  index
                }
                return (
                  <Link key={Number(id)} as={"programs/" + Number(id)} href={{ pathname: "programs/" + Number(id), query: queryData }}>
                    <div className="card-master">
                      <div className="img-wrapper"><img src="/hero.png" /></div>
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
      </>
    );
  }



}


Programs.getLayout = function getLayout(page) {
  return <ProgramLayout>{page}</ProgramLayout>
}