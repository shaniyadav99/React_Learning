function AmazonClone({title,features,Price}){
    return <div>
        <h2>{title}</h2>
        <p>{features.map((Element)=> <li>{Element}</li>)}</p>
        <h3>{Price}</h3>
    </div>
}
export default AmazonClone;