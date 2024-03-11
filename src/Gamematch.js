import React from "react";

const Game = (props) =>{
    let x = props.x;
    let y = props.y;
    let z = props.z;

    if(x===y && y===z){
        return <h3>All Smiles</h3>
    }else{
        return <h3>Gamematch Failed</h3>
    }

}


const Gamematch = () =>{
 return(
    <>
        <Game x="smile" y="smile" z="smile" />
        <Game x="smile" y="smile" z="smile1"/>
        <Game x="smile" y="smile" z="smile" />
    </>
 )
}

export default Gamematch;