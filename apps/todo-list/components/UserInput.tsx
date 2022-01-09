import React from "react";

export default class UserInput extends React.Component<{ addTask }> {
    state: { task: string }
    constructor(props) {
        super(props);
        this.state = { task: "" }
    }
    render(): React.ReactNode {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                // alert(`Task Added: ${this.myRef.current.value}`)
                this.props.addTask(this.state.task);
                this.setState({ task: '' });
            }}>
                <input value={this.state.task} onInput={(e) => {
                    const target = e.target as HTMLInputElement
                    this.setState({ task: target.value });
                }} type="text" />
                <button>Add Task</button>
            </form>
        )
    }
}

