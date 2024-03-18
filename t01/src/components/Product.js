import { useState } from 'react';


export default function Product({ product, setProduct }) {

  let [cart, setCart] = useState([])

  function addToCart(id) {
    let f = product.filter((p) => {
      if (p.id === id) {
        return p
      }
    })
    console.log(f)
    cart.length === 0 ? setCart(f) : setCart(...cart, f)
    console.log(cart)
  }

  return (
    <>
      <div className="d-flex justify-content-between align-items-center">
        <h1>
          Products
          <span className=" ms-2 badge rounded-pill text-bg-secondary align-middle fs-6">
            {product?.length}
          </span>
        </h1>
      </div>
      <div className="d-flex flex-wrap gap-4 mt-4 ">
        {product?.map((singleProduct) => {
          return (
            <div className="card" style={{ minWidth: "300px" }}>
              <img
                src="https://via.placeholder.com/150"
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{singleProduct.title}</h5>
                <p className="card-text">Price: ${singleProduct.price}</p>
                <button className="btn btn-primary" onClick={() => addToCart(singleProduct.id)} >Add to cart</button>
              </div>
            </div>
          );
        })}
        {product?.length == null ? (
          <div>
            No product available at the moment.
            <a className="ms-2 small " href="#modalId" data-bs-toggle="modal">
              Add Product
            </a>
          </div>
        ) : (
          <div className="w-100 text-center small text-secondary mt-5">
            Showing all of {product.length} products.
          </div>
        )}
      </div>
    </>
  );
}
