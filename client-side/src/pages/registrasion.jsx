


const Registrasion = () => {
    return (
    
<div className="container-fluid d-flex justify-content-center align-items-center h-100vh mt-5">

 
    <div className="row ">
        <div className="col-md-8">
        
        <form id="form" className="border border-secondary  p-3 ">
  <div className="mb-3">
    <label htmlFor="fname" className="form-label">
      First Name
    </label>
    <input
      type="text"
      className="form-control"
     
      aria-describedby="emailHelp"
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="lname" className="form-label">
      Last Name
    </label>
    <input
      type="text"
      className="form-control"
     
      aria-describedby="emailHelp"
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="mobile" className="form-label">
      Phone Number
    </label>
    <input
      type="number"
      className="form-control"
      
      aria-describedby="emailHelp"
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">
      Email
    </label>
    <input
      type="email"
      className="form-control"
   
      aria-describedby="emailHelp"
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="username" className="form-label">
      User Name
    </label>
    <input
      type="text"
      className="form-control"
   
      aria-describedby="emailHelp"
    />
  
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">
      PassWord
    </label>
    <input
      type="password"
      className="form-control"
   
      aria-describedby="emailHelp"
    />
  
  </div>

  
      <button type="submit" className="btn btn-primary">
        Registrasion 
      </button>


</form>


        </div>
    </div>
</div>
    
    );
};

export default Registrasion;