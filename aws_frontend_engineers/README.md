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