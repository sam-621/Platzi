def binary_search(objective, list_1):
    left = 0
    right = len(list_1)
    middle = (left + right) // 2

    while (left <= right):

        print(f'middle: {middle} left: {left} right: {right} len: {len(list_1)}')

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

    list_1 = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23]

    result = binary_search(17, list_1)

    print(result)
        