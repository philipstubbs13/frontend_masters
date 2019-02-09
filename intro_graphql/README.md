# Introduction to GraphQL

* <https://frontendmasters.com/courses/graphql/>
* Instructor: Scott Moss
* <https://github.com/FrontendMasters/intro-to-graphql>

## Intro and tools

* Node.js for runtime
* MongoDB for our Database
* Mongoose for interacting with our Database
* Jest for testing

## GraphQL

* Strongly typed query language and runtime for your data
* Open source and created by Facebook.
* Gives clients the power to describe exactly what data they want.
* Strongly typed (think typescript for your data)
* Enables excellent developer tooling and experiences.
* Can sit in front of any existing API because its just a query language.
* Ecosystem is fantastic

## GraphQL vs REST

* Different but sneakily similar
* GraphQL only has one URL. It does not need a resource url + verb combo. The request details are in a POST body (sometimes GET).
* In REST, the shape and size of the data resource is determined by the server, with Graphql its determined by the query (request).
* In REST, you have to make multiple API calls to retrieve relational data, with GraphQL you can start with entry resource and traverse all the connections in one request.
* In REST, the shape of the response is determined by whom ever created the server, in Graphql the shape is determined by the query.
* In REST, a single request will execute on controller on the server, in Graphql a request might execute many resolvers on the server.

## Creating schemas

* Graphql schema strictly defines what resources, how they relate, and how a client and consume them.
* DB schema is for keeping data consistent when entering our DB
* graphql schema is for defining what resources are available for querying, how they relate, and how you can query them.
* Both schemas can be the same, or not. DB schema is a good starting point for your graphql schema.
* graphql schema sits in front of your db queries, it validates incoming request queries.
* some graphql tools create graphql apis based off of your db schemas, and the other way around.

## creating schemas with SDL

* Schema Definition Language (SDL)
* Instead of using fuctions to create a schema, use a verbose, string based syntax for your schemas. Later you can transform that syntax into many other representations if needed.
* Can be composable
* much easier to read
* Supported by all tools

## Scalar and object types

* Describe resources that will be used in queries and mutations.
* scalar types are built in primitives.
  * String
  * Int
  * Float
  * Boolean
  * ID
* object types are custom shapes with fields that either scalar types or other object types.
* object type fields also describe any arguments and or validations.
* Types are the target for all requests.
* Schema cheatsheet: <https://raw.githubusercontent.com/sogko/graphql-shorthand-notation-cheat-sheet/master/graphql-shorthand-notation-cheat-sheet.png>

## Query and mutation types

* CRUD on your graphql Api
* query type describes the different queries your API is capable of.
* A query operation is just a name, with possible arguments that eventually returns a type.
* A mutation is the exact same thing, but with the intent of mutating the DB vs just reading.
* queries and mutations are what will be available to clients interacting with your api, think of them as your routes.

```bash
{
  myCat {
    name
    bestFriend {
      name
    }
  }
}
```

## What are resolvers

* like controllers, but instead resolve types all the way down.
* Resolvers are like controllers in a REST API. They are responsible for retrieving data.
* Every query and mutation your schema has, must have a resolver that returns the specified type.
* Types and fields on types often have resolvers as well.
* incoming query dictates what resolvers run and in what order.

## Creating resolvers

* return the same shape as described in the schema, or delegate to another resolver.
* resolvers take a few args.
  * starting object (what the parent resolver returned or starting value from server)
  * args (any arguments from the incoming request)
  * context (shared context obj across all resolvers, like the req object in express)
  * info (advanced AST of the incoming request)