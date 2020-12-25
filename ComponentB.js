import axios from 'axios'
// import {TouchableOpacity } from 'react-native'
import React ,{useState }from 'react'
// import {v4 as uuidv4} from 'uuid'




function ComponentB() {
    const[items , setItems] = useState([])
    const [id, setId] = useState('') 
     const [selected , setSelected] = useState([])
     const[favourite , setFavourite] = useState([])
     
    
    
    
    const handleClick= ()=>{
        axios.get('https://assignment-machstatz.herokuapp.com/planet')
        .then(res=>{
            console.log(res)
            setItems(res.data)
        }).catch(err=>{
            console.log(err)
        })
    }
    

    const handleButton=(event)=>{
        setId(event.target.value)
    
        }
    
    const addItems=(selecteditem)=>{
       
        let isexist=favourite.findIndex(ele=>ele.id === selecteditem.id )
        console.log(isexist)
         if(isexist > 0 )
         {
           alert('already in favourite list')
           
         }
         else{
            favourite.push(selecteditem)
         }
        
        console.log('item is selected' , selecteditem)
    }
    const handleFavourite =()=>{
        setItems(favourite)
    }
    
    return (
        <div>
            
            <button type="button" onClick={handleClick}>Planet List</button>
            <button onChange={handleButton} value={selected} onClick={handleFavourite}> FavouriteList</button>
            
            <div>
           {      
                   <ul>
                    {
                        items.map((item)=>(
                            
                           <li key={item.id} onClick={()=>addItems(item)}>{item.name}</li>
                            
                        ))
                    }
                </ul>
         }
            
               
               
            </div>
        </div>
    )
}

export default ComponentB
