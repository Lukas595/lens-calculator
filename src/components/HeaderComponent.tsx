import { Box, Typography } from '@material-ui/core';
import {Component} from 'react';


class HeaderComponent extends Component {

    render() {
        return (  
            <Box mb={2}>
                <Typography variant="h2">
                    VIOSO Camera Calibration Kit finder
                </Typography>
            </Box>
        );
    }

}

export default HeaderComponent;
