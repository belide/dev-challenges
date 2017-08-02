#calculates the maximum number of 1s in a row in a binary representation of a given number

def count(n)
    binary = n.to_s(2)
    num = binary.length + 1
    puts binary
    counter = 1
    save = []

    for i in 0..num do
        if (binary[i] == "1")
            if (!binary[i+1]) && (counter > 0) && (counter != num-1)
                save.push(counter)
                counter = counter + 1
            elsif (binary[i+1] == "1")
                counter = counter + 1
            elsif (binary[i+1] == "0")
                save.push(counter)
                counter = 0
            end
            save.push(counter)
        end
    end

    puts save.max
end

count(951)
count(439)
count(65535)
count(1000000)
