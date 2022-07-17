export default function Item({text,remove,update}){
    const myComponentStyle = {
        color:'black',
        backgroundColor: '#11111111',
        boxShadow: "0 0 3px 2px #cec7c759",
        alignItems: "center",
        margin:3
     }

     const val = {
        alignItems:"center"
     }

    return(
    <div className="container" style={myComponentStyle}>
        <div className="row align-items-center">
        <div className="col-sm-4 col-md-3 offset-sm-2" style={val}>
            <p>{text}</p>
        </div>
        <div className="col-1 col-md-1">
            <button className="btn btn-primary" onClick={update}>update</button>
        </div>
        <div className="col-1 offset-sm-1 col-md-1">
            <button className="btn btn-danger" onClick={remove}>delete</button>
        </div>
        </div>
    </div>
    );
}