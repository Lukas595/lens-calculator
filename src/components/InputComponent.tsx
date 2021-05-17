import { Box, Button, Card, CardContent, Grid, InputAdornment, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";
import InputFormComponent from "./InputFormComponent";

type InputProps = {
    onClick: (projectionSurface: ProjectionSurface) => void,
    onReset: () => void
}

type InpusStates = {
    width: string,
    height: string,
    distance: string,
    errorMsg: {}
}

export type ProjectionSurface = {
    width: number,
    height: number,
    distance: number
}

class InputComponent extends Component <InputProps, InpusStates> {

    state: InpusStates = {
        width: '',
        height: '',
        distance: '',
        errorMsg: {}
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;

        this.setState({[target.name]: target.value} as Pick<InpusStates, any>);
    }

    handleKeyInput = (event: KeyboardEvent) => {
        if (event.key === 'Enter') {
            this.send();
        }
    }

    reset = () => {
        this.setState({width: ''});
        this.setState({height: ''});
        this.setState({distance: ''});

        this.setState({
            errorMsg: {}
        });

        this.props.onReset();
    }

    send = () => {
        
        this.setState({
            errorMsg: {}
        });

        let validationError = false;
        //validate width
        if (!this.isNumeric(this.state.width)) {
            validationError = true;
            this.setState({
                errorMsg: { width: 'Numbers only'}
            });
        }

        if (this.state.width.length === 0) {
            validationError = true;
            this.setState((prev) => ({
                ...prev,
                errorMsg: { ...prev.errorMsg, width: 'Width required'}
            }));
        }

        //validate height
        if (!this.isNumeric(this.state.height)) {
            validationError = true;
            this.setState((prev) => ({
                ...prev,
                errorMsg: { ...prev.errorMsg, height: 'Numbers only'}
            }));
        }

        if (this.state.height.length === 0) {
            validationError = true;
            this.setState((prev) => ({
                ...prev,
                errorMsg: { ...prev.errorMsg, height: 'Height required'}
            }));
        }

        //distance height
        if (!this.isNumeric(this.state.distance)) {
            validationError = true;
            this.setState((prev) => ({
                ...prev,
                errorMsg: { ...prev.errorMsg, distance: 'Numbers only'}
            }));
        }

        if (this.state.distance.length === 0) {
            validationError = true;
            this.setState((prev) => ({
                ...prev,
                errorMsg: { ...prev.errorMsg, distance: 'Distance required'}
            }));
        }

        if (!validationError) {

            let projectionSurface: ProjectionSurface = {
                width: parseFloat(this.state.width),
                height: parseFloat(this.state.height),
                distance: parseFloat(this.state.distance)
            }
    
            this.props.onClick(projectionSurface);
        } else {
            //do smth fancy
        }

    }

    isNumeric(n: any): boolean {
        return !isNaN(parseFloat(n)) && isFinite(n);
    }

    render() {
        return (    
            <Box mb={4}>
                <Card>
                    <CardContent>
                        <Box mb={4}>
                            <Typography variant="h4">Projection Surface</Typography>
                        </Box>
                    
                        <InputFormComponent 
                        {...this.state}
                        handleInputChange={this.handleInputChange}
                        handleKeyboardInput={this.handleKeyInput}
                        />

                        <Box>
                            <Grid container justify="flex-end" spacing={4}>
                                <Grid item>
                                    <Button variant="contained" color="secondary" onClick={this.reset}>Reset</Button>
                                </Grid>
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={this.send}>Calculate</Button>
                                </Grid>
                            </Grid>
                        </Box>
                    
                    </CardContent>
                </Card>
            </Box>
        );
    };

}

export default InputComponent;
