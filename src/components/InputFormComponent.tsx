import './InputFormComponent.css';
import { InputAdornment, TextField } from '@material-ui/core';
import React from 'react';

class InputFormComponent extends React.Component<any> {

    render() {
        return (
            <React.Fragment>
                    <TextField
                        className="top-center"
                        error={!!this.props.errorMsg.width}
                        helperText={this.props.errorMsg.width}
                        name="width"
                        label="Width"
                        value={this.props.width}
                        
                        onKeyDown={this.props.handleKeyboardInput}
                        onChange={this.props.handleInputChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                        variant="outlined"
                    />

                    <TextField
                        className="right-center"
                        error={!!this.props.errorMsg.height}
                        helperText={this.props.errorMsg.height}
                        name="height"
                        label="Height"
                        value={this.props.height}

                        onKeyDown={this.props.handleKeyboardInput}
                        onChange={this.props.handleInputChange}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                        variant="outlined"
                    />
     
                    <TextField
                        className="center"
                        error={!!this.props.errorMsg.distance}
                        helperText={this.props.errorMsg.distance}
                        name="distance"
                        label="Distance"

                        onKeyDown={this.props.handleKeyboardInput}
                        onChange={this.props.handleInputChange}
                        value={this.props.distance}
                        InputProps={{
                            endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                        }}
                        variant="outlined"
                    />
            </React.Fragment>
        )
    }

}

export default InputFormComponent;
