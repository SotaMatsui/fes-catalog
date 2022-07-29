import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'

export default function Header() {
  const [menuState, setMenuState] = useState(false);
  const closeMenu = () => {
    setMenuState(!menuState)
    console.log('function called')
  }

  return (
    <div id='navbar-master'>
      <div className='school-emblem'><Image src="/school-emblem.svg" alt="HonjoHighSchool Logo" width={38} height={38} /></div>
      <Link href='/'><div className='fes-primary-logo'><Image src="/fes-primary-logo.svg" alt="Bunkasai 22 Logo" width={128} height={38} /></div></Link>


      <div class="hamburger-menu">
        <input type="checkbox" id="menu-btn-check" checked={menuState} />
        <label onClick={closeMenu} for="menu-btn-check" class="menu-btn"><span></span></label>
        <div class="menu-content">
          <div>
            <header>
              <div>
                <div className='school-emblem'><Image src="/school-emblem.svg" alt="HonjoHighSchool Logo" width={38} height={38} /></div>
                <div className='fes-primary-logo'><Image src="/fes-primary-logo.svg" alt="Bunkasai 22 Logo" width={128} height={38} /></div>
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
                <Link href='/'>文化祭トップ</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href='/greeting/'>ごあいさつ</Link>
              </li>
              <li onClick={closeMenu}>
                <Link href='/programs/'>開催プログラム一覧</Link>
              </li>
              <li>
                <a href="https://www.metro.ed.jp/honjo-h/">本校ホームページ</a>
              </li>
            </ul>

            <ul className='school-infos'>
              <li>
                東京都立本所高等学校
              </li>
              <li>
                <span class="material-symbols-outlined">pin_drop</span>東京都墨田区向島3-37-25
              </li>
              <li>
                <span class="material-symbols-outlined">call</span>03-3622-0344
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}