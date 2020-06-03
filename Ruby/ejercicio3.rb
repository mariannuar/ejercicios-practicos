# author: Mariana Nunez Arguedas
class MaximumNumber
    def initialize(myArray)
        @myArray = myArray
    end

    def print()
        number = nil
        @myArray.each do |element|
            if  number == nil || number < element
                number = element
            end
        end
        puts "The maximum number of the array is: #{number}"
    end
end

myArray = [13,2,4,35,1]
exercise = MaximumNumber.new(myArray)
exercise.print()
gets()