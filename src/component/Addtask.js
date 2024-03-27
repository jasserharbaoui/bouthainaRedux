import { useState } from "react"
import { useDispatch } from "react-redux";
import { add } from "../app/taskSlice";



const Addtask =()=>{

    const [disc , setDisc] = useState('')
    const [done , setDone] = useState('')
    const [imgs , setImgs] = useState('')
    console.log(disc);


    let newTask = {
        id : Date.now(),
        description : disc,
        images:imgs,
        isDone :Boolean(done) ,
        


    }

    const dispatch = useDispatch()
     return(
        <div >
          <input  type="text" placeholder="description" onChange={(e)=>setDisc(e.target.value)}/>
          {/* <input type="image" src="https://tse1.mm.bing.net/th?id=OIP.tP4yu80KYSDQTbbsfEMvSgHaHZ&pid=Api&P=0&h=180" alt="Submit" width="48" height="48" onChange={(e)=>setImgs(e.target.value)}/> */}
          <label for="myfile">Select a file:</label>
           <input type="file" id="myfile" name="myfile" onChange={(e)=>setImgs(e.target.value)}/>
          
          <input type="checkbox" id="chek1" name="chek2" value="Car" onChange={(e)=>setDone(e.target.value)}/>
           <label for="vehicle2">true</label> 
          <input type="checkbox" id="chek1" name="chek2" value="Car" onChange={(e)=>setDone(e.target.value)}/>
           <label for="vehicle2">false</label> 
           <button onClick={()=>dispatch(add(newTask))}>ADD</button>
        </div>
     )
}

export default Addtask