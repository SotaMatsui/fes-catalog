import Link from 'next/link'

export default function Footer() {
  return (
    <footer>
      <div>
        <main className='centered'>
          <section className='header'>
            <div>
              <div className='school-emblem'><img src="/school-emblem.svg" alt="HonjoHighSchool Logo"/></div>
              <div className='fes-primary-logo'><img src="/fes-primary-logo.svg" alt="Bunkasai 22 Logo"  /></div>
            </div>
            <p className='subtitle'>彩れ、青春の一ページ。</p>{/*!TODO ここ変数にする*/}
          </section>
          <section className='links'>
            <ul>
              <li>文化祭</li>
              <li>
                <Link href="/">文化祭トップ</Link>
              </li>
              <li>
                <Link href='/notes/'>おねがい</Link>
              </li>
              <li>
                <Link href='/programs/'>展示型企画</Link>
              </li>
              <li>
                <Link href='/programs/'>イベント型企画</Link>
              </li>
            </ul>
            <ul>
              <li>本所高校と文化祭について</li>
              <li>
                <Link href='/greeting/'>ごあいさつ</Link>
              </li>
              <li>
                <Link href='/access'>アクセス</Link>
              </li>
              <li>
                <a href='https://www.metro.ed.jp/honjo-h/'>本校ホームページ</a>
              </li>
            </ul>
            <ul>
              <li>資料</li>
              <li>
                <Link href='/creations/'>応募作品一覧</Link>
              </li>
              <li>
                <Link href='/workers/'>実行委員一覧</Link>
              </li>
              <li>
                <Link href='/editors-note/'>編集後記</Link>
              </li>
            </ul>
          </section>
        </main>
      </div>
      <div>
        <main className='centered'><i>東京都立本所高等学校<br/>〒131-0033 東京都墨田区向島3-37-25</i></main>
      </div>
      <div>
        <main className='centered'><i>2022 HonjoComputerClub</i></main>
      </div>
    </footer>
  )
}