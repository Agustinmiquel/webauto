import React from 'react';
// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function Search() {
  return (
    <div className=''>
      <form className="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input type="search" className="form-control" placeholder="Buscar..." aria-label="Search"></input>
      </form>
    </div>
  )
}

export default Search
