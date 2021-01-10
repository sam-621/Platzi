def binary_search_recursive(list_1, left, right, objective):

    if left > right:
        return False

    middle = (left + right) // 2
    
    if middle >= len(list_1):
        return False

    if list_1[middle] == objective:
        return list_1[middle]
    
    if list_1[middle] < objective:
        return binary_search_recursive(list_1, middle + 1, right, objective)
    else:
        return binary_search_recursive(list_1, left, right - 1, objective)

if __name__ == '__main__':

    list_1 = [1,2,3,4,5,6,7,8,9,10]

    result = binary_search_recursive(list_1, 0, len(list_1), 15)
    print(result)