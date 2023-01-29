import { useState } from 'react';
import Quotes from './quotes';
import InspirationalQuote from './quote';

export type Quote = {
  id: number;
  content: string;
  source?: string;
};

export const fetchRandomQuote = async () => {
  const response = await fetch(`/api/quotes/random`);
  return response.json();
};

export const fetchQuotes = async (count: number) => {
  const response = await fetch(`/api/quotes?limit=${count}`);
  return response.json();
};

const Application = () => {
  const [quotes, setQuotes] = useState<Quote[]>([]);

  return (
    <main className="w-full max-w-2xl py-16 mx-auto">
      {/* <InspirationalQuote content={quote.content} source={quote.source} /> */}
      <Quotes setQuotes={setQuotes}>
        <div className="grid grid-cols-2 gap-4">
          {quotes.map((quote) => {
            return (
              <InspirationalQuote
                key={quote.id}
                content={quote.content}
                source={quote.source}
              />
            )
          })}
        </div>
      </Quotes>
    </main>
  );
};

export default Application;
