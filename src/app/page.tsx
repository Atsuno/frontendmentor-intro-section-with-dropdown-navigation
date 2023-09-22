import Link from 'next/link'
import { BiSolidTime } from 'react-icons/bi'
import { BsCalendarEvent, BsFillTreeFill } from 'react-icons/bs'
import { FaClipboardList } from 'react-icons/fa'
import { FiChevronDown, FiChevronUp } from 'react-icons/fi'
import { GiHamburgerMenu } from 'react-icons/gi'
import { GrClose } from 'react-icons/gr'

import Footer from '@/components/Footer'

const Home = () => (
  <main className="flex min-h-screen flex-col items-center bg-accent text-secondary md:justify-center">
    <header className="flex w-full justify-between gap-5 p-3">
      <img src="./images/logo.svg" alt="baner" />

      <div className="drawer drawer-end w-fit bg-accent ">
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
                      <p className="px-2 text-blue-500"><FaClipboardList /></p>
                      <Link className="px-2" href="/.">Todo List</Link>
                    </li>
                    <li className="flex flex-row">
                      <p className="px-2 text-purple-400"><BsCalendarEvent /></p>
                      <Link className="px-2" href="/.">Calendar</Link>
                    </li>
                    <li className="flex flex-row">
                      <p className="px-2 text-yellow-300"><BsFillTreeFill /></p>
                      <Link className="px-2" href="/.">Reminders</Link>
                    </li>
                    <li className="flex flex-row">
                      <p className="px-2 text-violet-700"><BiSolidTime /></p>
                      <Link className="px-2" href="/.">Planning</Link>
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
              <li><button className=" justify-center rounded-xl border-2 border-secondary p-3" type="button">Register</button></li>
            </ul>
          </div>

        </div>
      </div>

    </header>

    <section className="flex flex-col items-center justify-center gap-5 text-center">

      <img src="./images/image-hero-mobile.png" alt="This man hold notebook" />
      <div className="flex flex-col gap-3">

        <h1 className="text-2xl font-bold">Make remote work</h1>

        <p className="px-3 text-xs text-secondary">
          Get your team in sync, no matter your location. Streamline processes,
          create team rituals, and watch productivity soar.
        </p>
      </div>
      <button className="w-fit rounded-lg bg-primary px-4 py-2 text-xs text-accent" type="button">Learn more</button>
    </section>

    <Footer />

  </main>
)

export default Home
