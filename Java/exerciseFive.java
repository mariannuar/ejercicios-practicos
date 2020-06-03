/**
 * Exercise 5
 * @MarianaN_Arguedas
 */

public class exerciseFive{
    
    public static void main(String[] args) {

        //Variables
        int [] myArray = {1,2,2,5,4,6,7,8,8,8};
        int count = 0;
        int arrayElement = 0;

        //For
        for(int i = 0; i < myArray.length; i++){
            int temporaryElement = myArray[i];
            int temporaryCount = 0;

            for(int position = 0; position < myArray.length; position++){
                
                if(myArray[position] == temporaryElement){
                    temporaryCount++;

                    if(temporaryCount > count){
                        
                        arrayElement = temporaryElement;
                        count = temporaryCount;
                    }//Second if

                }//If

            }//Second for

        }//For

        System.out.println("Number with more frequencies:" +arrayElement);
        System.out.println("Frequency:" +count);
    }
}