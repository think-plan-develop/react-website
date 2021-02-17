import React from 'react';
import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const Navbar=()=>{


    return(<>




  <div className="container-fluid">
  <div className="row">
  <div className="col-12 max-auto">
  
  
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <NavLink activeClassName="menu_active" className="navbar-brand" exact to="/author"> ShivamTech</NavLink>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">

      <ul className="navbar-nav ml-auto mb-4 mb-lg-0">
        <li className="nav-item">
          <NavLink activeClassName="menu_active"  className="nav-link"  exact to="/">Home</NavLink>
        </li>

        <li className="nav-item">
          <NavLink activeClassName="menu_active"  className="nav-link" exact to="/contact">Contact</NavLink>
        </li>
        
        <li className="nav-item">
   <NavLink activeClassName="menu_active"  className="nav-link" exact to="/service">Service</NavLink>
 </li>
  <li className="nav-item">
   <NavLink activeClassName="menu_active"  className="nav-link" exact to="/about">About</NavLink>
 </li>
 
       
        
        
        
        
        
        
        
        
        
       
       
       
      </ul>
     
     
     
     
    </div>
  
</nav>
</div>
</div>
</div>


















  
  
  
  
  
  
  
  
  
  

 
  
  
  
  
  
  
  
  
  
  
  
  











    </>)
}
export default Navbar;