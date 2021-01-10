import time

def recursive_binary_search(list_1, left, right, objective):

    if left > right:
        return False

    middle = (left + right) // 2
    
    if middle >= len(list_1):
        return False

    if list_1[middle] == objective:
        return list_1[middle]
    
    if list_1[middle] < objective:
        return recursive_binary_search(list_1, middle + 1, right, objective)
    else:
        return recursive_binary_search(list_1, left, right - 1, objective)

def binary_search(objective, list_1):
    left = 0
    right = len(list_1)
    middle = (left + right) // 2

    while (left <= right):

        #print(f'middle: {middle} left: {left} right: {right} len: {len(list_1)}')

        middle = (left + right) // 2

        if middle >= len(list_1):
            return False
        if list_1[middle] == objective:
            return list_1[middle]
        if list_1[middle] < objective:
            left = middle + 1
        else:
            right = middle - 1  
    return False

if __name__ == '__main__':

    list_1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23,24,25,26,27,28,29,30,31,32,33,34,35,36,3,38,39,40,41,42,43,44,45,46,47,48,49,51]

    start = time.time()
    result = binary_search(17, list_1)
    end = time.time()
    print(f'{result}, complete in {(end - start)} ITERATIVE')

    start = time.time()
    result = recursive_binary_search(list_1, 0, len(list_1), 19)
    end = time.time()
    print(f'{result}, complete in {(end - start)} RECURSIVE')