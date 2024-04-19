import TopBar from "../Layout/TopBar";
import Promocion from "../Mains/Promocion";


const PantallaPromocion = () => {

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <TopBar />
            <Promocion />
        </div>
    );
}

export default PantallaPromocion;