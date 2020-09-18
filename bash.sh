echo 'Hello, what is your age?'
read age
echo 'You said your age is' $age
read answer
if [ $answer == 'true' ]
	then echo 'Thanks for confirming'
	else echo 'Please enter your real age'
fi


