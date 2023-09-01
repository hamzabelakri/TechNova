import { NextResponse } from "next/server";
import connect from "@/utils/db";
import Contact from "@/models/Contact";

export const Get = async (request) => {

  
    try {
      await connect();
  
      const messages = await Contact.find();
  
      return new NextResponse(JSON.stringify(messages), { status: 201 });
    } catch (err) {
      return new NextResponse("Database Error", { status: 500 });
    }
  };


export const POST = async (request) => {
  const body = await request.json();

  const newContact = new Contact(body);

  try {
    await connect();

    await newContact.save();

    return new NextResponse("Message has been sent", { status: 201 });
  } catch (err) {
    return new NextResponse("Database Error", { status: 500 });
  }
};