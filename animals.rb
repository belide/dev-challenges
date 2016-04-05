class Bird
	def talk (name)
		puts "#{name} says chirp! Chirp!"
	end
	def move(name, destination)
		puts "#{name} is flying to the #{destination}"
	end
end

class Dog
	def dog_name
		@name = "Lucy"
	end
	
	def talk
		puts "#{@name} says bark!"
	end
	
	def move(destination)
		puts "#{@name} is running to the #{destination}"
	end

	def dog_age
		@age = 6
	end

	def report_age
		puts "#{@name} is #{@age} years old"
	end
end

class Cat
	def talk(name)
		puts "#{name} says meow!"
	end
	def move(name, destination)
		puts "#{name} is walking to the #{destination}"
	end
end

dog = Dog.new
dog.dog_name
dog.move("yard")
dog.dog_age
dog.report_age


# bird.talk (bird_name)
# cat.move(cat_name, "house")