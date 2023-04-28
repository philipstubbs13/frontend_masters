# Full Stack for Front-End Engineers, v3

- <https://frontendmasters.com/courses/fullstack-v3/>

* course slides: <https://static.frontendmasters.com/assets/courses/2023-04-18-fullstack-v3/fullstack-v3-slides.pdf>
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
