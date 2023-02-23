"use client";

export default function Error({ error, reset }: { error: any; reset: any }) {
  return (
    <div>
      <h1>no page: {error.message}</h1>
      <button onClick={() => reset()}>error reset</button>
    </div>
  );
}
