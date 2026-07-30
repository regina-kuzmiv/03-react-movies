// Якщо в результаті запиту масив фільмів порожній, виводьте повідомлення:
// No movies found for your request.
// Ця перевірка виконується в App при обробці HTTP-запиту. Для сповіщень використовуйте бібліотеку React Hot Toast.
// При кожному новому пошуку колекція фільмів з попереднього пошуку повинна очищати

import { Toaster } from "react-hot-toast";

export default function App() {
  return (
    <>
      <Toaster />
    </>
  );
}
