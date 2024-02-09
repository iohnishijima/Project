from fastapi import FastAPI, HTTPException, Form
from fastapi.middleware.cors import CORSMiddleware
from starlette.responses import JSONResponse
from fastapi_mail import FastMail, MessageSchema, ConnectionConfig, MessageType
from pydantic import EmailStr, BaseModel
from typing import List
import os

class ContactForm(BaseModel):
    name: str
    email: EmailStr
    message: str

app = FastAPI()

recip = os.getenv("MAIL_RECIPIENTS")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class EmailSchema(BaseModel):
    email: List[EmailStr]
    
mail_username = os.environ.get('MAIL_USERNAME')
mail_password = os.environ.get('MAIL_PASSWORD')
mail_server = os.environ.get('MAIL_SERVER')
mail_from = os.environ.get('MAIL_FROM')
mail_recip = os.environ.get('MAIL_RECIPIENTS')

conf = ConnectionConfig(
    MAIL_USERNAME = str(mail_username),
    MAIL_PASSWORD = str(mail_password),
    MAIL_FROM = str(mail_from),
    MAIL_PORT = 587,
    MAIL_SERVER = str(mail_server),
    MAIL_FROM_NAME="TestForm",
    MAIL_STARTTLS = True,
    MAIL_SSL_TLS = False,
    USE_CREDENTIALS = True,
    VALIDATE_CERTS = True
)

@app.post("/send-email/")
async def send_email(contact: ContactForm):
    message = MessageSchema(
        subject="Contact Form Submission",
        recipients=[recip],
        body=f"Name: {contact.name}\nEmail: {contact.email}\nMessage: {contact.message}",
        subtype="plain",
    )

    fm = FastMail(conf)
    await fm.send_message(message)
    return JSONResponse(status_code=200, content={"message": "email has been sent"})
