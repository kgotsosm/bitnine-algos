def is_palindrome(word):
    """
    Checks if a given word is a palindrome (spelled the same backwards and forwards).

    Parameters:
    word (str): The word to be checked.

    Returns:
    str: The original word if it is a palindrome; otherwise, the reversed word.
    """
    # Convert the word to lowercase
    lower_word = word.lower()

    # Remove spaces from the word
    lower_word.replace(" ", "")

    # Reverse the characters
    backward = lower_word[::-1]

    # Check if the reversed word and original are the same
    if backward == lower_word:
        # It's a palindrome, return the original word
        return word 
    else:
        # It's not a palindrome, return the reversed word
        return backward

# Get the word to check from user input
to_check = str(input("Enter the word you want to check: "))

# Call the is_palindrome function and print the result
print(is_palindrome(to_check))
