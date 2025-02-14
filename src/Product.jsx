function Product({title,description,Price,features,owner}){
    let styles={backgroundColor: Price>3000 ? "blue" : ""};
    return (
        <div style={styles}>
            <h3>{title}</h3>
            <h5>{description}</h5>
            <h5>Price : {Price} </h5>
            <h3>{Price >=1000 ? <p>Discount : 5% </p> : null}</h3>
            <p>{features.map((Element)=> <li>{Element}</li>)}</p>
            <p>{owner}</p>
        </div>
    )
}
export default Product;