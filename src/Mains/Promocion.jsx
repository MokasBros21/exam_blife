import BannerMain from '../assets/banner_main.png'
import Promo from '../assets/Promo_image.png'
import Producto from '../assets/Product_1.png'
import ProductoZoom from '../assets/Zoom_1.png'
import Producto_2 from '../assets//Image_3.webp'

import StarIcon from '@mui/icons-material/Star';
import { Box, Card, Rating, Button, IconButton } from '@mui/material';
import { Circle, FacebookRounded } from '@mui/icons-material';
import FavoriteBorderRoundedIcon from '@mui/icons-material/FavoriteBorderRounded';
import { useState } from 'react';

const Promocion = () => {
    const cambiarfoto = (dot) => {
        switch (dot) {
            case 1:
                return Producto
        
            case 2:
                return ProductoZoom

            case 3:
                return Producto_2

            default:
                return Producto
        }
    }
    
    const styleLabel = {
        fontWeight:"bold",
        fontSize:"16px",
        fontFamily:"'Kumbh Sans', sans-serif"
    }

    const styleLabelButton = {
        fontWeight:"bold",
        fontSize:"12px",
        fontFamily:"'Kumbh Sans', sans-serif",
        color:"black",
        cursor:"pointer"
    }

    const styleLabelChip = {
        fontWeight:"bold",
        fontSize:"12px",
        fontFamily:"'Kumbh Sans', sans-serif",
        color:"black",
    }

    const styleLabelPequeño = {
        fontSize:"10px",
        fontFamily:"'Kumbh Sans', sans-serif"
    }

    const CardCompleta = ({index}) => {
        const [opcionfoto, setopcionfoto] = useState(1);

        return (
            <div style={{width:"21%"}}>
            <Box sx={{borderRadius:"24px", border:"0.1px solid #E1E1E1", position:"relative", zIndex:1, backgroundColor:"#FFFFFF"}}>
                <div style={{display:"flex", justifyContent:"center", paddingTop:10, marginBottom:-60}}>
                    <img src={cambiarfoto(opcionfoto)} alt='Producto' width={"96%"} style={{borderRadius:"10px"}}/>
                </div>

                <Box sx={{position:"relative", left:200, border:"1px solid #E1E1E1", width:"52px", p:0.5,
                backgroundColor:"#FFFFFF", display:"flex", justifyContent:"space-evenly", borderRadius:"20px",
                alignItems:"center", bottom:155}}>
                    <FavoriteBorderRoundedIcon style={{color:"#FF8E8E", fontSize:"15px"}} />
                    <label style={styleLabelChip}>22</label>
                </Box>
                
                <Box sx={{position:"relative", left:207, border:"1px solid #E1E1E1", width:"48px", p:0.4,
                backgroundColor:"#FF8E8E", display:"flex", justifyContent:"space-evenly", borderRadius:"20px",
                alignItems:"center", bottom:150}}>
                    <label style={{...styleLabelChip, color:"white"}}>-30%</label>
                </Box>

                <Box sx={{position:"relative", left:79, border:"1px solid #E1E1E1", width:"80px", px:1.5, py:0.7,
                backgroundColor:"#FFFFFF", display:"flex", justifyContent:"space-between", borderRadius:"20px",
                alignItems:"center", bottom:25}}>
                    <IconButton onClick={() => setopcionfoto(1)} size='small' disabled={opcionfoto === 1}>
                        <Circle style={{fontSize:"9px", color:opcionfoto === 1 ? "black" : "#D7DBDD"}}/>
                    </IconButton>
                    <IconButton onClick={() => setopcionfoto(2)} size='small' disabled={opcionfoto === 2}>
                        <Circle style={{fontSize:"9px", color:opcionfoto === 2 ? "black" : "#D7DBDD"}}/>
                    </IconButton>
                    <IconButton onClick={() => setopcionfoto(3)} size='small' disabled={opcionfoto === 3}>
                        <Circle style={{fontSize:"9px", color:opcionfoto === 3 ? "black" : "#D7DBDD"}}/>
                    </IconButton>
                </Box>

                <Box sx={{display:"flex", justifyContent:"space-between", px:"7%"}}>
                    <label style={styleLabel}>Citrate Mag</label>
                    <label style={styleLabel}>$134.00</label>
                </Box>

                <Box sx={{display:"flex", justifyContent:"space-between", px:"7%", mt:0.3}}>
                    <label style={styleLabelPequeño}>240 Cápsulas | 800 Mg</label>
                    <label style={{...styleLabelPequeño, textDecoration:"line-through"}}>$273.00</label>
                </Box>

                <Rating value={3.5} precision={0.5} readOnly sx={{px:"7%", mt:1, fontSize:17}} 
                emptyIcon={<StarIcon style={{ opacity: 0.5 }} fontSize="inherit" />}/>
            </Box>

            <Box sx={{borderRadius:"24px", border:"0.1px solid #E1E1E1", mt:"-22%", pb:2,
            position:"relative", zIndex:0, backgroundColor:"#F9F9F9"}}>
                <Box sx={{pt:"25%", px:"7%", display:"flex", justifyContent:"space-between"}}>
                    <div>
                        <label style={styleLabelPequeño}>COMPARTE</label>
                        <br/>
                        <div style={{display:"flex"}}>
                            <FacebookRounded fontSize='11%' sx={{mr:0.9}}/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 512">
                            <path d="M459.4 151.7c.3 4.5 .3 9.1 .3 13.6 0 138.7-105.6 298.6-298.6 298.6-59.5 0-114.7-17.2-161.1-47.1 8.4 1 16.6 1.3 25.3 1.3 49.1 0 94.2-16.6 130.3-44.8-46.1-1-84.8-31.2-98.1-72.8 6.5 1 13 1.6 19.8 1.6 9.4 0 18.8-1.3 27.6-3.6-48.1-9.7-84.1-52-84.1-103v-1.3c14 7.8 30.2 12.7 47.4 13.3-28.3-18.8-46.8-51-46.8-87.4 0-19.5 5.2-37.4 14.3-53 51.7 63.7 129.3 105.3 216.4 109.8-1.6-7.8-2.6-15.9-2.6-24 0-57.8 46.8-104.9 104.9-104.9 30.2 0 57.5 12.7 76.7 33.1 23.7-4.5 46.5-13.3 66.6-25.3-7.8 24.4-24.4 44.8-46.1 57.8 21.1-2.3 41.6-8.1 60.4-16.2-14.3 20.8-32.2 39.3-52.6 54.3z"/></svg>
                            <div style={{marginRight:5}}/>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 512">
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/></svg>
                        </div>
                    </div>
                    <Button variant='outlined' sx={{mt:1, textTransform:'none', borderRadius:"20px",
                    backgroundColor:"#FFFFFF", border:"1px solid #EDA836"}}
                    >
                        <label style={styleLabelButton}>Agregar</label></Button>
                </Box>
            </Box>
        </div>
        )
    }

    return (
        <div>
            <Box>
                <img src={BannerMain} alt='Image Banner' width={"100%"} height={"100%"} />
                <img src={Promo} alt='Image Promo' width={"32%"}
                    style={{position:"absolute", right:"9%", top:"15%"}}
                />
            </Box>

            <Box sx={{mt:5, p:8, display:"flex", justifyContent:"space-between"}}>
                <CardCompleta />
                <CardCompleta />
                <CardCompleta />
                <CardCompleta />
            </Box>
        </div>
    );
}

export default Promocion;