use crate::shapes::{rect::Rect, circle::Circle, area::Area};

mod shapes;

fn main() {
    let rect = Rect::default();

    let circ = Circle {
        x: 0.0,
        y: 0.0,
        radius: 10.0
    };

    println!("{}", circ.area());
    println!("{}", rect);
}