import React from "react";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import Battery20Icon from '@mui/icons-material/Battery20';
import { Tooltip } from "@mui/material";
import { IconButton } from "@mui/material";

// import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


const Hello = (props) => {
    return (
        <>
            <div className="text-center text-2xl py-3"> I'm Hello Page. this is only for testing and initialization.</div>

            {/* <div><AddCircleOutlineIcon /></div> */}

            <Button variant="text">Text</Button>
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">Outlined</Button>
            <DeleteIcon />
            <Battery20Icon />

            

            <h1>hello {props.name}</h1>
        </>
    )
}
export default Hello;