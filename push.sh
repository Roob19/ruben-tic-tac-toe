#!/bin/bash
git add -A
echo "<><><><><>"
echo
echo "Enter commit message: "
read cmtMsg
git commit -m "$cmtMsg"
echo "<><><><><>"
echo
echo "Enter branch to push (master or main)?"
read pshBrnch
git push -u origin $pshBrnch
echo "<><><>"
echo
echo "Push complete :) "
echo
echo "<><><>"