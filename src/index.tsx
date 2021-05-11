import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import CameraStore from './stores/CameraStore';

(function startApplication() {

  const cameraStore = new CameraStore();

  function loadStaticData() {
    return Promise.all([cameraStore.getAll]);
  }

  function mountPage() {
    console.log("MountPage")
    ReactDOM.render(
      <React.StrictMode>
        <App cameraStore={cameraStore}/>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }

  loadStaticData().then(mountPage);

})();
