# firebase_config.py

import firebase_admin
from firebase_admin import credentials, db

# Firebase Admin SDK JSON 키 파일 경로
cred = credentials.Certificate("firebase-adminsdk.json")

# Firebase Realtime Database 주소
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://jcb-db-default-rtdb.firebaseio.com/'
})
