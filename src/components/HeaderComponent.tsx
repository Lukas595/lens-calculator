import { Box, Typography } from '@material-ui/core';
import {Component} from 'react';


class HeaderComponent extends Component {

    render() {
        return (  
            <Box mb={2}>
                <Typography variant="h1">
                    VIOSO Camera Calibration Kit Picker
                </Typography>
            </Box>
        );
    }

}

export default HeaderComponent;
