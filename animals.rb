class Bird
	def talk (name)
		puts "#{name} says chirp! Chirp!"
	end
	def move(name, destination)
		puts "#{name} is flying to the #{destination}"
	end
end

class Dog
	def talk(name)
		puts "#{name} says bark!"
	end
	def move(name, destination)
		puts "#{name} is running to the #{destination}"
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

bird = Bird.new
bird_name = "Twitter"
dog = Dog.new
dog_name = "Lucy"
cat = Cat.new
cat_name = "Dice"


bird.move(bird_name, "tree")
dog.talk (dog_name)
bird.talk (bird_name)
cat.move(cat_name, "house")