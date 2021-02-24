import React from 'react';
import bgi from './Image/bgi (2).png';
import {NavLink} from 'react-router-dom';
import { PinDropSharp } from '@material-ui/icons';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const CommonPage=(props)=>{

return(
    <>
<div className="sec"></div>
    <section id="header" className="sectag">
    <div className="container-fluid nav-bg  my-5">
<div className="row">
<div className="col-10 mx-auto">
<div className="row">
    <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
         <h1>{props.name}</h1>
         <br />
          <h2> Enace your Skill with <strong>ShivamTech</strong> </h2>
          

          <div className="mt-3">
        <button bg-danger>  <NavLink to="/service">Get start</NavLink></button>
          </div>

    </div>
          <div className="col-lg-6 order-1 order-lg-2 header-img ">
            <img src={bgi} alt="Image"  className="img-fluid-animated animated" style={{width:"120%"}}/>
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
