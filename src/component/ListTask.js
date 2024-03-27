
import { useSelector } from "react-redux"
import TaskCard from "./Task";
import { useEffect } from "react";


const ListTask = ()=>{

    const list = useSelector((state)=>state.task)
   
console.log(list);
   
     return(
        <div>
          {list.map((item,index)=>{
            return  <TaskCard film ={item} key={index}/>
            })}
        
        </div>
     )
}
export default ListTask