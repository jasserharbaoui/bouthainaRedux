import { createSlice } from "@reduxjs/toolkit"
import {TaskData} from "../data"


const  taskSlice = createSlice({
     name : "task",
     initialState : TaskData,
     reducers:{
        add:(state , action)=>{
            state.push(action.payload)
        },
        filterTask:(state , action)=>{
            state = state.filter((item)=>{
                return item.description.toLocaleLowerCase().includes(action.payload)
            })
            return state
        },
        
        remouveTask:(state, action) =>{
            state = state.filter((item)=>{
                return item.id !== action.payload
            });

            return state
          },

          editTask:(state , action)=>{
            state = state.map((item)=>{
                if (item.id === action.payload.id){
                 item.description = action.payload.description
                }
                
            });
            
          }

     }
})

export const{add , filterTask,remouveTask,editTask} = taskSlice.actions;
export default taskSlice.reducer