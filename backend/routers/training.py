from fastapi import APIRouter

router = APIRouter()

@router.get("/training")
def training_plan():
    return {"message": "Training plan module working"}