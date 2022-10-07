import React from "react";
import { ReactDOM } from "react";
import userslist from "./userslist";

it("renders without crashing",()=>{
    const div=document.createElement('div');
    ReactDOM.render(<userslist />,div);
    ReactDOM.unmountComponentAtNode(div);
}); 