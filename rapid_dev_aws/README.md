# Rapid Development on AWS: React, Node.js, and GraphQL

## Getting started

* <https://gist.github.com/stevekinney/941e815e3f2ae824529cc4470e45794c>
* Create a sub user for working with AWS Mobile Hub
* Bad idea to use your root AWS account for things. If you lose control of your key, then whoever finds it has fully control over your account.

## AWS Account Setup

* <https://static.frontendmasters.com/resources/2018-05-30-aws/deploy-to-full-stack-up-and-running.pdf>

## AWS Mobile Hub, Amplify, and AppSync Overview

* AWS Mobile Hub
  * A dashboard for easily managing multiple AWS services.
  * Provides a graphical abstraction over DynamoDB, Cognito, Pinpoint, and other services.
  * awsmobile-cli
    * A command line tool  (awsmobile) for setting up new projects using AWS Mobile Hub.
    * Gives you a command line interface for quickly setting up, configuring, and deploying applications on AWS Mobile Hub.
    * npm install -g awsmobile-cli
    * yarn add global awsmobile-cli
  * What does Mobile Hub offer?
    * Authentication (Cognito)
    * Storage (S3)
    * Serverless Functions (Lambda && API Gateway)
    * Database (DynamoDB)
    * Hosting (S3 and Cloudfront)
    * Analytics and Notifications (Pinpoint)

## AWS Amplify

* A JavaScript library with a bunch of helper functions for working with AWS Mobile Hub.
* It also includes aws-amplify-react, which includes higher-order components to help with building React applications on AWS.

## AWS Mobile && AWS Amplify

* If you use awsmobile init in a new project, it will automatically install aws-amplify into your node_modules and add it to package.json.
* You don't need to use these tools together, but you might want to.

## AWS AppSync

* GraphQL as a service
* Can be built on top of DynamoDB, Elastic Search, or Lambda functions.
* Can be used with AWS Amplify and Mobile Hub, but it doesn't need to.

## React Application Code

* <https://github.com/stevekinney/grudges>

## AWS Mobile Hub CLI Setup

* which awsmobile
  * Where is AWS Mobile CLI tools installed on your system
* awsmobile configure
  * To connect AWS Mobile CLI tools with your AWS account
* awsmobile init
  * Initialize a new aws backend for this application

<pre>
Success! your project is now initialized with awsmobilejs

   awsmobilejs\.awsmobile
     is the workspace of awsmobile-cli, please do not modify its contents

   awsmobilejs\#current-backend-info
     contains information of the backend awsmobile project from the last
     synchronization with the cloud

   awsmobilejs\backend
     is where you develop the codebase of the backend awsmobile project

   awsmobile console
     opens the web console of the backend awsmobile project

   awsmobile run
     pushes the latest development of the backend awsmobile project to the cloud,
     and runs the frontend application locally

   awsmobile publish
     pushes the latest development of the backend awsmobile project to the cloud,
     and publishes the frontend application to aws S3 for hosting

Happy coding with awsmobile!
</pre>

* awsmobile
  * To display the builtin commands of awsmobile.

## Adding Authentication to React

* awsmobile features
  * To select AWS features to turn on or off. Press SPACE to select or A to toggle all or I to inverse the selection
* awsmobile push
  * Uploads project details to Mobile Hub from your local machine.
* awsmobile
  * See the list of features.
* awsmobile user-signin enable
  * Get the default settings.
  * awsmobile user-signin enable --prompt
    * To confirm details about the AWS sign-in feature. Leaving off the --prompt subcommand uses the default user-signin settings.
* awsmobile push
  * To upload the latest project changes to Mobile Hub from your local machine.

## AWS Console Settings

* awsmobile console
  * To launch the browser to check if application changes made it to Mobile Hub.

## Adding Amplify withAuthenticator into React

* awsmobile pull
  * To download the latest project changes to your local machine from Mobile Hub.

## Adding a Database with MobileHub

* awsmobile database enable --prompt
  * To add database table details
* awsmobile push
  * To upload the latest project changes to Mobile Hub from your local machine.
* awsmobile console
  * To launch the browser to check if application changes made it to the Mobile Hub.

## Adding Cloud API with Mobile Hub

* awsmobile cloud-api enable --prompt
  * To create, remove, or edit an API related to the application.

<pre>
Adding lambda function code on:
C:\Users\phili\Desktop\coding_projects\frontend_masters\rapid_dev_aws\grudges\awsmobilejs\backend\cloud-api\grudges/
...
Path to be used on API for get and remove an object should be like:
/grudges/object/:id

Path to be used on API for list objects on get method should be like:
/grudges

JSON to be used as data on put request should be like:
{
  "avenged": "INSERT VALUE HERE",
  "deed": "INSERT VALUE HERE",
  "id": "INSERT VALUE HERE",
  "person": "INSERT VALUE HERE"
}
To test the api from the command line (after awsmobile push) use this commands
awsmobile cloud-api invoke grudgesCRUD <method> <path> [init]
</pre>

* awsmobile push
* awsmobile console

## Saving React State to the Cloud API

## Publishing Your App

* awsmobile publish
  * To first upload the latest project changes to Mobile Hub and then publish the react application on S3.
  * <https://aws.amazon.com/cloudfront/>
  * <https://aws.amazon.com/route53>

## API and Auth Modules

* We used the Authenticator HOC (Higher Order Component), but there are also lower level APIs that we can use.

<pre>
Auth.signIn(username, password)
  .then(console.log)
  .catch(console.error);

Auth.signOut().then(console.log).catch(console.error);
</pre>

* You can get information about the current user.

<pre>
const user = await Auth.currentAuthenticatedUser()
const session = await Auth.currentSession();
</pre>

* The API class has the methods you'd suspect and then one additional one.

<pre>
import { API } from 'aws-amplify';

API.get(apiName, path, init);
API.post(apiName, path, init);
API.patch(apiName, path, init);
API.put(apiName, path, init);
API.del(apiName, path, init);
API.graphql(graphqlOperation);
</pre>

* Each CRUD method takes 3 arguments
  * apiName: The name of the API Gateway you want to hit.
  * path: The path you want to hit on that API.
  * init: Additional options (e.g. header, body, query strings)

* Getting grudges

<pre>
API.get('grudgesCRUD', '/grudges')
  .then(grudges => console.log('All the grudges.', grudges))
  .catch(console.error);

API.get('grudgesCRUD', `/grudges/object/${grudge.id}`)
  .then(grudges => console.log('Just one grudge.', grudges))
  .catch(console.error);
</pre>

* A POST request

<pre>
import { API } from 'aws-amplify';

API.post('grudgesCRUD', '/grudges', {
  body: {
    id: '123',
    person: 'Bob Ross',
    deed: 'Making painting look too easy.',
    avenged: false,
  },
});
</pre>

* Updating and deleting

<pre>
API.put('grudgesCRUD', '/grudges', { body: updatedGrudge })
  .then(console.log)
  .catch(console.error);

API.del('grudgesCRUD', '/grudges/object/${grudge.id}`)
  .then(console.log)
  .catch(console.error);
</pre>