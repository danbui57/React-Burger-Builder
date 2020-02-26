import React from "react";

const drawerToggle = (props) => (
    <div onClick={props.clicked} show={props.show}>
        Menu
    </div>
);

export default drawerToggle;