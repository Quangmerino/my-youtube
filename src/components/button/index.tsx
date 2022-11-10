import React, { ReactNode } from "react";

type Props = {
    onClick?: any,
    name?: string | undefined,
    className?: string | undefined,
    icon?: ReactNode | undefined,
}

function ButtonCustom({onClick, name, className, icon}:Props){
    let classDefault = "button";
    if(className != "") classDefault += " " + className
    return(
        <button className={classDefault} onClick={onClick}>{name} {icon}</button>
    )
}

export default ButtonCustom;