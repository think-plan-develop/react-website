import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';
 

const FarmC=()=>{
    const[start,setStart]=useState({
        name:"",comment:"",email:""
    });

    const[data,setData]=useState([ ]);

const eventt=(event)=>{
    
    const value=event.target.value;
    const name=event.target.name;
    // setStart((preVal)=>{
        // return {
            // ...preVal,[name]:value
        // }
        setStart({...start,[name]:value})
        
    
    // )

    // console.log(event.target.value);
   

}


const submit=(form)=>{
    form.preventDefault();
    // setData(start);
    setData([...data,start]);
   
  

   


    setStart({name:"",comment:"",email:"",});
   
   


 }
 
 console.log(data);
    return(<>

<div className="container">
<form>
<h1 className="text-dark text-center mb-5"> Contact  </h1>

<div className="row py-1">
        <div className="col-md-6">
        <div className="form-group">
            <label>Name</label>
            <input type="text" name="name" value={start.name} onChange={eventt} className="form-control" />
        </div>
        </div>

        <div className="col-md-6">
<div className="from=group">
<label>Enter Email</label>
<input type="text" name="email" onChange={eventt} value={start.email} className="form-control" />
</div>
</div>
        
      
      
      
      
      
        </div>



<div className="row py-1">
        
        
        
        
        
        



        <div className="col-md-8 m-auto ">
  <div className="form-group">
       <label>Comment</label>
       <textarea type="comment" name="comment" value={start.comment} onChange={eventt} autoComplete="cc-number" className="form-control cc-number"/>     
         </div>       </div>





    {/* <div className="col-md-6"> */}
{/*                  */}
            {/* <div className="form-group"> */}
            {/* <label>Select Country Name</label><br/> */}
                 {/* <select id="sel" name="country" onChange={eventt} value={start.value}  className="py-1"> */}
                 {/* <option style={{display:"none"}}>--Choose--</option> */}
                {/* <option value="India" >India</option> */}
                {/* <option value="Australia">Australia</option> */}
                {/* <option value="SriLanka">SriLanka</option> */}
                {/* <option value="Nepal">Nepal</option> */}
                {/* </select> */}
                {/* </div> */}
            {/* </div> */}
    </div>


    {/* <div onChange={eventt} className="form-group col-md-6"> */}
        {/* <label className="my-1">Select Gender</label><br/> */}
        {/* <input type="radio" value="Male" name="gender" /> Male */}
        {/* <input type="radio" value="Female" name="gender" /> Female */}
        {/* <input type="radio" value="Other" name="gender" /> Other */}
      {/* </div> */}

      {/* <div onChange={eventt}> */}
    {/* <input type="checkbox" onChange={eventt} value="Male" name="gender" /> Male */}
    {/* <input type="checkbox" onChange={eventt} value="Female" name="gender" /> Female */}
    {/* <input type="checkbox" onChange={eventt}  value="Other" name="gender" /> Other */}
  {/* </div> */}



<div className="text-center">
<button onClick={submit} className="col-md-3 m-5 p-1 bg-primary">Submit</button></div>
</form>
</div>

{data.map((curE,id)=>{
    
return(
<div  key={id}>
<p>{curE.name} {id}</p>
<p> </p>
</div>)
})
}

    </>)
}
export default FarmC;