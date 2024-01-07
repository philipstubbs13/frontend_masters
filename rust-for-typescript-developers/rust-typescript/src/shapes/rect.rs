use std::fmt::Display;

use super::area::Area;

pub struct Rect {
    pub x: f64,
    pub y: f64,
    pub width: f64,
    pub height: f64,
}

impl Area for Rect {
    fn area(&self) -> f64 {
        return self.width * self.height;
    }
}

impl Default for Rect {
    fn default() -> Self {
        return Rect {
            x: 0.0,
            y: 0.0,
            width: 10.0,
            height: 10.0,
        }
    }
}

impl Display for Rect {
    fn fmt(&self, f: &mut std::fmt::Formatter<'_>) -> std::fmt::Result {
        return write!(f, "Rectangle({}, {}): {}x{}", self.x, self.y, self.width, self.height)
    }
}

struct RectIter {
    points: Vec<(f64, f64)>,
    idx: usize,
}

impl Iterator for RectIter {
    type Item = (f64, f64);

    fn next(&mut self) -> Option<Self::Item> {
        if self.idx >= self.points.len() {
            return None;
        }

        let point = self.points[self.idx];
        self.idx += 1;

        return Some(point);
    }
}
