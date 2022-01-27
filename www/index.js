import { Tesseract } from "tesseract";

export function init({ width, height }) {
    const tesseract = Tesseract.new(width, height);
    return (distance, speed) => {
        tesseract.rotate(speed);
        tesseract.zoom(distance);
        tesseract.draw();
    };
}
