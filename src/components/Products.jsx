import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { NavLink } from 'react-router-dom';
import { Grid } from '@mui/material';

const Products = () => {
    const [data, setData] = useState([]);
    const [filter, setFilter] = useState([]);
    const [loading, setLoading] = useState(false);
    let componentMounted = true;

    useEffect(() => {
        const getProducts = async () => {
            setLoading(true);
            const response = await fetch("https://fakestoreapi.com/products");
            if (componentMounted) {
                setData(await response.clone().json());
                setFilter(await response.json());
                setLoading(false);
            }
        };

        getProducts();

        return () => {
            componentMounted = false;
        };
    }, []);

    const filterProduct = (cat) => {
        const updatedList = data.filter((x) => x.category === cat);
        setFilter(updatedList);
    };

    const Loading = () => {
        return (
            <>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
                <div className="col-md-3">
                    <Skeleton height={350} />
                </div>
            </>
        );
    };

    const ShowProducts = () => {
        return (
            <Grid container spacing={3}>
                {filter.map((product) => (
                    <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
                        <div className="card h-100 text-center p-4">
                            <img src={product.image} className="card-img-top" alt={product.setFilter} height="250px" />
                            <div className="card-body">
                                <h5 className="card-title mb-0">{product.title.substring(0, 12)}...</h5>
                                <p className="card-text lead fw-bold">
                                    ${product.price}
                                </p>
                                <NavLink to={`/products/${product.id}`} className="btn btn-outline-dark" activeClassName="">
                                    Buy Now
                                </NavLink>
                            </div>
                        </div>
                    </Grid>
                ))}
            </Grid>
        );
    };

    return (
        <div>
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-12 mb-5">
                        <h1 className="display-6 fw-bolder text-center">Latest Products</h1>
                        <hr />
                    </div>
                </div>
                <div className="row justify-content-center">
                    {loading ? <Loading /> : <ShowProducts />}
                </div>
            </div>
        </div>
    );
};

export default Products;
