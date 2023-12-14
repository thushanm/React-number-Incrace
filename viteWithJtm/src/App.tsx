import React from "react";
import "./App.css";

class App extends React.Component<{}, { count: number }> {
    state = { count: 0 };

    handleIncrement = () => {
        this.setState({ count: this.state.count + 1 });
    };

    handleDecrement = () => {
        this.setState({ count: Math.max(0, this.state.count - 1) });
    };

    render() {
        return (

            <div>
                <h1>Hello React</h1>
                <button onClick={this.handleIncrement}>+</button>
                <div>{this.state.count}</div>
                <button onClick={this.handleDecrement}>-</button>
            </div>
        );
    }
}

export default App;