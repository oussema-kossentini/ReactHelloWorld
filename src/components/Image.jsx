import product from "../product.jsx"
import { Image as BootstrapImage } from "react-bootstrap"

const Image = () => {
    return <BootstrapImage src={product.imageUrl} alt={product.name} fluid />
   // return <img src={product.imageUrl} alt={product.name} style={{ width: '100%' }} />;
}

export default Image

