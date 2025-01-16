"use client";
import { useState } from "react";
import Input from "../Input";
import TextArea from "../TextArea";
import ButtonCTA from "../ButtonCTA";
import { sendEmail } from "@/lib/sendEmail";

export type FormData = {
  name: string;
  email: string;
  message: string;
};

type Errors = Partial<FormData>;

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<Errors>({});
  const [isFormValid, setIsFormValid] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [response, setResponse] = useState<string | null>(null);

  
  return (
    <>
      <div id="contact" className="flex flex-col md:flex-row justify-between">
        <div className="md:text-start md:w-[445px]">
          <h1>Contact</h1>
          <p className="pb-5"></p>
          <a href="https://www.linkedin.com/in/stephanie-zwingelstein-790146295/" target="_blank" rel="noopener noreferrer">
          Rejoignez moi sur LinkedIn !
          </a>
          <p className="pb-12"></p>
        </div>
      </div>
      <p className="pb-20"></p>
    </>
  );
}
