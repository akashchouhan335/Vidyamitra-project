from fastapi import FastAPI
from routers import resources
from routers import user_data
from routers import auth, resume, skills, training, quiz, progress, ai, resources, user_data
from fastapi import FastAPI
from pexels_client import search_images

app = FastAPI()

@app.get("/test-pexels")
def test_pexels():
    results = search_images("communication skills")
    return {"count": len(results), "images": [photo["url"] for photo in results]}

app = FastAPI()

app.include_router(auth.router)
app.include_router(resume.router)
app.include_router(skills.router)
app.include_router(training.router)
app.include_router(quiz.router)
app.include_router(progress.router)

# AI router
app.include_router(ai.router, prefix="/ai", tags=["AI"])
app.include_router(resources.router, prefix="/resources", tags=["Learning Resources"])
app.include_router(user_data.router, prefix="/supabase", tags=["Supabase"])

@app.get("/")
def home():
    return {"message": "VidyaMitra API Running"}