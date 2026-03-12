from fastapi import APIRouter
import os
from dotenv import load_dotenv
from openai import OpenAI

router = APIRouter()

# load .env variables
load_dotenv()

# read API key
api_key = ""

# create client
client = OpenAI(api_key=api_key)

@router.get("/career-advice")
def career_advice():

    response = client.chat.completions.create(
        model="gpt-4o-mini",
        messages=[
            {"role": "user", "content": "Give 3 career tips for computer science students"}
        ]
    )

    return {"advice": response.choices[0].message.content}