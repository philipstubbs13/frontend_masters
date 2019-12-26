# Server-Side GraphQL in Node.js

* <https://frontendmasters.com/courses/server-graphql-nodejs/>
* Course slides: <https://static.frontendmasters.com/resources/2019-10-14-full-stack-graphql/server-graphql-nodejs.pdf>
* Repo: <https://github.com/FrontendMasters/fullstack-graphql>

* <https://graphql.github.io/graphql-spec/>
* It's just a spec. there are several implementations
* Server Side
  * Apollo: <https://www.apollographql.com/docs/apollo-server/>
  * Type Definitions.
  * Resolvers
  * Query Definitions
  * Mutation Definitions.
  * Composition
  * Schema
* Client Side
  * Queries
  * Mutations
  * Fragments
* Where does GraphQL fit in?
  * A GraphQL server with a connected DB (most greenfields)
  * A GraphQL server as a layer in front of many 3rd party services and connects them all with one GraphQL API.
  * A hybrid approach where a GraphQL server has a connected DB and also communicates with 3rd party services.
* Node GraphQL Tools
  * Servers
    * Apollo server
    * GraphQL Yoga
    * ...others
  * Services
    * AWS Amplify
    * ...others
  * Tools
    * Prisma
    * ...many many others
* Creating a Schema
  * Using Schema Definition Language (SDL)
  * Programmatically Creating a Schema using language constructs.
* Basic parts of schema
  * Types
  * Fields
  * Scalars
  * Query
  * Mutation

* Query

```bash
{
  me {
    email
  }
}
```

* Query Type
* Creating Queries
  * Create Query Type in the Schema using SDL
  * Add fields to the Query Type.
  * Create Resolvers that for the fields.
* Resolvers
* Creating Resolvers
  * Resolver names must match the exact field nme on your schema's types.
  * Resolvers must return the value type declared for the matching field.
  * Resolvers can be async
  * Can retrieve data from any source.
* Schema + Resolvers => Server.
  * To create a server, at minimum, we need a query type wth a field and a resolver for that field.c

* Query

```bash
{
  pets {
    id,
    name
  }
}
```

* Arguments
  * Allow clients to pass variables along with Queries that can be used in your Resolvers to get data.
  * must be defined in your Schema.
  * can be added to any field.
  * Either have to be Scalars or Input Types.

  ```bash
    {
    shoes(input: { brand: "nike"}) {
      brand
    }
  }
  ```

  ```bash
  {
    pets(input: {type: "DOG"}) {
      type
      name
    }
  }
  ```

  ```bash
  {
    pet(input: {type: "CATS"}) {
      type
    }
  }
  ```

* Input Type
  * just like Types, but used for Arguments.
* Mutations
  * A Type on a Schema that defines operations clients can perform to mutate date(create, update, delete).

  ```bash
  mutation {
    newShoe(input: { brand: "jordan", size: 9}) {
      size,
      brand
    }
  }
  ```

  ```bash
    mutation {
    newPet(input: {name: "Daryl", type: "CAT"}){
      id
      type
      createdAt
    }
  }
  ```
