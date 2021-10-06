# 숫자 카드 게임- 2중 반복문 구조

N, M = map(int, input().split())

result = 0

# 한 줄씩 입력받아 확인
for i in range(N):
    data = list(map(int, input().split()))

    min_value = 10001   # 현재 줄에서 가장 작은 수 찾기
    for j in data:
        min_value = min(min_value, j)
    result = max(result, min_value) # 가장 작은 수들 중에서 가장 큰 수 찾기

print(result)