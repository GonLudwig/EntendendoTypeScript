import React, {Component} from "react"
import logRender from "../decorators/logRender"
import ContadorValor from "./ContadorValor"

interface ContadorProps {
    valorInicial?: number
}

interface ContadorState {
    valor: number
}

@logRender
export default class Contador extends Component<ContadorProps, ContadorState> {
    public state: ContadorState = {
        valor: this.props.valorInicial || 0
    }

    private setValor = (delta: number) => {
        this.setState({
            valor: this.state.valor + delta
        })
    }

    render(): React.ReactNode {
        return (
            <div>
                <ContadorValor contador={this.state.valor}/>
                <button onClick={() => this.setValor(10)}>+</button>
                <button onClick={() => this.setValor(-10)}>-</button>
            </div>
        )
    }
}