import React from "react";

export default class UserInput extends React.Component<{ addTask }> {
    myRef: React.RefObject<HTMLInputElement>
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }
    render(): React.ReactNode {
        return (
            <form onSubmit={(e) => {
                e.preventDefault();
                // alert(`Task Added: ${this.myRef.current.value}`)
                this.props.addTask(this.myRef.current.value)
            }}>
                <input ref={this.myRef} type="text" />
                <button>Add Task</button>
            </form>
        )
    }
}

