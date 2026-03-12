import os
import requests
from fastapi import APIRouter

router = APIRouter()

YOUTUBE_API_KEY = os.getenv("")

@router.get("/learning-videos")
def get_learning_videos(skill: str):

    url = "https://www.googleapis.com/youtube/v3/search"

    params = {
        "part": "snippet",
        "q": skill + " tutorial",
        "type": "video",
        "maxResults": 5,
        "key": YOUTUBE_API_KEY
    }

    response = requests.get(url, params=params)
    data = response.json()

    videos = []

    for item in data["items"]:
        videos.append({
            "title": item["snippet"]["title"],
            "videoId": item["id"]["videoId"]
        })

    return {"videos": videos}