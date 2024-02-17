import React from 'react';
import Products from './Products';
import { Grid } from '@mui/material';

const Home = () => {
    return (
        <div>
            <div className="hero" style={{ marginBottom: '50px' }}>
                <Grid container justifyContent="center" alignItems="center" style={{ height: "100vh" }}>
                    <Grid item xs={12}>
                        <div className="card text-bg-dark" style={{ width: "100%", overflow: "hidden" }}>
                            <img src="/assets/bg.jpg" className="card-img" alt="Background" style={{ height: "100%", width: "100%", objectFit: "fill" }} />

                            <div className="card-img-overlay" style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)" }}>
                                <h5 className="card-title" style={{ textAlign: "center", color: "#fff", fontSize: "3rem" }}>NEW SEASON ARRIVALS</h5>
                                <p className="card-text">"Don't be into trends. Don't make fashion own you, but you decide what you are, what you want to express by the way you dress and the way to live." <strong>—Gianni Versace</strong></p>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </div>
            <div className="products-section" style={{ paddingTop: '150px' }}>
                <Grid container justifyContent="center">
                    <Grid item xs={12} md={8} lg={6}>
                        <Products />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
};

export default Home;
