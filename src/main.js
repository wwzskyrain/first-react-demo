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
    </div>
    , document.getElementById("myContainer"));