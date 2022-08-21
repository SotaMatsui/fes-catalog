
<div id="on-live" data-current={onLive}>
  <div className="cards-wrapper">
    <div className="cards-timetable on-live-mode">
      {lives.length != 0 ?
        lives.map((x, y) => {
          const queryData = {
            y
          }
          return (
            <>
              <div
                key={y}
                style={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? { filter: `hue-rotate(${Number(x) * 1420.4567 + 9.8765}deg)` } : { opacity: '1' }}
                data-is-cutvis={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? true : false}>
                <span className="live-wrap live">
                  <div className="circle"></div>
                  <span className="live">
                    Live
                  </span>
                </span>
                <div className="wrap" key={y} style={{ backgroundImage: `url(${data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image})` }}>
                  <Link key={Number(x)} as={"programs/" + Number(x)} href={{ pathname: "programs/" + Number(x), query: queryData }}>
                    <div className="card-master">
                      <div className="descriptions">
                        <h4>{data[Number(x)].title}</h4>
                        <i>{data[Number(x)].category} / {data[Number(x)].orgName}</i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )
        })
        :
        <a>bieeeeeeeeeeeeeeen</a>
      }
      {upComings.length != 0 ?
        upComings.map((x, y) => {
          const queryData = {
            y
          }
          return (
            <>
              <div
                key={y}
                style={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? { filter: `hue-rotate(${Number(x) * 1420.4567 + 9.8765}deg)` } : { opacity: '1' }}
                data-is-cutvis={data[Number(x)].image != undefined & data[Number(x)].image?.indexOf('cut-vis') != -1 ? true : false}>
                <span className="live-wrap">
                  Coming Up Next
                </span>
                <div className="wrap" key={y} style={{ backgroundImage: `url(${data[Number(x)].image == undefined ? '/noimage.png' : data[Number(x)].image})` }}>
                  <Link key={Number(x)} as={"programs/" + Number(x)} href={{ pathname: "programs/" + Number(x), query: queryData }}>
                    <div className="card-master">
                      <div className="descriptions">
                        <h4>{data[Number(x)].title}</h4>
                        <i>{data[Number(x)].category} / {data[Number(x)].orgName}</i>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </>
          )
        })
        :
        <a>found nothing!</a>
      }
    </div>
  </div>
</div>