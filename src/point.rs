pub struct Point3D {
    pub x: f64,
    pub y: f64,
    pub z: f64,
}

impl Point3D {
    pub const fn new(x: f64, y: f64, z: f64) -> Self {
        Self { x, y, z }
    }
}

pub struct Point4D {
    pub x: f64,
    pub y: f64,
    pub z: f64,
    pub w: f64,
}

impl Point4D {
    pub const fn new(x: f64, y: f64, z: f64, w: f64) -> Self {
        Self { x, y, z, w }
    }

    pub fn project(&self, angle: f64, zoom: f64, camera: &Point3D) -> Point3D {
        let cos = angle.cos();
        let sin = angle.sin();

        let x = self.dot(cos, -sin, 0.0, 0.0);
        let y = self.dot(sin, cos, 0.0, 0.0);
        let z = self.dot(0.0, 0.0, 1.0, 0.0);
        let w = self.dot(0.0, 0.0, 0.0, 1.0);

        let rotated = Point4D::new(x, y, z, w);
        let x = rotated.dot(1.0, 0.0, 0.0, 0.0);
        let y = rotated.dot(0.0, 1.0, 0.0, 0.0);
        let z = rotated.dot(0.0, 0.0, cos, -sin);
        let w = rotated.dot(0.0, 0.0, sin, cos);

        let rotated = Point4D::new(x, y, z, w);
        let w = 1f64 / (zoom - rotated.w);
        let x = rotated.dot(w, 0.0, 0.0, 0.0) * camera.x;
        let y = rotated.dot(0.0, w, 0.0, 0.0) * camera.y;
        let z = rotated.dot(0.0, 0.0, w, 0.0) * camera.z;

        Point3D::new(x, y, z)
    }

    fn dot(&self, x: f64, y: f64, z: f64, w: f64) -> f64 {
        self.x * x + self.y * y + self.z * z + self.w * w
    }
}
