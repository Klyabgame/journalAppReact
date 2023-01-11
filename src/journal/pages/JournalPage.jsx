
import { Link } from "react-router-dom";
export const JournalPage = () => {
  return (
    <>
      <div className="flex">

          <div className=" h-screen w-1/3 border-2 border-slate-400">
            <nav>
              <h1 className=" uppercase font-bold p-2 border-b-2 border-slate-400">franz schwartz</h1>
              
              <ul>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i class="fa-regular fa-calendar-check mx-2"></i><p>ENERO</p></a></li>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i class="fa-regular fa-calendar-check mx-2"></i><p>FEBRERO</p></a></li>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i class="fa-regular fa-calendar-check mx-2"></i><p>MARZO</p></a></li>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i class="fa-regular fa-calendar-check mx-2"></i><p>ABRIL</p></a></li>
                <li className="p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i class="fa-regular fa-calendar-check mx-2"></i><p>MAYO</p></a></li>
              </ul>
            </nav>
          </div>


          <div className="container  h-screen ">
              <div className="container flex justify-between w-full bg-purple-900 h-10 border-2 border-purple-800 items-center p-2 py-5">
                <h1 className="font-bold text-white">JournalApp</h1>
                <Link to={'/auth/login'}><i class="fa-solid fa-right-from-bracket mr-2 text-white"></i></Link>
              </div>
              <div className="container  p-4 h-max ">
                <div className="p ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cumque beatae tempora ex odit perferendis? Saepe laboriosam accusantium molestias dolorum tempore. Voluptas fugit exercitationem expedita.</div>
              </div>
          </div>

      </div>
    </>
  )
}