use wasm_bindgen::prelude::*;

// P5.js exported fuctions

#[wasm_bindgen]
extern "C" {
    pub fn stroke(color: &str);
}

#[wasm_bindgen]
extern "C" {
    pub fn strokeWeight(a: i32);
}

#[wasm_bindgen]
extern "C" {
    pub fn point(x: f64, y: f64, z: f64);
}

#[wasm_bindgen]
extern "C" {
    pub fn line(x: f64, y: f64, z: f64, x1: f64, y1: f64, z1: f64);
}

#[wasm_bindgen]
extern "C" {
    pub fn push();
}

#[wasm_bindgen]
extern "C" {
    pub fn pop();
}
