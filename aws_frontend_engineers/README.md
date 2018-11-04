# AWS for Front-End Engineers (ft. S3, Cloudfront & Route 53)

## Course Resources

* Course Slides: <https://speakerdeck.com/stevekinney/aws-for-frontend-engineers>
* Course Notes: <https://gist.github.com/stevekinney/6ab02582829f039b6a14c973923909f8>
* Code Repository: <https://github.com/stevekinney/noted-base>

## AWS Free Tier

* <https://aws.amazon.com/free/>
* Creating an AWS Account Guide: <https://static.frontendmasters.com/resources/2018-08-14-deploy-apps-aws-react/01-Creating-an-AWS-Account.pdf>

## Monitoring Billing

## Securing the Root Account

* Identity Access and Management
* TL;DR: It's how you manage sub accounts in AWS.
* Generally speaking, it's a bad idea to use your root account for anything.
* Principle of Least Access
  * Principle of least privilege: <https://en.wikipedia.org/wiki/Principle_of_least_privilege>
* Turn on MFA for root account
* Make a new user (not root account)
* Turn on MFA for that one too.
* Turning on Multi Factor Authentication: <https://static.frontendmasters.com/resources/2018-08-14-deploy-apps-aws-react/03-Setting-Up-MFA.pdf>

## Setting up an IAM user

* <https://static.frontendmasters.com/resources/2018-08-14-deploy-apps-aws-react/04-Setting-Up-an-IAM-User.pdf>

## Introducing S3

* Simple Storage Service (S3)
* In our S3 account, you have your buckets.
* You can put objects (read: files) in your buckets.
* You can read from your buckets as well.
* You can host web pages out of your buckets.
* Infinitely scalable
* Files can be as small as zero bytes or as large as 5 terabytes.
* 99% availability (built for 99.99%)
* 99.999999999% durability
* Features
  * Lifecycle Management
  * Versioning
  * Encryption
  * Security
* Storage Tiers
  * Standard - this is what we'll use.
  * Infrequently accessed.
  * Reduced redundancy
  * Glacier - this technically isn't S3, but whatever.
* S3 is effectively a key/value store.
* Data Consistency Model
  * Putting new objects in S3 is immediate. You'll get back a 200 response.
  * Updating and removing objects is eventually consistent. Users might get an old version.
* Costs
  * Uploading to S3 is free.
  * You get charged for storage.
  * You get charged for requests. (We'll learn how to mitigate this later.)

## Registering a Domain Name

* Registering a Domain Name on Route 53 Guide
  * <https://static.frontendmasters.com/resources/2018-08-14-deploy-apps-aws-react/05-Registering-a-Domain-on-Route-53.pdf>
  *<https://mysuperfunwebsite.com/>

## Policies

* Principal - who can do the thing?
* Action - what can they do?
* Resource - to which things?

## Seting Up an S3 Bucket

* AWS S3 Management Console: <https://console.aws.amazon.com/s3/home?region=us-east-2>
* Setting up an S3 Bucket: <https://static.frontendmasters.com/resources/2018-08-14-deploy-apps-aws-react/06-Setting-Up-S3.pdf>
