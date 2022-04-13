import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui'
import { List, ListItem } from 'material-ui/List'
import { RaisedButton } from 'material-ui'


export class Confirm extends Component {

    continue = e => {
        e.preventDefault()
        this.props.nextStep()
    }

    prevStep = e => {
        e.preventDefault()
        this.props.prevStep()
    }


    render() {

        const { firstName, lastName, email, occupation, city, bio } = this.props.values;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Confirm Data" />

                    <List>
                        <ListItem
                            primaryText="First Name"
                            secondaryText={firstName}
                        />
                        <ListItem
                            primaryText="Last Name"
                            secondaryText={lastName}
                        />
                        <ListItem
                            primaryText="Email"
                            secondaryText={email}
                        />
                        <ListItem
                            primaryText="Occupation"
                            secondaryText={occupation}
                        />
                        <ListItem
                            primaryText="City"
                            secondaryText={city}
                        />
                        <ListItem
                            primaryText="Bio"
                            secondaryText={bio}
                        />
                    </List>

                    <RaisedButton
                        label="Back"
                        style={style.button}
                        onClick={this.prevStep}
                    />

                    <RaisedButton
                        label="Continue"
                        primary={true}
                        style={style.button}
                        onClick={this.continue}
                    />

                </React.Fragment>

            </MuiThemeProvider>
        )
    }

}

const style = {
    button: {
        margin: 15
    }
}

export default Confirm