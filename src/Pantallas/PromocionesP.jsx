import TopBar from "../Layout/TopBar";
import Promocion from "../Mains/Promocion";
import { TotalProvider } from '../Layout/Counter'

const PantallaPromocion = () => {

    return(
        <div style={{display:"flex", flexDirection:"column"}}>
            <TotalProvider>
                <TopBar />
                <Promocion />
            </TotalProvider>
        </div>
    );
}

export default PantallaPromocion;