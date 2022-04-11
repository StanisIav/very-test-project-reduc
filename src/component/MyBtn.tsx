import { Children, FC } from "react"

interface myBt{
    children: any
}

export const MyBtn = ({...props}) => {
    return( 
        <button {...props}>Кнопка</button>
        );
}

