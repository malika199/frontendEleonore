import React from 'react'; 
 const input = () => {    
      return (        
        <div className="input">             
           <input            
            id={props.id}            
            name={props.name}             
            placeholder={props.placeholder}     
            value={props.value}  
            onChange={props.onChage}
            required = {props.required}
            

            />         
        </div>     );}   
            
export default input;