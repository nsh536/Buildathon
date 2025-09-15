# API Usage

- POST `/api/generate`  
  Request: `{ "prompt": "<text prompt>" }`  
  Response: `{ "text": "<AI generated response>" }`

- Uses OpenAI Chat Completion API (GPT-4 model)
- Requires valid OPENAI_API_KEY environment variable
