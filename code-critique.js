// ASSESSMENT 2: Coding Critique with AI

// Enter the following prompt into ChatGPT or similar AI tool.

// Prompt: Create a function that takes in a string and logs the index of the first vowel.

// Copy and paste the code output here.
def find_first_vowel_index(input_string):
    vowels = "aeiouAEIOU"
    
    for index, char in enumerate(input_string):
        if char in vowels:
            print("The first vowel is at index:", index)
            return
    
    print("No vowels found in the string.")

# Example usage:
input_string = "Hello, World!"
find_first_vowel_index(input_string)

// Critique the code output. 
// Things to consider in your critique: Were you surprised by the output? Was the output what you expected? Is the correct output being rendered? What do you like about the code? What do you dislike? Are there best practices that are not being followed? Would you take a different approach? What did you learn? 

//The code appears to be correct and does what it's intended to do. It finds the index of the first vowel in the input string.
//The code is straightforward and easy to understand.
// It uses a loop to efficiently search for the first vowel, and it returns early once a vowel is found.
// It provides a message when no vowels are found in the string,The code is straightforward and easy to understand.
