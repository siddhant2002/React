// const heading1 = React.createElement("h1", {
//     id: "title",
// }, "Heading 1");

import React from 'react';
import ReactDOM from 'react-dom/client';

// const heading1 = React.createElement("h1", {}, "Heading 1");

// const heading2 = React.createElement("h2", {
//     id: "title",
// }, "Heading 2");

// const heading2 = React.createElement("h2", {}, "Heading 2");

// const container = React.createElement("div", {
//     id: "container",
// }, [heading1, heading2]);


// Now let's use functional components

const HeadingComponent = () =>
{
    return (
        <div>
            <h1>This is h1 tag</h1>
            <h2>This is h2 tag</h2>
        </div>
    )
}

const heading = (
    <div>
        <h1>Ye h h1 tag</h1>
        <h2>Isko h2 tag bolte hein</h2>
    </div>
);

const  root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeadingComponent/>);
root.render(heading);