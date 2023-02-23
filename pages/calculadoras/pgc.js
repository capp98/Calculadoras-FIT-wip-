import { useEffect, useState } from 'react';
import replaceDot from '../../js/utils.js';

import Head from 'next/head';
import Resultado from '../../components/Resultado';

export default function Calorias() {
  const [idade, setIdade] = useState();
  const [abdomem, setAbdomem] = useState();
  const [pescoco, setPescoco] = useState();
  const [cintura, setCintura] = useState();
  const [peso, setPeso] = useState();
  const [altura, setAltura] = useState();
  const [isHomem, setIsHomem] = useState(true);
  const [loading, setLoading] = useState(true);

  const handleRadio = () => setIsHomem(!isHomem);
  const handleIdade = (e) => setIdade(e.target.value);
  const handleAltura = (e) => setAltura(e.target.value);
  const handlePeso = (e) => setPeso(replaceDot(e.target.value));
  const handleAbdomem = (e) => setAbdomem(replaceDot(e.target.value));
  const handlePescoco = (e) => setPescoco(replaceDot(e.target.value));
  const handleCintura = (e) => setCintura(replaceDot(e.target.value));

  useEffect(() => {
    setLoading(false);
  }, []);

  return (
    <>
      <Head>
        <title>PGC</title>
      </Head>
      {!loading ? (
        <>
          <main className="flex">
            <div className="flex flex-col personInputForm">
              <div onChange={handleRadio} className="flex">
                <label htmlFor="homem">
                  <input
                    type="radio"
                    value="H"
                    id="homem"
                    checked={isHomem}
                    name="gender"
                  />
                  Homem
                </label>
                <label htmlFor="mulher">
                  <input
                    type="radio"
                    value="M"
                    id="mulher"
                    checked={!isHomem}
                    name="gender"
                  />
                  Mulher
                </label>
              </div>

              <label htmlFor="idade" className="relative inline-block">
                Idade:
                <input
                  className="w-[50%] inline"
                  type="text"
                  id="idade"
                  value={idade}
                  onChange={handleIdade}
                />
              </label>
              <label htmlFor="abdomem">
                Abdomem:
                <input
                  type="text"
                  id="abdomem"
                  value={abdomem}
                  onChange={handleAbdomem}
                />
              </label>
              <label htmlFor="pescoco">
                Pescoço:
                <input
                  type="text"
                  id="pescoco"
                  value={pescoco}
                  onChange={handlePescoco}
                />
              </label>

              {!isHomem && (
                <label htmlFor="cintura">
                  Cintura:
                  <input
                    type="text"
                    id="cintura"
                    value={cintura}
                    onChange={handleCintura}
                  />
                </label>
              )}

              <label htmlFor="altura">
                Altura (cm):
                <input
                  type="text"
                  id="altura"
                  value={altura}
                  onChange={handleAltura}
                />
              </label>
              <label htmlFor="peso">
                Peso:
                <input
                  type="text"
                  id="peso"
                  value={peso}
                  onChange={handlePeso}
                />
              </label>
            </div>
            <Resultado
              {...{
                abdomem,
                altura,
                idade,
                pescoco,
                peso,
                homem: isHomem,
                cintura,
              }}
            />
          </main>
        </>
      ) : (
        <h1>Carregando...</h1>
      )}
    </>
  );
}
