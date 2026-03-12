from fastapi import APIRouter

router = APIRouter()

@router.get("/quiz")
def quiz():
    return {"message": "Quiz and interview simulation module working"}