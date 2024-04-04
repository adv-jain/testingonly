import useFetch from "./hooks/useFetch";
import { useState } from "react";

function Product() {

  let [url, setURL] = useState('http://localhost:8000/shoes')
  let { data, loading } = useFetch(url)

  return (
    <>
      <div className="container my-5">
        <h1 className='mb-4'>Product</h1>

        <input type="button" value="shoes" className=" me-4" onClick={() => setURL('http://localhost:8000/shoes')} />
        <input type="button" value="jackets" className="" onClick={() => setURL('http://localhost:8000/jackets')} />

        <div className="d-flex flex-wrap gap-4">

          {loading ? 'loading......' : data.map((shoe) => (
            <div key={shoe.id} className="card my-3" style={{ width: "18rem" }}>
              <img src='https://via.placeholder.com/300' className="card-img-top" alt={shoe.name} />
              <div className="card-body">
                <h5 className="card-title">{shoe.description}</h5>
                <placeholder className="card-text">{shoe.name}</placeholder>
                <p className="card-text">{shoe.price}</p>
                <a href="#product" className="btn btn-primary">Buy</a>
              </div>
            </div>
          ))}

        </div>
      </div>
    </>
  );
}

export default Product;