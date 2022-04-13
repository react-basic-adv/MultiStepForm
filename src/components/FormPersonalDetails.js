import React, { Component } from 'react'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar } from 'material-ui'
import TextField from 'material-ui/TextField'
import { RaisedButton } from 'material-ui'

export class FormPersonalDetails extends Component {


    continue = e => {
        e.preventDefault()
        this.props.nextStep();
    }

    prevStep = e => {
        e.preventDefault()
        this.props.prevStep()
    }

    render() {

        const { values, handleChange } = this.props;

        return (
            <MuiThemeProvider>
                <React.Fragment>
                    <AppBar title="Enter user details" />

                    <TextField
                        hintText="Enter your occupation"
                        floatingLabelText="Occupation"
                        onChange={handleChange('occupation')}
                        defaultValue={values.occupation}
                    />
                    <br />
                    <TextField
                        hintText="Enter your city"
                        floatingLabelText="City"
                        onChange={handleChange('city')}
                        defaultValue={values.city}
                    />
                    <br />
                    <TextField
                        hintText="Enter your bio"
                        floatingLabelText="Bio"
                        onChange={handleChange('bio')}
                        defaultValue={values.bio}
                    />
                    <br />

                    <RaisedButton
                        label="Back"
                        style={style.button}
                        onClick={this.prevStep}

                    />

                    <RaisedButton
                        label="continue"
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

export default FormPersonalDetails
