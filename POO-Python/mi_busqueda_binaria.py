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

    list_1 = [1,2,3,4,5,6,7,8,9,10]

    result = binary_search(11, list_1)

    print(result)
        