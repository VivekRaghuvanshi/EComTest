import React from 'react';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container">
                    <Grid container alignItems="center" justifyContent="space-between">
                        <Grid item>
                            <NavLink className="navbar-brand fw-bold fs-4" to="/">The Shoppers Street</NavLink>
                        </Grid>
                        <Grid item>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" exact to="/">Home</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/products">Products</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <NavLink className="nav-link dropdown-toggle" to="/about" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" activeClassName="active" to="/Trending">Trending</NavLink>
                                    </li>
                                </ul>
                                <form className="d-flex">
                                    <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                                    <button className="btn btn-outline-success me-2" type="submit">Search</button>
                                </form>
                            </div>
                        </Grid>
                        <Grid item>
                            <Grid container spacing={2} alignItems="center">
                                <Grid item>
                                    <AccountCircleIcon style={{ color: "black" }} />
                                </Grid>
                                <Grid item>
                                    <FavoriteBorderIcon style={{ color: "black" }} />
                                </Grid>
                                <Grid item>
                                    <div style={{ position: "relative" }}>
                                        <ShoppingCartOutlinedIcon style={{ color: "black" }} />
                                        <span style={{ position: "absolute", left: 14, right: 14, backgroundColor: "white", width: 14, height: 14, borderRadius: 7, fontSize: 12, fontWeight: 400, textAlign: "center" }} />
                                    </div>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
