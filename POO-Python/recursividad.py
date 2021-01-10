def count(n):
    if n == 0:
        return 0
    print(n)
    return count(n - 1)

def go_through_a_list(list_1, i):

    if i == len(list_1)-1:
        print(list_1[i])
        return
    
    print(list_1[i])
    i += 1
    return go_through_a_list(list_1, i)

if __name__ == '__main__':

    list_1 = [1,2,3,4,5,6,7,8,9,10]
    go_through_a_list(list_1, 0)