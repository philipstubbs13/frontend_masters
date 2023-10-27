package data

import "fmt"

type location string

func (origin location) distanceTo(destination location) distance {
	// TODO calculations...
	fmt.Printf("Origin %v Destination %v", origin, destination)
	return 10
}

func locationTest() {
	nyc := location("33.4234, 24.234")
	// DistanceTo(nyc, location("-23, -44"))

	nyc.DistanceTo(location("-23, -44"))

	print(nyc)
}

type distance float64
type distanceKm float64

// Method
func (miles distance) ToKm() distanceKm {
	return distanceKm(1.60934 * miles)
}

func (km distance) ToMiles() distance {
	return distance(km / 1.60934)
}


func test() {
	d := distance(34.5)
	km := d.ToKm()
	km.ToMiles()
	print(d)
}