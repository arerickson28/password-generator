# password-generator
Web Dev JS assignment


# Prompts 1 for character length
-convert entry from string type to number type (NaN is considered a number)
* validate entry type is a number
    * if statement to check this
        * yes, great...what now?
        * no, try again...how?

* validate entry is between 8 and 128 
    * if statement to check this
        * yes, great...what now?
        * no, try again...how?



# Prompt 2 for special characters
--Option, a yes/no prompt for each: upper, lower, number, special (convert response to lower)  
--Option, one prompt then use "check if contains" upper, lower, number, special (convert response to lower) 
--Convert to boolean 
--Append answer to a list (four values in list, yes/no for each of the four choices)  


# Use information gathered from prompt 1 & 2 to generate password
* Create four lists, one for upppercase letters, lowercase letters, digits, and special
* Select character cattegories to be included 
* validate that at least one category of characters has been included
* Use password length to randomize the number of occurrences to allocate to each category
* Each category uses the allocated number for the number of itterations of randomly selecting charaters from their respective list. Each time appending the character to a master list.
* Finally, shuffle master list.
