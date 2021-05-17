import { Box, Grid, InputAdornment, TextField } from '@material-ui/core';
import React, { Component } from 'react';

class InputFormComponent extends React.Component<any> {

    render() {
        return (
            <Box mb={4}>
                <Grid container justify="space-between">
                    <Grid item>
                    <TextField
                        error={!!this.props.errorMsg.width}
                        helperText={this.props.errorMsg.width}
                        name="width"
                        label="Width"
                        value={this.props.width}
                        
                        onChange={this.props.handleInputChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                    </Grid>

                    <Grid item>
                    <TextField
                        error={!!this.props.errorMsg.height}
                        helperText={this.props.errorMsg.height}
                        name="height"
                        label="Height"
                        value={this.props.height}
                        onChange={this.props.handleInputChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                    </Grid>

                    <Grid item>
                    <TextField
                        error={!!this.props.errorMsg.distance}
                        helperText={this.props.errorMsg.distance}
                        name="distance"
                        label="Distance"
                        onChange={this.props.handleInputChange}
                        value={this.props.distance}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                        variant="outlined"
                    />
                    </Grid>


                </Grid>
            </Box>
        )
    }

}

export default InputFormComponent;
