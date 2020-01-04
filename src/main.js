import React from 'react'
import ReactDom from 'react-dom'

console.log("to update.");

const myDiv = React.createElement("div", null, "div created by react.");

ReactDom.render(myDiv, document.getElementById('app'));

ReactDom.render(
    <div title="myTitle">
    <h4>
        昨日如梦!
    </h4>
    <br></br>
    <div id = "poem">
        小楼昨夜又东风，故国不堪回首明月中。
    </div>
    </div>
    , document.getElementById("myContainer"));