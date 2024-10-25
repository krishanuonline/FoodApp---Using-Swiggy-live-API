import React from "react";
import ReactDOM from "react-dom/client";

// const parent = React.createElement("div",{id:"parent"},[
//     React.createElement("div",{id:"child"},[
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag"),

//     ]),
//     React.createElement("div",{id:"child2"},[
//         React.createElement("h1",{},"I'm an h1 tag"),
//         React.createElement("h2",{},"I'm an h2 tag"),

//     ]),
// ]);

// console.log(parent) //object

const heading = (
    <h1 className="head">Namaste React JSX</h1>
);


//React functional component

const Title = ()=>(
    <h1>Title component</h1>
)


// const HeadingComponent = ()=>{
//     return <h1>Namaste React functional Component</h1>
// };

const HeadingComponent = ()=>(
    <div className="container">
        {/* {Title()}  by this way we can also call component  cause at the end it's a javascript function */}
        <Title/>
        <h1>Namaste React functional Component</h1>
    </div>

);



const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(parent);

//to render component
root.render(<HeadingComponent/>);