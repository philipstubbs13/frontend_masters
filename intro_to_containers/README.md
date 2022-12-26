# Intro to Containers

* <https://frontendmasters.com/courses/complete-intro-containers/>
* <https://btholt.github.io/complete-intro-to-containers/>

* Clean up/remove all images on your computer:

```bash
docker image prune
```

* kill all docker images

```bash
docker kill $(docker ps -q)
```

* Clean up/remove all stopped containers

```bash
docker container prune
```