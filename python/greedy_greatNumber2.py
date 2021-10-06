# 큰 수의 법칙 - 단순

# n, m, k를 공백으로 구분하여 입력받기
n, m, k = map(int, input().split())  
# n개의 수를 공백으로 구분하여 입력받기
data = list(map(int, input().split()))

data.sort() # 오름차순 정렬
first = data[n - 1]     # 가장 큰 수 
second = data[n - 2]    # 두 번째로 큰 수 

result = 0

while True:
    for i in range(k):
        if m == 0: break
        result += first
        m -= 1
    if m == 0: break
    result += second
    m -= 1

print(result)