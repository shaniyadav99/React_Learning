import Product from "./Product.jsx";
import MsgBox from "./MsgBox.jsx";
import AmazonClone from "./AmazonClone.jsx";
import Paragraph from "./paragraph.jsx";
import "./AmazonClone.css";
function ProductTab(){
    let features=["hi-tech","durable","fast"];
    let obj={a:"Shani Yadav",
        b:"Vipin Yadav",
        c:"Abhay Yadav",
        d:"Ankit Yadav"
    }
   
    return <>
        <Paragraph/>
        <div className="main">
    <AmazonClone title="Logitech MS Master 3S" features={["8000 DPI","5 Programmble Buttons"]} Price={8999}/>
    <AmazonClone title="Apple Pencil 2nd Gen" features={["Intiutive Touch Surface","Designed For Ipad pro"]}Price={9199}/>
    <AmazonClone title="Zebronics Zeb-Transformer" features={["Intiutive Touch Surface","Designed For Ipad pro"]}Price={899}/>
    <AmazonClone title="Portonics Toad 23 Wireless Mouse" features={["Wireless Mouse 2.4 GHz","Optical orientation"]}Price={278}/>
    </div>
    </>
}
export default ProductTab;