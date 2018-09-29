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

* Logging into a server
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
