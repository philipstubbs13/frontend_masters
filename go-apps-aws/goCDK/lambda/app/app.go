package app

import (
	"lamda-func/api"
	"lamda-func/database"
)

type App struct {
	ApiHandler api.ApiHandler
}

func NewApp() App {
	// we actually initialize our DB store
	// gets passed DOWN into the api handler
	db := database.NewDynamoDBClient()
	apiHandler := api.NewApiHandler(db)

	return App{
		ApiHandler: apiHandler,
	}
}
