from fastapi import APIRouter

router = APIRouter()

@router.get("/progress")
def progress_tracking():
    return {"message": "Progress tracking module working"}