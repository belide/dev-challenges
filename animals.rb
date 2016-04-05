class Bird
	def talk (name)
		puts "#{name} says chirp! Chirp!"
	end
	def move(name, destination)
		puts "#{name} is flying to the #{destination}"
	end
end

class Dog
	attr_reader :name, :age

	def name=(value)
		if value == ""
			raise "Name can't be blank!"
		end
		@name = value
	end
	def age=(value)
		if value < 0 || value > 50
			raise "Age #{value} is invalid!"
		end
		@age = value
	end
	def report_age
		puts "#{@name} is #{@age} years old"
	end

	def move(destination)
		puts "#{@name} runs to the #{destination}"
	end

	def talk
		puts "#{@name} says Bark!"
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
dog.name = "Fido"
dog.age = 12
dog.report_age
dog.talk


# bird.talk (bird_name)
# cat.move(cat_name, "house")