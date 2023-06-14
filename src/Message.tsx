function Message(){
    var name = "";
    if (name)
        return <h1>Helow {name}</h1>;
    else
        return <h1>Hellow world</h1>;

}

export default Message;