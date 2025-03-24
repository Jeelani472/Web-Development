import './Product.css';
import Price from "./price";
function Product({ title, idx }) {
    let oldPrice = ["12,000", "5,600", "34,000", "12400"];
    let newPrice = ["13,000", "7,000", "35,000", "11,000"];
    let description = [["8,000 DPI", "5 Programmable Buttons"],
    ["intuitive surface", "designed for ipad Pro"],
    ["designed for ipad Pro", "intuitive surface"],
    ["wireless", "optical orientation"]];
    return (
        <div className="Product">
            <h4>{title}</h4>
            <p>{description[idx][0]}</p>
            <p>{description[idx][1]}</p>
            <Price oldPrice={oldPrice[idx]} newPrice={newPrice[idx]} />
        </div>
    )
}
export default Product;