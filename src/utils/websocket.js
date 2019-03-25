let websocket = null;
if("WebSocket" in window){
    websocket = new WebSocket("ws://127.0.0.1");
}else{
    console.log("web不支持websoket")
}

websocket.onopen = function(evt){
    //
}

//定义一个发送mes的函数
function sendMsg(data){
    websocket.send(data);
}

//接收数据
websocket.onmessage = function(msg){
    //接收到数据时...
    console.log(msg.data)
}

//处理连接异常
websocket.onerror = function(err){
    console.log(err)
}

//关闭websocket连接
function closeSocket(){
    websocket.close();
}

//socket关闭之后调用   maybe主动关闭或者是服务器端关闭了
websocket.onclose = function(evt){
    console.log(evt);
}

