file_name = "sample.txt"

# Reading the contents of the file
with open(file_name, 'r') as file:
    contents = file.read()

# Display number of words
num_words = len(contents.split())

# Display number of characters
num_characters = len(contents)

# Display number of vowels
vowels = "aeiou"
num_vowels = sum(1 for char in contents if char.lower() in vowels)

# Display number of lines
num_lines = contents.count('\n') + 1

# Reverse each word and display
reversed_words = ' '.join(word[::-1] for word in contents.split())

print("Number of words:", num_words)
print("Number of characters:", num_characters)
print("Number of vowels:", num_vowels)
print("Number of lines:", num_lines)
print("Reversed words:", reversed_words)
