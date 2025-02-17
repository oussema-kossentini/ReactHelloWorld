import product from "../product.jsx"

const Price = () => {
    return <p className="text-primary font-weight-bold">${product.price.toFixed(2)}</p>
}

export default Price

