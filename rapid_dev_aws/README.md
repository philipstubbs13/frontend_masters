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

