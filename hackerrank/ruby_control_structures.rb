# defining which class of objects does what

obj = '10\nHacker\nSubmission\nTestCase\nSubmission\nHacker\nHacker\nSubmission\nTestCase\nContest\nHacker'

def identify_class(obj)
    data_array = obj.split('\n')
    $num = data_array[0].to_i

    for i in 1..$num
        puts case data_array[i]
            when "Hacker"
            "It's a Hacker!"
            when "Submission"
            "It's a Submission!"
            when "TestCase"
            "It's a TestCase!"
            when "Contest"
            "It's a Contest!"
            else
            "It's an unknown model"
        end
    end
end

identify_class(obj)