import { render } from "@testing-library/react"
import React, { Component } from "react"

import "./Folder.css"

class Folder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display: true
        }
    }

    displayList = () => {
        this.setState({
            display : !this.state.display
        })
    }
    render() {
        return (
            <div id="folderContaianer" >
                <button id = "toggle"onClick={this.displayList}>Toggle</button>
                <div id="folder">
                    <h1>Folder</h1>
                    {this.state.display && <div id="files">
                        <ul>
                            <li>File1</li>
                            <li>File3</li>
                            <li>File2</li>
                        </ul>
                    </div>}
                </div>
            </div >
        )
    }
}

export default Folder;