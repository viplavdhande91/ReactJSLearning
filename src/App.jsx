import { useState } from "react";
import {SubjectContext} from './context/SubjectContext'
import College from "./components/College";
export default function App() {
  const [subject,setSubject]=useState('')
  return (
    <div style={{backgroundColor:'yellow', padding:10}}>
     <SubjectContext.Provider value={subject}>
     <h1>App Component</h1>
           
      <select value={subject} onChange={(event)=>setSubject(event.target.value)}>
        <option value="">Select Subject</option>
        <option value="Maths">Maths</option>
        <option value="History">History</option>
        <option value="English">English</option>

      </select>
     <button onClick={()=>setSubject('')} >Clear Subject</button>
     <College/>
     </SubjectContext.Provider>

    </div>
  )

}