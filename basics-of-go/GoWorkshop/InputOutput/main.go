package main

import "fmt"

// global variable
var url = "https://frontendmasters.com"
var name = "Frontend Masters"

func init() {
	fmt.Println("A")
}

func init() {
	fmt.Println("B")
}

func calculateTax(price float32) (float32, float32) {
	return price*0.09, price*0.02
}

func birthday(pointerAge *int) {
	if (*pointerAge>140) {
		panic("Too old to be true")
	}
	fmt.Printf("The pointer is %v and the value is %v\n", pointerAge, *pointerAge)

	*pointerAge++
}

func main() {
	// stateTax, _ := calculateTax((100))
	// fmt.Println(stateTax)

	defer fmt.Println("Good ")
	defer fmt.Println("Bye!!")

	age := 22
	birthday(&age)
	fmt.Println(age)

	printData()

	// function-scoped variables
	message := "Hello from Go"
	price  := 34.4

	print(message, price, url)
}