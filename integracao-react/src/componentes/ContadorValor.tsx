import React from 'react'

interface ContadorValorProps {
    contador: number
}

export default (props: ContadorValorProps) =>
        <p>{props.contador}</p>