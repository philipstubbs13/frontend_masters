# Full Stack for Front-End Engineers, v3

- <https://frontendmasters.com/courses/fullstack-v3/>

* course slides part 1: <https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf>
* course slides part 2: <https://docs.google.com/presentation/d/1-b5wgSOCamSpiXE7aIW-Yhxl1hqeLz7s6AAPbdngc1E/edit#slide=id.g1f5f7224727_0_4>
* front end happy hour podcast: <https://www.frontendhappyhour.com/>
* vim
  - <https://vim.fandom.com/wiki/All_the_right_moves>
  * <https://linuxmoz.com/vi-commands-cheat-sheet/>
  * <https://www.openvim.com/>
  * <https://frontendmasters.com/courses/vim-fundamentals/>
  * <https://frontendmasters.com/courses/bash-vim-regex/>
* <https://ohmyz.sh/>
* <https://www.cloudflare.com/learning/>
* <https://www.namecheap.com/>
* <https://www.cisco.com/c/en/us/products/security/firewalls/what-is-a-firewall.html>
* <https://quickref.me/chmod>
* <https://www.atlassian.com/continuous-delivery/principles/continuous-integration-vs-delivery-vs-deployment>
* <https://spinnaker.io/>
* <https://crontab.guru/>
* websocket example: <https://github.com/young/fullstack-for-frontend3/blob/main/apps/database/index-ws.js>
* <https://github.com/young/jemstack.lol/blob/main/index-ws.js>
* <https://github.com/young/fullstack-for-frontend3/blob/main/apps/database/index.js>
* <https://github.com/young/fullstack-for-frontend3/blob/main/apps/simpleServer/Dockerfile>

Move into the ~/.ssh directory

```bash
cd ~/.ssh
```

Generate a key using ssh-keygen

```bash
ssh-keygen
```

copy the public key into digital ocean

```bash
ls | grep fsfe
cat fsfe.pub
```

ssh into your server

```bash
ssh root@<your_IP>
```

ssh into your server your private key

```bash
ssh -i ~/.ssh/fsfe root@<your_IP>
```

exit your server

```bash
exit
```

Look at known hosts

```bash
~/.ssh/known_hosts
```

Check status of a network host

```bash
ping google.com
```

Follow the path of your request

```bash
traceroute google.com
```

Show network status

```bash
netstat -lt | less
```

Lookup the nameservers for a domain

```bash
nslookup frontendmasters.com
```

Lookup the DNS records for a domain

```bash
dig frontendmasters.com
```

View browser DNS cache

```bash
Chrome - chrome://net-internals/#dns
Firefox - about:networking#dns
```

Install nginx

```bash
sudo apt install nginx
```

Start nginx

```bash
sudo service nginx start
```
