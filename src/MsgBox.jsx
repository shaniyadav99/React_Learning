function MsgBox({UserName,TextColor}){
    let styles={color:TextColor}
    return (
        <div style={styles}>
            <h1>Hello {UserName}</h1>
        </div>
    )
}
export default MsgBox;