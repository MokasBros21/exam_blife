import Logo from '../assets/Imagen_Logo.png'

import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

import { Box, Badge, Chip } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import React, { useContext } from 'react';
import { TotalContext } from './Counter';

const TopBar = () => {

    const { total } = useContext(TotalContext);
    const [menuselect, setmenuselect] = useState("Promociones")

    const Navigate = useNavigate()

    const onClickMenuItem = (event) => {
        setmenuselect(event.target.id)
    }

    const styleLabel = {
        fontWeight:"bold",
        fontSize:"13px",
        fontFamily:"'Kumbh Sans', sans-serif",
        cursor:"pointer"
    }

    return(
        <Box sx={{display:"flex", justifyContent:"space-between", alignItems:"center", px:"1%"}}>
            <img src={Logo} alt='Logo' height="50vh"/>

            <div style={{display:"flex", justifyContent:"space-evenly", width:"25%"}}>
                <Box sx={{backgroundColor: menuselect === "Productos" ? "#EDA836" : "transparent", 
                    borderRadius:"22px", px:1.5, display:"flex", justifyContent:"center"}}>
                    <label id='Productos' style={styleLabel} onClick={(e) => onClickMenuItem(e)}>
                        Productos</label>
                </Box>
                <Box sx={{backgroundColor: menuselect === "Promociones" ? "#EDA836" : "transparent", 
                    borderRadius:"22px", px:1.5, display:"flex", justifyContent:"center"}}>
                    <label id='Promociones' style={styleLabel} onClick={(e) => onClickMenuItem(e)}>
                        Promociones</label>
                </Box>
                <Box sx={{backgroundColor: menuselect === "Nosotros" ? "#EDA836" : "transparent", 
                    borderRadius:"22px", px:1.5, display:"flex", justifyContent:"center"}}>
                    <label id='Nosotros' style={styleLabel} onClick={(e) => onClickMenuItem(e)}>
                        Nosotros</label>
                </Box>
            </div>

            <div style={{display:"flex", justifyContent:"space-evenly", width:"10%"}}>
                <SearchRoundedIcon />
                <AccountCircleOutlinedIcon />
                <Badge badgeContent={total} color="error" sx={{ fontSize:"small" }}>
                    <ShoppingBagOutlinedIcon />
                </Badge>
            </div>
        </Box>
    );
}

export default TopBar;