import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from "next/router";

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const router = useRouter();
  const closeMenu = () => {
    setMenuState(!menuState)
  }

  return (
    <div id='navbar-master' current-path={router.asPath}>
      <div className='school-emblem'><img src="/school-emblem.svg" alt="HonjoHighSchool Logo" /></div>
      <Link href='/'><div className='fes-primary-logo'><img src="/fes-primary-logo.svg" alt="Bunkasai 22 Logo" /></div></Link>


      <div className="hamburger-menu">
        <input type="checkbox" id="menu-btn-check" checked={menuState} />
        <label onClick={closeMenu} htmlFor="menu-btn-check" className="menu-btn"><span></span></label>
        <div className="menu-content">
          <div>
            <header>
              <div>
                <div className='school-emblem'><img src="/school-emblem.svg" alt="HonjoHighSchool Logo" /></div>
                <div className='fes-primary-logo'><img src="/fes-primary-logo.svg" alt="Bunkasai 22 Logo" /></div>
              </div>
              <p className='subtitle'>彩れ、青春の一ページ。</p>{/*!TODO ここ変数にする*/}
            </header>
            <ul className='links'>
              <li onClick={closeMenu}>
                <Link href='/'>文化祭トップ</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href='/greeting/'>ごあいさつ</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href='/programs/'>開催プログラム一覧</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href='/notes/'>おねがい</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href='/docs/'>資料</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href='/access/'>アクセス</Link>
              </li>
              <li>
                <a href="https://www.metro.ed.jp/honjo-h/">本校ホームページ</a>
              </li>
            </ul>
            <div>
              <img className='accent' src='/nagamine-shi.png'/>
              <ul className='school-infos'>
                <li>
                  東京都立本所高等学校
                </li>
                <li>
                  <span className="material-symbols-outlined">pin_drop</span>東京都墨田区向島3-37-25
                </li>
                <li>
                  <span className="material-symbols-outlined">call</span>03-3622-0344
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}