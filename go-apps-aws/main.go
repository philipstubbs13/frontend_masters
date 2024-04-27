package main

import (
	"femBasics/imports"
	"fmt"
)

const (
	PI = 3.14
)

type Circle struct {
	radius float64
}

func (c Circle) calculateCircumference() {
	circumference := 2 * PI * c.radius
	fmt.Println(circumference)
}

func NewCircle(radius float64) Circle {
	return Circle{
		radius: radius,
	}
}

func main() {
	newTicket := imports.Ticket{
		ID:    123,
		Event: "FEM course",
	}

	newTicket.PrintEvent()

	fmt.Println(newTicket)

	myCircle := NewCircle(1.5)

	myCircle.calculateCircumference()
}
