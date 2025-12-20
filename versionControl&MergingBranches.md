# Version Control Tags

git tag -a receipt-maker-v1.0 -m "Stable version 1.0"

## Check Tags

git tag

## Send all Tags

git push origin --tags

## Deleting Branches

<!-- show available branches -->
git branch  

 <!-- move to main -->
git checkout main

<!-- delete branch locally -->
git branch -d dev

<!-- delete branch on github -->
git push origin --delete dev

### Merging Branches

<!-- make sure you are on the dev branch -->
commit on dev branch

<!-- make sure you are on the main branch -->
git checkout main
type md after changing to the main branch
