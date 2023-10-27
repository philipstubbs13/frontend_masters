package data

import "fmt"

func (i Instructor) Print() string {
	return fmt.Sprintf("%v, %v (%d)", i.LastName, i.FirstName, i.Score)
}