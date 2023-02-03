
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { startLogout } from "../../store/auth/thunks";
import { DataView } from "../view/DataView";

export const JournalPage = () => {
  const dispatch=useDispatch();
  const onLogout=()=>{
    dispatch(startLogout());
  }
  return (
    <>
      <div className="flex ">

          <div className=" w-1/3 border-2 border-slate-400 ">
            <nav className="">
              <h1 className=" uppercase font-bold p-2 border-b-2 border-slate-400">franz schwartz</h1>
              
              <ul>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i className="fa-regular fa-calendar-check mx-2"></i><p>ENERO</p></a></li>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i className="fa-regular fa-calendar-check mx-2"></i><p>FEBRERO</p></a></li>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i className="fa-regular fa-calendar-check mx-2"></i><p>MARZO</p></a></li>
                <li className=" p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i className="fa-regular fa-calendar-check mx-2"></i><p>ABRIL</p></a></li>
                <li className="p-4 pl-6 hover:bg-slate-400 border-b-2 border-slate-400"><a className="flex items-center" href=""><i className="fa-regular fa-calendar-check mx-2"></i><p>MAYO</p></a></li>
              </ul>
            </nav>
          </div>


          <div className="container  ">
              <div className="container flex justify-between w-full bg-purple-900 h-10 border-2 border-purple-800 items-center p-2 py-5">
                <h1 className="font-bold text-white">JournalApp</h1>
                <button onClick={()=>onLogout()}><i className="fa-solid fa-right-from-bracket mr-2 text-white"></i></button>
              </div>
              <div className="container p-4  h-screen">
                <DataView/>
              </div>
          </div>

      </div>
    </>
  )
}