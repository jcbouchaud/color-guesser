import React from "react";


type OptionProps = {
    color: string
}


const Option = ({ color }: OptionProps) => {
    return <div>{color}</div>
}

export default Option