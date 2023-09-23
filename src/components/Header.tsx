import Image from 'next/image'
import Link from 'next/link'
import { BiSolidTime } from 'react-icons/bi'
import { BsCalendarEvent, BsFillTreeFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

const Header = () => (
  <header className="flex w-full items-center justify-between gap-5 p-3 lg:justify-normal lg:px-10">
    <Image className="h-fit w-fit" width={84} height={27} src="./images/logo.svg" alt="Logo" />

    <ul className="menu hidden w-full flex-row justify-between lg:flex ">
      <li className="flex flex-row gap-5">
        <details className="dropdown lg:dropdown-end">
          <summary className="btn btn-ghost content-center text-base font-normal normal-case hover:bg-transparent hover:text-primary">Features</summary>
          <ul className="menu dropdown-content z-[1] rounded-lg bg-base-100 p-3 shadow-2xl lg:w-max">
            <li className="flex flex-row ">
              <p className="px-2 py-1 text-blue-500 hover:bg-transparent"><FaClipboardList /></p>
              <Link className="px-2 py-1 hover:bg-transparent" href="/.">Todo List</Link>
            </li>
            <li className="flex flex-row">
              <p className="px-2 py-1 text-purple-400 hover:bg-transparent"><BsCalendarEvent /></p>
              <Link className="px-2 py-1 hover:bg-transparent" href="/.">Calendar</Link>
            </li>
            <li className="flex flex-row">
              <p className="px-2 py-1 text-yellow-300 hover:bg-transparent"><BsFillTreeFill /></p>
              <Link className="px-2 py-1 hover:bg-transparent" href="/.">Reminders</Link>
            </li>
            <li className="flex flex-row">
              <p className="px-2 py-1 text-violet-700 hover:bg-transparent"><BiSolidTime /></p>
              <Link className="px-2 py-1 hover:bg-transparent" href="/.">Planning</Link>
            </li>
          </ul>
        </details>
        <details className="dropdown lg:dropdown-bottom">
          <summary className="btn btn-ghost content-center text-base font-normal normal-case hover:bg-transparent hover:text-primary">Company</summary>
          <ul className="menu dropdown-content z-[1] rounded-lg bg-base-100 p-5 text-left shadow-2xl before:w-0 lg:w-max">
            <li><Link className="px-2 py-1 hover:bg-transparent" href="/.">History</Link></li>
            <li><Link className="px-2 py-1 hover:bg-transparent" href="/.">Our Team</Link></li>
            <li><Link className="px-2 py-1 hover:bg-transparent" href="/.">Blog</Link></li>
          </ul>
        </details>
        <Link className="self-center text-base hover:bg-transparent hover:text-primary" href="/.">Careers</Link>
        <Link className="self-center text-base hover:bg-transparent hover:text-primary" href="/.">About</Link>
      </li>

      <div className="flex flex-row gap-5">
        <button className="justify-center p-3 hover:text-primary lg:px-10" type="button">Login</button>
        <button className="justify-center rounded-xl border-2 border-secondary p-3 hover:border-primary hover:text-primary lg:px-10" type="button">Register</button>
      </div>
    </ul>

    <div className="drawer drawer-end inline-block w-fit bg-accent lg:hidden">
      <input id="nav-bar" type="checkbox" className="drawer-toggle" />

      <div className="drawer-content">
        <label htmlFor="nav-bar" className="drawer-button">
          <p className="text-2xl"><GiHamburgerMenu /></p>
        </label>
      </div>

      <div className="drawer-side">
        <label htmlFor="nav-bar" className="drawer-overlay" />

        <div className="menu min-h-full w-3/4 gap-5 bg-accent p-4 text-secondary">
          <div className="drawer-content self-end">
            <label htmlFor="nav-bar" className="drawer-button">
              <p className="text-2xl"><GrClose /></p>
            </label>
          </div>

          <ul className="menu rounded-box bg-accent p-0">
            <li>
              <details>
                <summary className="px-0 after:justify-self-start">Features</summary>
                <ul className="before:w-0">
                  <li className="flex flex-row">
                    <p className="px-2 text-blue-500 hover:bg-transparent"><FaClipboardList /></p>
                    <Link className="px-2 hover:bg-transparent" href="/.">Todo List</Link>
                  </li>
                  <li className="flex flex-row">
                    <p className="px-2 text-purple-400 hover:bg-transparent"><BsCalendarEvent /></p>
                    <Link className="px-2 hover:bg-transparent" href="/.">Calendar</Link>
                  </li>
                  <li className="flex flex-row">
                    <p className="px-2 text-yellow-300 hover:bg-transparent"><BsFillTreeFill /></p>
                    <Link className="px-2 hover:bg-transparent" href="/.">Reminders</Link>
                  </li>
                  <li className="flex flex-row">
                    <p className="px-2 text-violet-700 hover:bg-transparent"><BiSolidTime /></p>
                    <Link className="px-2 hover:bg-transparent" href="/.">Planning</Link>
                  </li>
                </ul>
              </details>
              <details>
                <summary className="px-0 after:justify-self-start">Company</summary>
                <ul className="before:w-0">
                  <li><Link className="px-2" href="/.">History</Link></li>
                  <li><Link className="px-2" href="/.">Our Team</Link></li>
                  <li><Link className="px-2" href="/.">Blog</Link></li>
                </ul>
              </details>
            </li>
            <li><Link className="px-0" href="/.">Careers</Link></li>
            <li><Link className="px-0" href="/.">About</Link></li>
            <li><button className="justify-center p-3" type="button">Login</button></li>
            <li><button className="justify-center rounded-xl border-2 border-secondary p-3" type="button">Register</button></li>
          </ul>
        </div>
      </div>
    </div>

  </header>

)

export default Header
