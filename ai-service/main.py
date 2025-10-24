from fastapi import FastAPI, Request
from transformers import AutoTokenizer, AutoModelForSequenceClassification
import torch

app = FastAPI()

# Load model once on startup
model_name = "roberta-base-openai-detector"
tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForSequenceClassification.from_pretrained(model_name)

@app.post("/detect")
async def detect_ai(request: Request):
    data = await request.json()
    text = data.get("text", "")

    # Tokenize and get predictions
    inputs = tokenizer(text, return_tensors="pt", truncation=True, padding=True)
    with torch.no_grad():
        outputs = model(**inputs)
        probs = torch.softmax(outputs.logits, dim=1)[0]

    human_prob = probs[0].item() * 100
    ai_prob = probs[1].item() * 100

    return {"ai_probability": ai_prob, "human_probability": human_prob}
