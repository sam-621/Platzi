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

if __name__ == '__main__':

    list_1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]

    result = recursive_binary_search(list_1, 0, len(list_1), 19)
    print(result)