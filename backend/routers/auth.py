from fastapi import APIRouter

router = APIRouter()

@router.post("/register")
def register(username: str, password: str):
    return {"message": f"User {username} registered successfully"}

@router.post("/login")
def login(username: str, password: str):
    if username == "admin" and password == "1234":
        return {"message": "Login successful"}
    return {"message": "Invalid username or password"}