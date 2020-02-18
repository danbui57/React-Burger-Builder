import React from "react";
import classes from "./BuildControls.module.css"
import BuildControls from "./BuildControl/BuildControl"

const controls = [
    { label: "Salad", type: "salad" },
    { label: "Bacon", type: "bacon" },
    { label: "Cheese", type: "cheese" },
    { label: "Meat", type: "meat" }
]

const buildControls = props => (
    <div className={classes.BuildControls}>
        {controls.map(ctrl => (
            <BuildControls key={ctrl.label} label={ctrl.label}/>
        ))}
    </div>
)

export default buildControls;