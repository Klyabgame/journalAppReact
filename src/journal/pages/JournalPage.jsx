
import { useDispatch, useSelector } from "react-redux";
import { startLogout } from "../../store/auth/thunks";
import { JournalNotes } from "../components/JournalNotes";
import { DataView } from "../view/DataView";
import { JournalView } from "../view/JournalView";

export const JournalPage = () => {
  const{displayName}=useSelector((state)=>state.auth);
  const {active,notes}=useSelector(state=>state.journal);

  const dispatch=useDispatch();
  const onLogout=()=>{
    dispatch(startLogout());
  }

  /* const onSubmitNotes=(e)=>{
    e.preventDefault();
  } */
  return (
    <>
      <div className="flex ">

          <div className=" w-1/3 border-2 border-slate-400 ">
            <nav className="" >
              <h1 className=" uppercase font-bold p-2 border-b-2 border-slate-400">{displayName}</h1>
              
              <ul >
                {
                  notes.map((note)=>(
                    <JournalNotes key={note.id} {...note} />
                  ))
                }
                
                
              </ul>
            </nav>
          </div>


          <div className="container  ">
              <div className="container flex justify-between w-full bg-purple-900 h-10 border-2 border-purple-800 items-center p-2 py-5">
                <h1 className="font-bold text-white">JournalApp</h1>
                <button onClick={()=>onLogout()}><i className="fa-solid fa-right-from-bracket mr-2 text-white"></i></button>
              </div>
              <div className="container p-4  h-screen">
                {
                  (!!active)? <DataView/> : <JournalView/>
                }
              </div>
          </div>

      </div>
    </>
  )
}