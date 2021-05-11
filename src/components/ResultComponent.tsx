import './ResultComponent.css';
import { Component } from "react";
import { Box, Card, CardContent, Grid, Typography } from '@material-ui/core';

type ResultProps = {
    horizontalFov: string,
    verticalFov: string
}

class ResultComponent extends Component <ResultProps, {}> {   

    render() {
        return (
            <Card>
                <CardContent>
                    <Box mb={4}>
                        <Typography variant="h4">Field of View</Typography>
                    </Box>

                    { !this.props.horizontalFov 
                            ? <Box color="warning.main" fontWeight="bold">Please Calculate a frustum first!</Box>
                            : <Grid container justify="space-between">
                                <Grid item>
                                    <Box textAlign="center">
                                        <Typography variant="h5">Horizontal FOV</Typography>
                                        <div className="resultFOV">{this.props.horizontalFov}</div>
                                    </Box>
                                </Grid>
                                <Grid item>
                                    <Box textAlign="center">
                                        <Typography variant="h5">Vertical FOV</Typography>
                                        <div className="resultFOV">{this.props.verticalFov}</div>
                                    </Box>
                                    
                                </Grid>
                            </Grid>
                        }
                </CardContent>
            </Card>
        );
    };
}

export default ResultComponent;
