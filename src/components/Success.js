import React, { Component } from "react";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from "material-ui";

export class Success extends Component {

    render() {
        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Success" />

                    <div>
                        <h1>Congrats your data has been sended</h1>
                    </div>

                </React.Fragment>
            </MuiThemeProvider>
        )
    }

}

export default Success;