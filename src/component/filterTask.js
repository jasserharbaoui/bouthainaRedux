import { useState } from "react"
import { useDispatch } from "react-redux"
import { filterTask } from "../app/taskSlice";






const Filter =()=>{

    const dispatch = useDispatch();

    const [filtred , setFiltred] = useState('');

    const handelChange =(e)=>{
        setFiltred(e.target.value);
        dispatch(filterTask(filtred))
    }

    return(
        <div>
            <input type="text" placeholder="search" onChange={(e)=>handelChange(e)}/>
            
        </div>
    )
}


export default Filter