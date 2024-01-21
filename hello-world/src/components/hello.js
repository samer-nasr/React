import React from "react";

const Hello = () => {
    //Using jsx//
    return (
        <div className='myClass'>
            <h1>Hello Samer</h1>
        </div>
    )
    
    //Without Using jsx// 
    // return React.createElement(
    //     'div',
    //     {id : 'hello' , className : 'myClass'} ,
    //     React.createElement('h1',null,'Hello Samer')
    // )
}

export default Hello