export default class Frustum {

    horizonzalFov: string;
    verticalFov: string;

    constructor() {
        this.verticalFov = ''
        this.horizonzalFov = '';
    }

    updateFrustum(width: number, height: number, distance: number): void {
        let vFovInRadians: number = Math.tanh((height / 2) / distance) * 2;
        let hFovInRadians: number = Math.tanh((width / 2) / distance) * 2;
        
        this.verticalFov = (vFovInRadians * (180 / Math.PI)).toFixed();
        this.horizonzalFov = (hFovInRadians * (180 / Math.PI)).toFixed();
    }

    containsLens = (lens: {horizontalFov: number, verticalFov: number}) => {
        let hFov: number = parseFloat(this.horizonzalFov);
        let vFov: number = parseFloat(this.verticalFov);

        return lens.horizontalFov >= hFov && lens.verticalFov >= vFov;
    }

}

