import { NavLink } from 'react-router-dom'

function Header() {
  return (
    <>
      <nav
        class="navbar navbar-expand-sm"
      >
        <div class="container">
          <a class="navbar-brand " href="#">
            <img width='40' height='40' src="data:image/jpeg;base64,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" alt="" />
            NaturBazaar</a>
          <button
            class="navbar-toggler d-lg-none"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#collapsibleNavId"
            aria-controls="collapsibleNavId"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="collapsibleNavId">
            <ul class="navbar-nav me-auto mt-2 mt-lg-0">
              {/* <li class="nav-item">
                <NavLink className="nav-link " to="/" aria-current="page">Home</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link " to="/contact" aria-current="page">Contact</NavLink>
              </li>
              <li class="nav-item">
                <NavLink className="nav-link " to="/box" aria-current="page">Box</NavLink>
              </li> */}

            </ul>
            <form class="d-flex my-2 my-lg-0">
              <input
                class="form-control me-sm-2"
                type="text"
                placeholder="Search"
                id='search'
              // onKeyUp={(e) => searchProducts(e)}
              />
              {/* <button
                class="btn btn-outline-success my-2 my-sm-0"
                type="submit"
              >
                Search
              </button> */}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;