import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { editTask, remouveTask } from '../app/taskSlice';
import { useState } from 'react';



const TaskCard =({film})=>{

  

const [description, setDescription] = useState('bou');
const [show  , setShow] = useState(false);

  const handelEdit =()=>{
    setShow(!show)
  }
  console.log(description);
const dispatch = useDispatch();
 
    return(
        <div style={{border:'solid 1px red', width:'25%', display:'flex',flexDirection:'column-reverse', flexWrap:'wrap'}}>
             <Card style={{ width: '18rem' }}>
      
      <Card.Body>
        <Card.Title>{film.description}</Card.Title>
        <Card.Text>
         <img src={film.images}/>
        </Card.Text>
        <Button variant="primary" onClick={() => dispatch(remouveTask(film.id))}>remouve</Button>
      </Card.Body>
      {show ? <div>
       <input type='text' placeholder='description here' onChange={(e)=>setDescription(e.target.value)}/>
       <button onClick={()=>dispatch(editTask({id:film.id , description}))}>Finish</button>
      </div>: null}
      <button onClick={()=>handelEdit()}>EDIT</button>
    </Card>
        </div>
    )
}

export default TaskCard