import { useState } from 'react';
import Head from 'next/head';

export default function Calorias() {
  const [peso, setPeso] = useState();

  const handlePeso = (e) => setPeso(e.target.value);

  return (
    <>
      <Head>
        <title>Calorias</title>
      </Head>
    </>
  );
}
