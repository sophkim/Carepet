# 1이 될 때까지

n, k = map(int, input().split())
count = 0

while True:
    # n이 k로 나누어지는 수가 될 때까지 1빼기
    target = (n//k) * k
    count += (n - target)
    n = target
    
    # 더 이상 나눌 수 없을 때 반복문 탈출
    if n < k:
        break

    # k로 나누기
    count += 1
    n //= k

# 마지막으로 남은 수에 대해 1씩 빼기
count += (n - 1)
print(count)
