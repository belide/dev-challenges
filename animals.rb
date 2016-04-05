class Bird
	def talk (name)
		puts "#{name} says chirp! Chirp!"
	end
	def move(name, destination)
		puts "#{name} is flying to the #{destination}"
	end
end

class Dog
	def name=(new_value)
		@name = new_value
	end
	
	def name
		@name
	end
	
	def age=(new_value) 
		@age = new_value
	end

	def age
		@age
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

fido = Dog.new
fido.name = "Fido"
fido.age = 2
rex = Dog.new
rex.name = "Rex"
rex.age = 4
fido.report_age
rex.report_age


# bird.talk (bird_name)
# cat.move(cat_name, "house")