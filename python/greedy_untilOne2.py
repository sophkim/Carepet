# 1이 될 때까지 - 단순

n, k = map(int, input().split())
count = 0

# n이 k 이상이라면 k로 계속 나누기
while n >= k:
    # n이 k로 나누어 떨어지지 않는다면 n에서 1씩 빼기
    while n % k != 0:
        n -= 1
        count += 1

    # k로 나누기
    n /= k
    count += 1

# 마지막으로 남은 수에 대해 1씩 빼기
while n > 1:
    n -= 1
    count += 1

print(count)