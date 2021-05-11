import Frustum from "../models/Frustum";

export default class CameraStore {

    cameras: any[] =  [{
      kit: "wide-angle",
      name: "76° Wide-Angle Kit",
      partNo: "CK_W76",
      sensor: {
        size: "1/2''",
        pixel: "2.20 µm",
        resolution: "2560 x 1920 @ 15 fps",
        mpClass: "4.92 MPixel"
      },
      fixedFocalLength: true,
      lens: [{
        length: 4,
        horizontalFov: 76,
        verticalFov: 60,
      }],
      multicam: "Yes",
      interface: "Cat5e/RJ45<br>1 GB/s"
    }, {
      kit: "wide-angle",
      name: "89° Wide-Angle Kit",
      partNo: "CK_W89",
      sensor: {
        size: "1/1.8''",
        pixel: "2.40 µm",
        resolution: "3088 x 2076 @ 15 fps",
        mpClass: "6.41 MPixel"
      },
      fixedFocalLength: true,
      lens: [{
        length: 3.5,
        horizontalFov: 89,
        verticalFov: 73,
      }],
      multicam: "Yes",
      interface: "Cat5e/RJ45<br>1 GB/s"
    }, {
      kit: "wide-angle",
      name: "95° Hi-Res Wide-Angle Kit",
      partNo: "CK_WQ95",
      sensor: {
        size: "1.1''",
        pixel: "3.45 µm",
        resolution: "4096 x 3000 @ 10 fps",
        mpClass: "12.29 MPixel"
      },
      fixedFocalLength: true,
      lens: [{
        length: 6,
        horizontalFov: 96,
        verticalFov: 79,
      }],
      multicam: "Yes",
      interface: "Cat5e/RJ45<br>1 GB/s"
    },{
      kit: "wide-angle",
      name: "110° Ultra Wide-Angle Kit",
      partNo: "CK_WU110",
      sensor: {
        size: "1/2''",
        pixel: "2.2 µm",
        resolution: "2560 x 1920 @ 15 fps",
        mpClass: "4,92 MPixel"
      },
      fixedFocalLength: true,
      lens: [{
        length: 1.8,
        horizontalFov: 115,
        verticalFov: 99,
      }],
      multicam: "No",
      interface: "Cat5e/RJ45<br>1 GB/s"
    },{
      kit: "wide-angle",
      name: "125° Ultra Wide-Angle Kit",
      partNo: "CK_WU125",
      sensor: {
        size: "1/2''",
        pixel: "2.2 µm",
        resolution: "2560 x 1920 @ 15 fps",
        mpClass: "4,92 MPixel"
      },
      fixedFocalLength: true,
      lens: [{
        length: 1.3,
        horizontalFov: 135,
        verticalFov: 119,
      }],
      multicam: "No",
      interface: "Cat5e/RJ45<br>1 GB/s"
    },{
      kit: "super-hq",
      name: "Super HQ Kit",
      partNo: "CK_QXX",
      sensor: {
        size: "1.1''",
        pixel: "3.45 µm",
        resolution: "4096 x 3000 @ 10 fps",
        mpClass: "12,29 MPixel"
      },
      fixedFocalLength: true,
      lens: [{
        length: 8,
        horizontalFov: 79,
        verticalFov: 63,
      },{
        length: 12,
        horizontalFov: 60,
        verticalFov: 47,
      },{
        length: 16,
        horizontalFov: 48,
        verticalFov: 37,
      },{
        length: 25,
        horizontalFov: 32,
        verticalFov: 24,
      },{
        length: 35,
        horizontalFov: 22,
        verticalFov: 17,
      },{
        length: 50,
        horizontalFov: 16,
        verticalFov: 12,
      }],
      multicam: "Yes",
      interface: "Cat5e/RJ45<br>1 GB/s"
    },{
      kit: "low-cost",
      name: "Varifocal Kit",
      partNo: "CK/S/m",
      sensor: {
        size: "1/2''",
        pixel: "2.2 µm",
        resolution: "2560 x 1920 @ 15 fps",
        mpClass: "1.92 MPixel"
      },
      fixedFocalLength: false,
      minLens: {
        length: 3.8,
        horizontalFov: 28,
        verticalFov: 21,
      },
      maxLens: {
        length: 13,
        horizontalFov: 97,
        verticalFov: 71,
      },
      multicam: "No",
      interface: "Cat5e/RJ45<br>1 GB/s"
    },{
      kit: "low-cost",
      name: "70° USB2 Webcam",
      partNo: "LGT_C920",
      sensor: {
        size: "",
        pixel: "",
        resolution: "1920 x 1080 @ 30 fps",
        mpClass: ""
      },
      fixedFocalLength: true,
      lens: [{
        length: -1,
        horizontalFov: 70,
        verticalFov: 40,
      }],
      multicam: "No",
      interface: "USB 2.0"
    },{
      kit: "low-cost",
      name: "78° USB2 Webcam",
      partNo: "LGT_C930",
      sensor: {
        size: "",
        pixel: "",
        resolution: "1920 x 1080 @ 30 fps",
        mpClass: ""
      },
      fixedFocalLength: true,
      lens: [{
        length: -1,
        horizontalFov: 78,
        verticalFov: 48,
      }],
      multicam: "No",
      interface: "USB 2.0"
    }
    ];

    getAll(): any[] {
      return this.cameras;
    }

    getBy(frustum: Frustum): any[] {
      let fittingCameras = this.cameras.map(camera => {

        if (camera.fixedFocalLength) {
          return {
            ...camera, lens: camera.lens.filter((lens: any) => frustum.containsLens({horizontalFov: lens.horizontalFov, verticalFov: lens.verticalFov}))
          }
        } else {
          return frustum.containsLens(camera.maxLens) ? camera : null;
        }

      }).filter(camera => camera != null).filter(camera => camera.fixedFocalLength ? camera.lens.length > 0 : true);


      return fittingCameras;
    }

}
