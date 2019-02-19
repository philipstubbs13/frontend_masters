# Git In-depth

* Course: <https://frontendmasters.com/courses/git-in-depth/>
* Slides and Code: <https://github.com/nnja/advanced-git>

## Exercise 1

* <https://github.com/nnja/advanced-git/blob/master/exercises/Exercise1-SimpleCommit.md>
  * <https://git.io/config-editor>
  * <https://git.io/use-less>

## Stage commits in chunks/hunks

```bash
git add -p
```

```bash
git add -p ?
```

## Git Stash - Basic use

* stash changes

```bash
git stash
```

* list changes

```bash
git stash list
```

* show the contents

```bash
git stash show stash@{0}
```

* apply the latest stash

```bash
git stash apply
```

* apply a specific stash

```bash
git stash apply stage@{0}
```

## Advanced stashing - keeping files

* Keep untracked files

```bash
git stash --include-untracked
```

* Keep all files (even ignored ones!)

```bash
git stash -all
```

## Advanced stashing - operations

* name stashes for easy reference

```bash
git stash save "WIP: making progress on foo"
```

* Start a new branch from a stash

```bash
git stash branch <optional branch name>
```

* Grab a single file from a stash

```bash
git checkout <stash name> -- <filename>
```

## Advanced Stashing - Cleaning the Stash

* Remove the last stash and applying changes

```bash
git stash pop
```

* tip: doesn't remove if there's a merge conflict

* Remove the last stash

```bash
git stash drop
```

* Remove the nth stash

```bash
git stash drop stash@{n}
```

* Remove all stashes

```bash
git stash clear
```

## Exercise 2 - staging and stashing

* <https://github.com/nnja/advanced-git/blob/master/exercises/Exercise2-StagingAndStashing.md>

## References

* References are pointers to commits.

## Exercise 3

* <https://github.com/nnja/advanced-git/blob/master/exercises/Exercise3-References.md>

## Merge Conflicts

* Git RERERE - Reuse Recorded Resolution
* Turn it on:

```bash
git config rerere.enabled true
```

* Use --global flag to enable for all projects.
* When I commit the conflict resolution, it's recorded.
* The resoltion is automatically reapplied.

## Exercise 4 - Merging and ReReRe

* <https://github.com/nnja/advanced-git/blob/master/exercises/Exercise4-MergingAndReReRe.md>

## Exercise 5 - History and Diffs

* <https://github.com/nnja/advanced-git/blob/master/exercises/Exercise5-HistoryAndDiffs.md>
