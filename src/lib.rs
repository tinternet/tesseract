mod p5;
mod point;

use point::{Point3D, Point4D};
use wasm_bindgen::prelude::*;

#[wasm_bindgen]
pub struct Tesseract {
    width: f64,
    height: f64,
    angle: f64,
    zoom: f64,
}

#[wasm_bindgen]
impl Tesseract {
    pub fn new(width: i32, height: i32) -> Tesseract {
        Tesseract {
            width: width as f64,
            height: height as f64,
            angle: 0.0,
            zoom: 2.0,
        }
    }

    #[inline]
    pub fn zoom(&mut self, zoom: f64) {
        self.zoom = zoom;
    }

    #[inline]
    pub fn rotate(&mut self, angle: f64) {
        self.angle += angle;
    }

    pub fn draw(&self) {
        let camera = Point3D::new(self.width / 8.0, self.height / 8.0, self.height / 8.0);
        let angle = self.angle;
        let zoom = self.zoom;

        let pts = [
            Point4D::new(-1.0, -1.0, -1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, -1.0, -1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, 1.0, -1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(-1.0, 1.0, -1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(-1.0, -1.0, 1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, -1.0, 1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, 1.0, 1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(-1.0, 1.0, 1.0, 1.0).project(angle, zoom, &camera),
            Point4D::new(-1.0, -1.0, -1.0, -1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, -1.0, -1.0, -1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, 1.0, -1.0, -1.0).project(angle, zoom, &camera),
            Point4D::new(-1.0, 1.0, -1.0, -1.0).project(angle, zoom, &camera),
            Point4D::new(-1.0, -1.0, 1.0, -1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, -1.0, 1.0, -1.0).project(angle, zoom, &camera),
            Point4D::new(1.0, 1.0, 1.0, -1.0).project(angle, zoom, &camera),
            Point4D::new(-1.0, 1.0, 1.0, -1.0).project(angle, zoom, &camera),
        ];

        for point in &pts {
            draw_point(point);
        }

        p5::strokeWeight(4);
        p5::stroke("rgba(0, 0, 255, 0.5)");

        draw_lines(&pts[0..4], pts[1..4].iter().chain(&pts[0..1]));
        draw_lines(&pts[4..8], pts[5..8].iter().chain(&pts[4..5]));
        draw_lines(&pts[0..4], pts[4..8].iter());
        draw_lines(&pts[8..12], pts[9..12].iter().chain(&pts[8..9]));
        draw_lines(&pts[12..16], pts[13..16].iter().chain(&pts[12..13]));
        draw_lines(&pts[8..12], pts[12..16].iter());
        draw_lines(&pts[0..8], pts[8..16].iter());
    }
}

#[inline]
fn draw_point(point: &Point3D) {
    p5::point(point.x, point.y, point.z);
}

#[inline]
fn draw_lines<'a>(points1: &[Point3D], points2: impl Iterator<Item = &'a Point3D>) {
    for (point1, point2) in points1.iter().zip(points2) {
        p5::line(point1.x, point1.y, point1.z, point2.x, point2.y, point2.z);
    }
}
