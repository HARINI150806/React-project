import React from "react";
const Dc =()=>
{
    return(
        <div style={{display:"flex",
                    padding:"100px",
                    flexDirection:"column",
                    alignItems:"center",
                    justifyContent:"center",
                    backgroundColor:"lightgrey"
        }}>
            <h1>Smile Component</h1>
            <p>It is a functional component</p>
            <img src="/smile_image.jpeg" style={{width:"200px",
                height:"200px"
            }}></img>
         </div>
    );
};
export default Dc;
