import React, { Component } from 'react';
import "./Form.css";

class Form extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false,
            firstName: 'John',
            lastName: 'Smith',
            storedFirst: '',
            storedLast: '',
            formFirst: '',
            formLast: ''
        }
    }
    display = () => {
        if (this.state.display === false) {
            this.setState({
                display: true,
                storedFirst: this.state.firstName,
                storedLast: this.state.lastName
            })
        }

    }
    cancel = () => {
        this.state.display = false;
        this.setState({
            firstName: this.state.storedFirst,
            lastName: this.state.storedLast,
            formFirst: " ",
            formLast: " "
        })
    }
    handleChange = (event) => {
        const target = event.target;
        const name = target.name;
        const value = target.value;
        this.setState({
            [name]: value
        })
    }

    save = event => {
        event.preventDefault();
        if (this.state.formFirst === "") {
            this.setState({
                lastName: this.state.formLast
            });
        }
        else if (this.state.formLast === "") {
            this.setState({
                firstName: this.state.formFirst,
            });
        }
        else {
            this.setState({
                firstName: this.state.formFirst,
                lastName: this.state.formLast
            });
        }
    }


    render() {
        return (
            <div id = "container">
                <button id="edit" onClick={this.display}>Edit</button>
                <h1>{this.state.firstName} {this.state.lastName}</h1>
                <form onSubmit={this.save}>
                    {this.state.display && <label id="form-last">
                        First-Name: <br />
                        <input
                            name="formFirst"
                            type="text"
                            defaultValue={this.state.firstName}
                            onChange={e => this.handleChange(e)} />
                    </label>}
                    <br />
                    {this.state.display && <label id="form-last">
                        Last Name : <br />
                        <input
                            name="formLast"
                            type="text"
                            defaultValue={this.state.lastName}
                            onChange={e => this.handleChange(e)} />
                    </label>}
                    <br />
                    {this.state.display && <React.Fragment>
                        <button id="save">Save</button>
                        <button id="cancel" onClick={this.cancel}>Cancel</button>
                    </React.Fragment>}
                </form>

            </div>
        );
    }
}

export default Form;