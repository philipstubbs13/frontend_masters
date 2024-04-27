package main

import "fmt"

type Person struct {
	Name string
	Age  int
}

func NewPerson(name string, age int) Person {
	return Person{
		Name: name,
		Age:  age,
	}
}

func (p *Person) changeName(newName string) {
	fmt.Println("address of copy", &p.Name)
	p.Name = newName
}

func main() {
	myPerson := NewPerson("melkey", 26)
	fmt.Println("address of allocated memory", &myPerson.Name)
	myPerson.changeName("marc")

	a := 7
	b := &a
	*b = 9
	fmt.Println(*b)
	fmt.Println(a)

	mySlice := []int{
		1, 2, 3,
	}

	for index, _ := range mySlice {
		mySlice[index]++
	}

	fmt.Println(mySlice)

	fmt.Printf("this is my person %+v", myPerson)
}
