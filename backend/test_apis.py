import os
import requests
from dotenv import load_dotenv  # ← make sure this line is added

load_dotenv()  # ← this loads your .env file

NEWS_API_KEY = os.getenv("")
EXCHANGE_API_KEY = os.getenv("")

# --- News API test ---
news_url = f"https://newsapi.org/v2/top-headlines?country=us&apiKey={NEWS_API_KEY}"
news_response = requests.get(news_url).json()

# Check if request was successful
if news_response.get("status") == "ok":
    print("Top 5 News Headlines:")
    for i, article in enumerate(news_response["articles"][:5], 1):
        print(f"{i}. {article['title']}")
else:
    print("News API error:", news_response)

# --- Exchange Rate API test ---
exchange_url = f"https://v6.exchangerate-api.com/v6/{EXCHANGE_API_KEY}/latest/USD"
exchange_response = requests.get(exchange_url).json()

if exchange_response.get("result") == "success":
    print("\nSample Exchange Rates (USD → INR, EUR, GBP):")
    print("USD → INR:", exchange_response["conversion_rates"]["INR"])
    print("USD → EUR:", exchange_response["conversion_rates"]["EUR"])
    print("USD → GBP:", exchange_response["conversion_rates"]["GBP"])
else:
    print("Exchange API error:", exchange_response)