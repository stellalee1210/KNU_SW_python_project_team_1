# firebase_config.py
import os
import firebase_admin
from firebase_admin import credentials, db as firebase_db
from dotenv import load_dotenv
from pathlib import Path


BASE_DIR = Path(__file__).resolve().parent.parent
load_dotenv(os.path.join(BASE_DIR, '.env'))

# Firebase 인증서 및 DB 초기화
cred_path = os.getenv("FIREBASE_CREDENTIAL_PATH")
database_url = os.getenv("FIREBASE_DATABASE_URL")


# ✅ 중복 초기화 방지
if not firebase_admin._apps:
    cred = credentials.Certificate(cred_path)
    firebase_admin.initialize_app(cred, {
        'databaseURL': database_url
    })

# DB 객체 준비
db = firebase_db
