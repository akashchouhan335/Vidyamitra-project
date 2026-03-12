from fastapi import APIRouter
from supabase_client import supabase

router = APIRouter()

@router.post("/save-user")
def save_user(data: dict):

    response = supabase.table("users").insert(data).execute()

    return response.data