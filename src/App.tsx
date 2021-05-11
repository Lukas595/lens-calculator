import './App.css';
import InputComponent, { ProjectionSurface } from './components/InputComponent';
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import ResultComponent from './components/ResultComponent';
import CameraTableComponent from './components/CameraTableComponent';
import CameraCategoryComponent from './components/CameraCategoryComponent';
import React, { Component } from 'react';
import Frustum from './models/Frustum';
import CameraStore from './stores/CameraStore';
import { Box, Container, Grid } from '@material-ui/core';

type AppProps = {
  cameraStore: CameraStore
}

type AppStates = {
  frustum: Frustum,
  cameras: any[]
}

class App extends Component<AppProps, AppStates> {
  
  state: AppStates = { 
    frustum: new Frustum(),
    cameras: this.props.cameraStore.getAll()
  };

  reload = (projectionSurface: ProjectionSurface) => {
    
    const frustum = this.state.frustum;
    frustum.updateFrustum(projectionSurface.width, projectionSurface.height, projectionSurface.distance);

    const cameras = this.props.cameraStore.getBy(frustum);

    this.setState( { cameras, frustum } );
  }

  reset = () => {
    const frustum: Frustum =  new Frustum();
    const cameras: any[] = this.props.cameraStore.getAll()

    this.setState( { cameras, frustum } );
  }

  render() {
    return (
      <Container maxWidth="lg">
        <HeaderComponent />

        <InputComponent onClick={this.reload} onReset={this.reset} />
          
        <Box mb={4}>
          <Grid container spacing={3}>

          <Grid item xs={4}>
            <ResultComponent horizontalFov={this.state.frustum.horizonzalFov} verticalFov={this.state.frustum.verticalFov} />
          </Grid>

          <Grid item xs={8}>
            <CameraCategoryComponent />
          </Grid>

          </Grid>
        </Box>

        <CameraTableComponent cameras={this.state.cameras} />

        <FooterComponent />

      </Container>
      
  )};
}

export default App;
