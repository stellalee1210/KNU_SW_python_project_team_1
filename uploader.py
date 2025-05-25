import firebase_admin
from firebase_admin import credentials, db
import pandas as pd
import time

# 🔑 Firebase 인증 및 DB 연결
cred = credentials.Certificate("jcb-db-firebase.json")
firebase_admin.initialize_app(cred, {
    "databaseURL": "https://jcb-db-default-rtdb.firebaseio.com/"
})

# 🔽 CSV 읽기 + NaN 제거
df = pd.read_csv("전체_레시피_이미지포함.csv", encoding="utf-8-sig",
                 quotechar='"', on_bad_lines='skip')
df = df.fillna("")  # 🔥 여기 핵심! NaN 제거

# 🔼 업로드
up_size=10000
start_index = 0
total = len(df)
ref = db.reference("Recipes")
for start in range(start_index, total, up_size):
    end = min(start + up_size, total)
    batch_df = df.iloc[start:end]

    print(f"🚚 업로드 중: {start} ~ {end-1} ({end-start}개)")

    for idx, row in batch_df.iterrows():
        data = row.to_dict()
        try:
            ref.child(str(idx)).set(data)
            time.sleep(0.005) # 요청 간 간격 (지연 : 5ms)
        except Exception as e:
            print(f"⚠️ 업로드 실패 (index {idx}): {e}")

    print(f"✅ 완료: {start} ~ {end-1}")

print("✅ Realtime DB 업로드 완료!")
