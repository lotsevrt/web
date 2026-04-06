import { useState, useEffect } from 'react';

// Описуємо структуру коментаря (для TypeScript)
interface Review {
  id: number;
  name: string;
  email: string;
  body: string;
}

function Reviews() {
  // Стан для списку коментарів та стану завантаження
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Робимо запит до API. Замість "1" можеш поставити свій номер варіанту в списку
    fetch('https://jsonplaceholder.typicode.com/posts/1/comments')
      .then(response => response.json())
      .then(data => {
        setReviews(data);
        setLoading(false); // Вимикаємо індикатор завантаження
      })
      .catch(error => {
        console.error('Помилка при завантаженні відгуків:', error);
        setLoading(false);
      });
  }, []);

  return (
    <section className="mt-8">
      <h2 className="text-2xl font-bold text-slate-800 border-b-2 border-blue-500 pb-2 mb-4 inline-block">
        Відгуки роботодавців
      </h2>
      
      {loading ? (
        <p className="text-slate-500 animate-pulse">Завантаження відгуків...</p>
      ) : (
        <div className="space-y-4">
          {/* Використовуємо .map() для виведення кожного коментаря */}
          {reviews.map((review) => (
            <div key={review.id} className="bg-slate-50 p-4 rounded-xl border border-slate-100 shadow-sm transition-transform hover:-translate-y-1 duration-300">
              <h3 className="font-semibold text-lg text-slate-800 capitalize">{review.name}</h3>
              <p className="text-sm text-blue-500 mb-2">{review.email}</p>
              <p className="text-slate-600 italic">"{review.body}"</p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}

export default Reviews;