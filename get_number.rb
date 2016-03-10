# Get My Number Game
# © 2016 Baboon

# Welcome screen
puts "Welcome to 'Get MY Number 2016!'"

# Get player's name

print "Whaaa? Whaaaat's your name? "
input = gets

# Chomp-chomp-chpmp
name = input.chomp

# Mwahahaing the player
puts "We've been expecting you, #{name.upcase}! Mwahaha!" 

# Generate and store random numbers
puts "Let's play a guessing game, #{name}. I've got a number between 1 and 100"
puts "Guess what? No, seriously, guess what number I've got. Please. Pretty please."
target = rand(100) + 1

# track the number of guesses

num_guesses = 0
guessed_it = false

until num_guesses == 10 || guessed_it
	puts "Hey, #{name}, you've got #{10-num_guesses} guesses remaining, so use them wisely. Or ELSE" # billy the snowman lived a beautiful life, in the sewer
	print "Carrots. Patatoes. I mean, make a guess: "
	guess = gets.to_i
	num_guesses += 1

	# Let the 87th Hunger games begin

	if guess > target
		puts "Overshoot!"
	elsif guess < target
		puts "Undershoot!"
	elsif guess == target
		puts "Here's you $10000000000000000000000000! You won, old sport"
		puts "You guessed my number in #{num_guesses} guesses!"
		guessed_it = true
	end
end

# The odds were never in your favor
unless guessed_it
	puts "We pay tribute and blah blah blah. Districts, Mockingjays and what not. The number was #{target}."
end

