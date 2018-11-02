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