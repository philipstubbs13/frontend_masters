# Productivity Git for Developers

* <https://egghead.io/lessons/git-automate-the-cleanup-of-my-feature-branch-with-git-autosquash>

## Only commit some of my currently modified files into the repository

```bash
git status
git add src/app/app.component.*
git commit -m "feat: change the title of the app"
git status
git add .
git commit -m "install @angular/material"
git status
git log
```

## Make my git log look pretty and readable

```bash
git log

ls ~/.gitconfig
# Sample gitconfig
#

# ***

[alias]
  lg = log --color --graph --pretty=format:'' --abbrev-comit --branches


git lg
```

## Move some commits to a separate branch that I have accidentally committed to master

```bash
git checkout -b app-refactoring
g lg
git checkout master
g lg
git reset --hard 9a7f06b
```

## Update my feature branch with the latest changes from master.

```bash
git pull
git checkout app-refactoring
git merge master
```

* git rebase takes every commit from master and merges it on top of your commits in your feature branch. Our feature branch will be shifted upwards as if we just created it out of the latest version of master. Only do that if it is your own personal branch and not shared with others.

```bash
git pull
git checkout app-refactoring
git rebase master
g lg
```

## Push a rebased local branch by using '--force-with-lease'

```bash
git push -u origin app-refactoring
git checkout master
git add .
git commit -m "docs update readme"
g lg
git checkout app-refactoring
git rebase master
g lg
git push
git push --force-with-lease
```

* --force-with-lease is more secure than -f as it does additional checks if no one else has modified that branch.

## Polish my git feature branch before merging or submitting for review.

```bash
git lg
git rebase -i 2e5755c
g lg
```

## Automate the cleanup of my feature branch with Git Autosquash

```bash
g lg
git add .
git commit -am "update readme"
git add .
git commit --fixup 250c249
g lg
git add .
git commit --fixup :/update
g lg
git rebase -i --autosquash 0c45920
```