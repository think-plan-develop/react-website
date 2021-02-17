import React from 'react';
import bgi from './Image/bgi.png';
import {NavLink} from 'react-router-dom';
import { PinDropSharp } from '@material-ui/icons';
const CommonPage=(props)=>{

return(
    <>

    <section id="header" className="sectag">
    <div className="container-fluid nav-bg">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
         <h1>{props.name}</h1>
         <br />
          <h2> Enace your Skill with <strong>ShivamTech</strong> </h2>
          

          <div className="mt-3">
          <NavLink to="/service">Get start</NavLink>
          </div>

    </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img ">
            <img src={bgi} alt="Image"  className="img-fluid-animated" style={{width:"120%"}}/>
    </div>
</div>
</div>
</div>      

</div>
</section>
    </>
)

}
export default CommonPage;
