import './InputFormComponent.css';
import {  createStyles, InputAdornment, makeStyles, OutlinedInputProps, TextField, Theme } from '@material-ui/core';
import React from 'react';

const useStylesReddit = makeStyles((theme: Theme) => createStyles({
    root: {
        border: "1px solid #e2e2e1",
        overflow: "hidden",
        borderRadius: 4,
        backgroundColor: "#fff",
        transition: theme.transitions.create(["border-color", "box-shadow"]),
        "&:hover": {
          backgroundColor: "#fff",
          borderColor: "#0094DA"
        },
        "&$focused": {
          backgroundColor: "#fff",
          borderColor: "#0094DA"
        },
        '&$error': {
          borderColor: '#F24130',
          borderWidth: 1,
        },
      },
      focused: {},
      error: {}
      
}));

export default function InputFormComponent(props: any) {
  
  const classes = useStylesReddit();

  return (
      <React.Fragment>
              <TextField
                  className="top-center"

                  error={!!props.errorMsg.width}
                  helperText={props.errorMsg.width}
                  name="width"
                  label="Width"
                  value={props.width}
                  
                  onKeyDown={props.handleKeyboardInput}
                  onChange={props.handleInputChange}
                  InputProps={{
                      classes, disableUnderline: true,
                      endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                  }}
                  variant="filled"
              />

              <TextField
                  className="right-center"

                  error={!!props.errorMsg.height}
                  helperText={props.errorMsg.height}
                  name="height"
                  label="Height"
                  value={props.height}

                  onKeyDown={props.handleKeyboardInput}
                  onChange={props.handleInputChange}
                  InputProps={{
                      classes, disableUnderline: true,
                      endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                  } as Partial<OutlinedInputProps>}
                  variant="filled"
              />

              <TextField
                  className="center"
                  
                  error={!!props.errorMsg.distance}
                  helperText={props.errorMsg.distance}
                  name="distance"
                  label="Distance"
                  
                  onKeyDown={props.handleKeyboardInput}
                  onChange={props.handleInputChange}
                  value={props.distance}

                  InputProps={{
                      classes, disableUnderline: true,
                      endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                  } as Partial<OutlinedInputProps>}
                  
                  variant="filled"
              />
      </React.Fragment>
        )
    }
