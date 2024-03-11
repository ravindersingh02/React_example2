import React from "react";

function Sum(a,b){
    return(
        <>
        {a+b}
        </>
    )
};
function Division(a,b){
    return(
        <>
        {(a/b).toFixed(2)};
        </>
    )
};

export default Sum;
export {Division};