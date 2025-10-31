import { useState } from "react";

export function useRequestCall() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const requestCall = async (data) => {
    setLoading(true);
    setError(null);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Call request sent:", data);
      setSuccess(true);
    } catch (e) {
      setError("Ошибка при отправке заявки");
    } finally {
      setLoading(false);
    }
  };

  return { loading, success, error, requestCall };
}
