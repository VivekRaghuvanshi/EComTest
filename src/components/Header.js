import React from 'react'
import "./Header.css"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
    return (
        <>
        <div className="header">
            <div>
                <img
                    style={{ width: 120, heigth: 40, marginTop: 10 }}
                    className="image"
                    src="https://links.papareact.com/f90"
                />
            </div>

            {/* Search bar */}
            <div className="headerInputContainer">
                <input type="headerInput" placeholder="Search Amazon" />
                <SearchOutlinedIcon style={{color:"white",marginleft:4,marginTop:2}} />
            </div>

            <div>
                <h4 className="headerText">Hello Vivek</h4>
            </div>

            <div>
                <h4 className="headerText">Account</h4>
            </div>

            <div>
                <h4 className="headerText">Orders</h4>
            </div>

            <div>
                <h4 className="headerText">India</h4>
            </div>

            <div style={{ position: "relative" }}>
                <ShoppingCartOutlinedIcon style={{ color: "white" }} />
                    <span style={{ position: "absolute", left: 14, rigth: 14, backgroundColor: "white", width: 14, heigth: 14, heigth: 14, borderRadius: 7,fontSize:12, fontWeight: 400, textAlign: "center", }} />
      </div>
        </div>
        <div className= "headerBottom">
        <MenuIcon style={{color:"white",paddingTop:6}}/>
        <p className="headerBottomText">Mens</p>
        <p className="headerBottomText">Womens</p>
        <p className="headerBottomText">Kids</p>
        <p className="headerBottomText">Baby</p>
        <p className="headerBottomText">Health</p>
        <p className="headerBottomText">Kitchen</p>
        <p className="headerBottomText">Mobile</p>
        <p className="headerBottomText">Appliances</p>
        <p className="headerBottomText">Great Indian Festival</p>
        <p className="headerBottomText">Curated Offers</p>
      </div>

      </>
    )
}

export default Header