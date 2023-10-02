list = [[1],
        [1,1], 
        [1, 2, 1],
        [1, 3, 3, 1],
        [1, 4, 6, 4, 1]
        ]
for i, sub in enumerate(list):
    # for j in range(len(sub)):
    #     col = list[j]
    #     print(col)
    if i == 2:
        if i > 0:
            prev_row = list[i - 1]
            value = prev_row[1] + prev_row[0]
            list.append(value)
            print(list)