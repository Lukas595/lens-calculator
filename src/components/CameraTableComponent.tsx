import React, { Component } from "react";
import { TableContainer, Paper, Table, TableHead, TableCell, TableBody, TableRow, Box, Grid, Typography, IconButton, Collapse } from '@material-ui/core';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

class CameraTableComponent extends Component <{cameras: any[]}> {

    render() {
        return (
            <TableContainer component={Paper} aria-label="simple table">
                <Box m={3}>
                    <Typography variant="h4">Suitable Camera Kits</Typography>
                </Box>

                {
                    this.props.cameras.length > 0 ?
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell />
                                <TableCell>Name</TableCell>
                                <TableCell>Resolution</TableCell>
                                <TableCell>Lens</TableCell>
                            </TableRow>

                        </TableHead>
                        <TableBody>
                            { this.props.cameras.map((cam) => (
                                <CameraRowComponent camera={cam} />
                            ))}
                        </TableBody>
                    </Table>
                : <Box color="#0094DA" fontWeight="bold" m={3}>No suitable cameras were found.</Box>
                }
                
            </TableContainer>
        );
    };

}

class CameraRowComponent extends Component <{camera: any}, {open: boolean}> {

    constructor(props: any) {
        super(props);
        this.state = {open: false};
    }

    toogle = () => {
        const open: boolean = !this.state.open;

        this.setState({open})
    }

    render() {
        const camera: any = this.props.camera;
        const lens: any = [];
     
        if (camera.fixedFocalLength) {
            camera.lens.forEach((cameraLens: any) => {
                lens.push(fixedFocalLength(cameraLens));
            });
        } else {
            lens.push(variableFocalLength(camera.minLens, camera.maxLens));
        }
      
        return (
            <React.Fragment key={camera.name}>
                <TableRow>
                    <TableCell>
                        <IconButton onClick={this.toogle}>
                            {this.state.open ? <KeyboardArrowUpIcon/> : <KeyboardArrowDownIcon/>}
                        </IconButton>
                    </TableCell>
                    <TableCell>{camera.name} <br /> {camera.partNo}</TableCell>
                    <TableCell>{camera.sensor.resolution}</TableCell>
                    <TableCell>
                        <Grid container direction="column" spacing={1}>
                            {lens}
                        </Grid>
                    </TableCell>
                </TableRow>

                <TableRow>
                    <TableCell style={{paddingBottom: 0, paddingTop: 0}} colSpan={4}>
                        <Collapse in={this.state.open} timeout="auto" unmountOnExit>
                            <Box m={1}>
                                <Typography variant="h5">{camera.name} Details</Typography>

                                <Table size="small">
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>Sensor Size</TableCell>
                                            <TableCell>Pixel Size</TableCell>
                                            <TableCell>Multicam</TableCell>
                                            <TableCell>Interface</TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        <TableRow>
                                            <TableCell>{camera.sensor.size}</TableCell>
                                            <TableCell>{camera.sensor.pixel}</TableCell>
                                            <TableCell>{camera.multicam}</TableCell>
                                            <TableCell>{interfaceCell(camera.interface)}</TableCell>
                                        </TableRow>
                                    </TableBody>
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }
}

function interfaceCell(interfaceInfo: any) {
    return (
        <Box>
            {interfaceInfo.cable} 
            {interfaceInfo.bandwidth.length > 0 && 
                <span><br/>{interfaceInfo.bandwidth}</span>
            }
        </Box>
    )
}

function fixedFocalLength(lens: any) {
    return (
        <Grid item> 
            {lens.length > 0 &&
                <span>{lens.length}mm :</span>
            } {lens.horizontalFov}° x {lens.verticalFov}°
        </Grid>
    );
}

function variableFocalLength(minLens: any, maxLens: any) {
    return (
        <Grid item>
            {minLens.length}mm - {maxLens.length}mm <br />
            {minLens.horizontalFov}° x {minLens.verticalFov}° - {maxLens.horizontalFov}° x {maxLens.verticalFov}°
        </Grid>
    );
}

export default CameraTableComponent;
