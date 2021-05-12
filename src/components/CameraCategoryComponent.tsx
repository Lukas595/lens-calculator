import { Box, Card, CardContent, Typography } from "@material-ui/core";
import { Component } from "react";

class CameraCategoryComponent extends Component {

    render() {
        return (
            <Card>
                <CardContent>
                    <Box mb={4}>
                        <Typography variant="h4">Camera Category</Typography>
                    </Box>

                    <Box mb={2}>
                        <Typography variant="h5">Wide-Angle kits</Typography>
                        <Typography variant="body1" component="p">
                            Most common used kits; Standard, HQ and HQX Wide-angle Kits can be used for multicam
                        calibration; Ultra Wide-angle requires orthogonal viewing position
                        </Typography>
                    </Box>

                    <Box mb={2}>
                        <Typography variant="h5">Super HQ-Kit</Typography>
                        <Typography variant="body1" component="p">
                            Very versatile kit with a wide range of multicam-ready lenses; made for highest demands in large
                        scale projections and ultra-precise simulations
                        </Typography>
                    </Box>

                    <Box>
                        <Typography variant="h5">Low Cost Kits</Typography>
                        <Typography variant="body1" component="p">
                            Webcams and varifocal solutions for mobile settings when variability of camera positioning is
                        the key. Heavy lens distortion on varifocal lenses
                        </Typography>
                    </Box>
                </CardContent>
            </Card>
        );
    }

}

export default CameraCategoryComponent;
