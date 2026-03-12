import requests

PEXELS_API_KEY = ""
PEXELS_BASE_URL = "https://api.pexels.com/v1/"

headers = {
    "Authorization": PEXELS_API_KEY
}

def search_images(query, per_page=5):
    response = requests.get(f"{PEXELS_BASE_URL}search", headers=headers, params={"query": query, "per_page": per_page})
    if response.status_code == 200:
        return response.json()["photos"]
    else:
        return []