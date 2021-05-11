import { Box, Button, Card, CardContent, FormControl, FormHelperText, Grid, Input, InputAdornment, InputLabel, TextField, Typography } from "@material-ui/core";
import React, { Component } from "react";

type InputProps = {
    onClick: (projectionSurface: ProjectionSurface) => void,
    onReset: () => void
}

type InpusStates = {
    width: string,
    height: string,
    distance: string
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
        distance: ''
    }

    handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const target = event.target;

        this.setState({[target.name]: target.value} as Pick<InpusStates, any>);
    }

    reset = () => {
        this.setState({width: ''});
        this.setState({height: ''});
        this.setState({distance: ''});

        this.props.onReset();
    }

    send = () => {

        let projectionSurface: ProjectionSurface = {
            width: parseFloat(this.state.width),
            height: parseFloat(this.state.height),
            distance: parseFloat(this.state.distance)
        }

        this.props.onClick(projectionSurface);
    }

    render() {
        return (    
            <Box mb={4}>
                <Card>
                    <CardContent>
                        <Box mb={4}>
                            <Typography variant="h4">Projection Surface</Typography>
                        </Box>
                    
                        <Box mb={4}>
                            <Grid container justify="space-between">
                                <Grid item>
                                <TextField
                                    name="width"
                                    label="Width"
                                    value={this.state.width}
                                    id="filled-start-adornment"
                                    onChange={this.handleInputChange}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                    }}
                                    variant="outlined"
                                />
                                </Grid>

                                <Grid item>
                                <TextField
                                    name="height"
                                    label="Height"
                                    id="filled-start-adornment"
                                    value={this.state.height}
                                    onChange={this.handleInputChange}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                    }}
                                    variant="outlined"
                                />
                                </Grid>

                                <Grid item>
                                <TextField
                                    name="distance"
                                    label="Distance"
                                    id="filled-start-adornment"
                                    onChange={this.handleInputChange}
                                    value={this.state.distance}
                                    InputProps={{
                                        endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                                    }}
                                    variant="outlined"
                                />
                                </Grid>


                            </Grid>
                        </Box>

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
