struct Custom {
    age: usize,
    name: String
}

enum Item {
    Number(usize),
    String(String),
    MyCustom(Custom)
}

fn append(items: &mut Vec<Item>) {
    items.push(Item::String("hello, Fem".to_string()))
}

fn main() {
    let mut items: Vec<Item> = vec![];
    append(&mut items);
}