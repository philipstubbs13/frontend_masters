# Full Stack for Front End Engineers

* Course: <https://frontendmasters.com/courses/full-stack/>
* Slides: <https://docs.google.com/presentation/d/1FPpbZ919vt8e1k2EGPd7BKhDlHao79ykvYLfDcMOsMo/edit>

## How does the internet work

* DNS - Domain Name System
  * The Internet Phonebook
* ping: Is my site alive and well?
  * Is my server up and running?
* tracert: How am I getting there?
* ICMP - Internet Control Message Packet
  * Way of communicating to server (commands)

## VIM

* VIM
  * VI Improved
  * Vim isn't an editor designed to hold its users' hands. It is a tool, the use of which must be learned.
  * A ubiquitous text editor
  * Why should I care? Because servers don't have GUIs.
  * Go into VIM:
    * $ vi
  * VI modes
    * command mode
    * insert mode: press i
    * last-line mode
  * To get out of insert mode: press esc key
  * <https://vimgifs.com/i>
  * VIM command mode
    * Undo: press u
    * Redo: press Ctrl + r
    * Delete a line: press dd.
    * Search: type /Hello
      * Move to next instance from top: press n
      * Search from bottom of document to top: press shift + n
    * Close/quit Vi without savig: press :q
    * Save and exit: press :wq
    * Save file: :w testfoo
    * Open vi: vi somefilename
    * <https://linuxmoz.com/vi-commands-cheat-sheet>
    * <http://vim.wikia.com/wiki/Copy,_cut_and_paste>

## Servers

* Loggin`g into a server
  * $ ssh student@45.55.24.145
  * iamagreatengineer
* SSH (Secure Socket Shell)
  * Way of connecting to remote devices
  * Authentication
    * username/password
    * ssh key
  * Public Key Authentication
* Creating an SSH Key
  * $ cd ~/.ssh/
  * $ ssh-keygen -t rsa
  * $ less my_key2.pub
* Don't lose your private key!

## VPS and Cloud Computing

* Dedicated server
* VPS - Virtual Private Server
* $ cat ~/.ssh/my_key.pub
* Log into your server
  * $ ssh -i ~/.ssh/my_key root@$YOUR_SERVER_IP
* $ top
  * Equivalent to task manager on Windows.
  * Tells you what is happening on your system.
  * $ apt install htop
* Set up your server
  * Update software
    * $ apt-get update
  * Create a new user
    * $ adduser $USERNAME
  * Add user to sudo group
    * usermod -aG sudo $USERNAME
  * Switch user
    * $ su $USERNAME
  * Make sure user has sudo access
    * $ sudo cat /var/log/auth.log
    * $ sudo !!
      * will replay previous command as sudo.
  * Log into server as user created
    * $ ssh $USERNAME@$YOUR_SERVER_IP

## Logging in with SSH

* Set up your server
  * $ cat ~/.ssh/my_key.pub | ssh $USERNAME@$SERVER_IP "mkdir -p ~/.ssh && cat >> ~/.ssh/authorized_keys"
  * ssh -i my_key2 phil@142.93.195.54

## Disable root access

* $ sudo vi /etc/ssh/sshd_config
  * PermitRootLogin no
* $ sudo service sshd restart

## Getting a Domain Name

* <https://www.namecheap.com>
* <https://support.dnsimple.com/articles/differences-between-a-cname-alias-url/>
* <http://keycode.info>
* <https://github.com/wesbos/keycodes/blob/gh-pages/CNAME>

## Nginx (engine x)

* A HTTP and reverse proxy server, a mail proxy server, and a generic TCP/UDP proxy server.
* Install nginx
  * $ sudo apt-get install nginx
* Start nginx
  * $ sudo service ngix start
  * Type your server's IP address into a browser.
* Uninstall nginx
  * $ sudo apt-get remove nginx
* Domain name lookup
  * $ nslookup swaggy.fun
* Nginx configuration
  * $ sudo cat /etc/nginx/sites-available/default
  * $ sudo less /etc/nginx/sites-available/default
* Install git
  * $ sudo apt-get install git
* Install node and npm
  * $ sudo apt-get install nodejs npm
  * $ nodejs --version
* symlink nodejs to node
  * $ sudo ln -s /usr/bin/nodejs /usr/bin/node
  * $ node --version
* Make a web directory (if it doesn't already exist)
  * $ sudo mkdir -p /var/www
* Changing permissions
  * Change ownership of the web directory to the current user
    * $ sudo chown -R $USER:$USER /var/www
    * cd /var/www
* Clone git repo
  * git clone https://github.com/young/Dev-Ops-for-Frontend.git
* Rename director to app/
  * $ mv Dev-Ops-for-Frontend/ app/
* Move into to app directory
  * cd app/
* install npm packages
  * npm i
* Start the server
  * node app.js
* Changing server ports
  * $ sudo vi /etc/nginx/sites-available/default
  * location / {
    proxy_pass http://127.0.0.1:3001/;
  }
* Restart ngix
  * $ sudo service nginx reload
  * OR
  * $ sudo service nginx restart
* Restart node server
  * $ node app.js
* swagggy.fun --> 142.93.195.54 --> Nginx/Apache --> Node
* HTML
  * Move into app directory
    * cd /var/www/app
  * Make a new branch
    * git checkout -b some_branch_name
  * Modify the html to your hearts content
    * vi index.html

## Build and Deploy

* Gulp - a JavaScript task runner
  * Similar: Grunt, Broccoli, Brunch, Jake
* Create gulp tasks
  * Open gulpfile.js in VI. It's in the root directory of the demo project.
  * Fill in the gulp task clean-css so that any css files in the dist folder are removed.
  * Add your new task to build task.
* Installing Gulp
  * Fixing npm permissions
    * <https://docs.npmjs.com/getting-started/fixing-npm-permissions>
  * $ sudo mkdir -p /usr/local/lib/node_modules
  * $ npm config get prefix
  * $ sudo chown -R $(whoami) $(npm config get prefix)/{lib/node_modules,bin,share}
  * $ npm i -g gulp
  * $ gulp build
  * $ ls dist/

## Keep app running

* Forever - a process manager that keeps a process running indefinitely
* Run Forever
  * $ pwd
  * /var/www/app
  * $ npm i -g forever
  * forever start app.js
  * forever stopall

## Log files

* Create a log file for the forever process
  * $ sudo mkdir /var/log/forever
* Change owner to current user
  * $ sudo chown -R $USER /var/log/forever
* Start forever and log the output
  * $ forever start app.js >> /var/log/forever/forever.log
  * cat /var/log/forever/forever.log
* Tailing a log file
  * Tail looks at the bottom of the log file. There is also head. Tells you what is going on in real time.
  * $ sudo tail -f /var/log/auth.log

## Putting it all together

* package.json
  * "deploy": "gulp build && forever start app.js >> /var/log/forever/forever.log"
* $ npm run deploy