from fastapi import FastAPI, Request
# from fastapi.templating import Jinja2Templates


app = FastAPI()
# templates = Jinja2Templates(directory="templates")


@app.get("/")
def home() -> dict[str, str]:
    return {"status": "Success 222"}
