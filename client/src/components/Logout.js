import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../App";

function Logout() {
    const {state, dispatch} = useContext(UserContext);

    //promises

    const navigate = useNavigate();

    useEffect(() => {
        fetch("/logout", {
            method: "GET",
            headers: {
              Accept: "application/json",
              "Content-Type": "application.json"
            },
            credentials: "include"
        }).then((res) => {
            dispatch({type:"USER", payload:false});
            navigate("/login", { replace: true });
            if(!res.status === 200) {
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err) => {
            console.log(err);
        });
    }, [navigate]);

    return (
      <>
        <h1>Logout page</h1>
      </>
    );
  }
  
  export default Logout;
  