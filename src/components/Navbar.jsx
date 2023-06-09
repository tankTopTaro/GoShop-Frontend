import React, { useContext } from "react";
import { Link } from "react-router-dom";
import CustomLink from "./CustomLink";
import { ShopContext } from "../contexts/ShopContext";
import { useStateContext } from "../contexts/ContextProvider";

export const Navbar = () => {
  const { token } = useStateContext()
  const { totalItems, wishlistCount } = useContext(ShopContext)

  return (
    <>
      <div className="container-fluid bg-dark mb-30">
        <div className="row px-xl-5">
          <div className="col-lg-3 d-none d-lg-block">
            <a
              className="btn d-flex align-items-center justify-content-between bg-primary w-100"
              data-toggle="collapse"
              href="#navbar-vertical"
              style={{ height: 65, padding: "0 30px" }}
            >
              <h6 className="text-dark m-0">
                <i className="fa fa-bars mr-2" />
                Categories
              </h6>
              <i className="fa fa-angle-down text-dark" />
            </a>
            <nav
              className="collapse position-absolute navbar navbar-vertical navbar-light align-items-start p-0 bg-light"
              id="navbar-vertical"
              style={{ width: "calc(100% - 30px)", zIndex: 999 }}
            >
              <div className="navbar-nav w-100">
                <div className="nav-item dropdown dropright">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-toggle="dropdown"
                  >
                    Clothing{" "}
                    <i className="fa fa-angle-right float-right mt-1" />
                  </a>
                  <div className="dropdown-menu position-absolute rounded-0 border-0 m-0">
                    <Link
                      to={`/products/category/men's%20clothing`}
                      className="dropdown-item"
                    >
                      Men's Clothing
                    </Link>
                    <Link
                      to={`/products/category/women's%20clothing`}
                      className="dropdown-item"
                    >
                      Women's Clothing
                    </Link>
                  </div>
                </div>
                <Link
                  to={`/products/category/jewelery`}
                  className="nav-item nav-link"
                >
                  Jewelery
                </Link>
                <Link
                  to={`/products/category/electronics`}
                  className="nav-item nav-link"
                >
                  Electronics
                </Link>
              </div>
            </nav>
          </div>
          <div className="col-lg-9">
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 py-lg-0 px-0">
              <Link
                to="/"
                className="text-decoration-none d-block d-lg-none"
              >
                <span className="h1 text-uppercase text-dark bg-light px-2">
                  Go
                </span>
                <span className="h1 text-uppercase text-light bg-primary px-2 ml-n1">
                  Shop
                </span>
              </Link>
              <button
                type="button"
                className="navbar-toggler"
                data-toggle="collapse"
                data-target="#navbarCollapse"
              >
                <span className="navbar-toggler-icon" />
              </button>
              <div
                className="collapse navbar-collapse justify-content-between"
                id="navbarCollapse"
              >
                <div className="navbar-nav mr-auto py-0">
                  <CustomLink to="/">Home</CustomLink>
                  <CustomLink to="/shop">Shop</CustomLink>
                  {token && (
                    <CustomLink to="/cart">
                      Shopping Cart
                    </CustomLink>
                  )}
                  {token && (
                    <CustomLink to="/wishlist">
                      My Wishlist
                    </CustomLink>
                  )}
                  <CustomLink to="/contact">
                    Contact
                  </CustomLink>
                </div>
                {token && (
                  <div className="navbar-nav ml-auto py-0 d-none d-lg-block">
                    <i className="fas fa-heart text-primary mx-1" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      {wishlistCount > 0
                        ? wishlistCount
                        : 0}
                    </span>
                    <i className="fas fa-shopping-cart text-primary mx-1" />
                    <span
                      className="badge text-secondary border border-secondary rounded-circle"
                      style={{ paddingBottom: 2 }}
                    >
                      {totalItems > 0 ? totalItems : 0}
                    </span>
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};
