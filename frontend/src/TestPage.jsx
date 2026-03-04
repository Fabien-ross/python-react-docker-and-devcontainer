import { useEffect, useState } from "react";
import { getHello } from "./api.js";

export default function TestPage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    getHello().then(data => setMessage(data.message));
  }, []);

  return <div>{message}</div>;
}