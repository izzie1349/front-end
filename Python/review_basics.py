
###############
## Problem 1 ##
###############

# Given the string:
s = 'django'

# Use indexing to print out the following:
# 'd'
print(s[0])

# 'o'
print(s[-1])

# 'djan'
print(s[0:4])

# 'jan'
print(s[1:4])

# 'go'
print(s[-2:])

# Bonus: Use indexing to reverse the string
print(s[::-1])


###############
## Problem 2 ##
###############

# Given this nested list:
l = [3,7,[1,4,'hello']]

# Reassign "hello" to be "goodbye"
l[2][2] = 'goodbye'
print(l)

###############
## Problem 3 ##
###############

# Using keys and indexing, grab the 'hello' from the following dictionaries:

d1 = {'simple_key':'hello'}
print(d1['simple_key'])

d2 = {'k1':{'k2':'hello'}}
print(d2['k1']['k2'])

d3 = {'k1':[{'nest_key':['this is deep',['hello']]}]}
print(d3['k1'][0]['nest_key'][1][0])


###############
## Problem 4 ##
###############

# Use a set to find the unique values of the list below:
mylist = [1,1,1,1,1,2,2,2,2,3,3,3,3]
mylist = set(mylist)
print(mylist)


###############
## Problem 5 ##
###############

# You are given two variables:
age = 4
name = "Sammy"

# Use print formatting to print the following string:
print("Hello my dog's name is {0} and he is {1} years old".format(name, age))