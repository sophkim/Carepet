# 거스름돈

n = 1260    # 금액
count = 0   # 코인 개수

coin_types = [500, 100, 50, 10]

for coin in coin_types:
    count += n // coin  # 화폐로 거슬러 줄 수 있는 동전 개수 세기
    n %= coin 

print(count)