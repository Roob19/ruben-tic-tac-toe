#!/bin/bash
git add -A
echo "Enter commit message (add punctuations): "
read cmtMsg
git commit -m "'$cmtMsg'"
echo "Enter branch to push (master or main)?"
read pshBrnch
git push -u origin $pshBrnch
echo "<><><>"
echo
echo "Push complete :) "
echo
echo "<><><>"