#author: Mariana Nunez Arguedas
class Histogram
    def initialize(myArray)
        @myArray = myArray
    end

    def print()
         
        counts = Hash.new(0);

        @myArray.each do |number| 
            counts[number] += 1 
        end
        puts "The answer is: "

        index = 1
        while index <= 5
            puts "#{index}: #{'*' * counts[index].to_i}" 
            index += 1
        end
    end

end

myArray = [1,2,1,3,3,1,2,1,5,1]
exercise= Histogram.new(myArray)
exercise.print()
gets()