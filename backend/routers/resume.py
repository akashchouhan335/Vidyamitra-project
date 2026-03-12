from fastapi import APIRouter

router = APIRouter()

@router.get("/resume")
def parse_resume():
    return {"message": "Resume parsing module working"}