import time

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

import yfinance as yf

app = FastAPI()

origins = [
    "http://localhost:3000",
    "localhost:3000"
]
# crappy database
data = [
    {
        "id": 1,
        "name": "SPY",
        "hand_type": 1,
        "hand_count": 3,
        "rocket_type": 0,
        "rocket_count": 0,
        "shortPercentOfFloat": 0.0,
    },

    {
        "id": 2,
        "name": "BLU",
        "hand_type": 1,
        "hand_count": 4,
        "rocket_type": 0,
        "rocket_count": 0,
        "shortPercentOfFloat": 0.0,
    },

    {
        "id": 3,
        "name": "AAPL",
        "hand_type": 1,
        "hand_count": 4,
        "rocket_type": 0,
        "rocket_count": 0,
        "shortPercentOfFloat": 0.0,
    }
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"]
)


# functions
# this gets the table `data`
@app.get("/api/table")
async def table():
    return data


# this calculates the number of hands/rockets (good or bad) for a `stock`
# note: do not make this async without accompanying await or you will get many errors!
def calc(stock: str):
    ticker = yf.Ticker(stock)
    history = ticker.history(period="1y", auto_adjust=True)
    open_1y = history.iloc[0, history.columns.get_loc('Open')]
    open_0y = history.iloc[-1, history.columns.get_loc('Open')]
    open_2m = history.iloc[40, history.columns.get_loc('Open')]

    hand = [0, 0]
    # diamond hands i.e. x% = 25% in 1 year
    # diff_1y is the number of emojis
    diff_1y = int(round(((open_0y - open_1y) / open_1y) / 0.25))
    if diff_1y > 0:
        hand = [1, diff_1y]

    elif diff_1y < 0:
        hand = [-1, -diff_1y]

    # rocket ship i.e. x% = 45% in 2 months
    rocket = [0, 0]
    diff_2m = int(round(((open_0y - open_2m) / open_2m) / 0.45))
    if diff_2m > 0:
        rocket = [2, diff_2m]
    elif diff_2m < 0:
        rocket = [-2, -diff_2m]

    # short percentage of float
    spf = -1.0
    if "shortPercentOfFloat" in ticker.info:
        if ticker.info["shortPercentOfFloat"] is not None:
            spf = ticker.info["shortPercentOfFloat"] * 100

    return hand, rocket, spf


@app.get("/", tags=["root"])
async def read_root() -> dict:
    return {"message": "Hello World."}


@app.on_event("startup")
def startup_event():
    for entry in data:
        new_data = calc(entry["name"])
        entry["hand_type"] = new_data[0][0]
        entry["hand_count"] = new_data[0][1]
        entry["rocket_type"] = new_data[1][0]
        entry["rocket_count"] = new_data[1][1]
        entry["shortPercentOfFloat"] = new_data[2]
    return
