import React from "react";
export default function Hello(props){
    if(props.language === "French") {
        return "Bonjour";
    } else {
         if (props.language === "Spanish") {
            return "Hola" 

            }else {
                return "Hello";
            }
         }
    }
