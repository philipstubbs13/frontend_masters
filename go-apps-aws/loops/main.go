package main

import (
	"fmt"
	"slices"
)

func main() {
	// animals := [2]string{
	// 	"dog",
	// 	"cat",
	// }
	// fmt.Println(animals)

	animals := []string{
		"dog",
		"cat",
	}

	animals = append(animals, "moose")

	animals = slices.Delete(animals, 0, 1)

	// for i := 0; i < len(animals); i++ {
	// 	fmt.Printf("this is my animal %s\n", animals[i])
	// }

	// for i := 0; i < 10; i++ {
	// 	fmt.Println(i)
	// }

	for index, value := range animals {
		fmt.Printf("this is my index %d and this is my animal %s\n", index, value)
	}

	// for value := range 10 {
	// 	fmt.Println(value)
	// }

	i := 0

	for i < 5 {
		fmt.Println(i)
		i++
	}

	fmt.Println(animals)
}
