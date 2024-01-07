use std::f64::consts::PI;

use super::area::Area;

pub struct Circle {
    pub x: f64,
    pub y: f64,
    pub radius: f64,
}

impl Area for Circle {
    fn area(&self) -> f64 {
        return self.radius * self.radius * PI;
    }
}
