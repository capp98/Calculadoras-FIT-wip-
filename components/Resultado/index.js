import ResultadoBarra from '../ResultadoBarra';

export default function Resultado({
  abdomem,
  altura,
  idade,
  pescoco,
  peso,
  homem,
  cintura,
}) {
  const log = Math.log10;

  let aguaDiaria = peso * 0.035;
  let imc = peso / Math.pow(altura / 100, 2);

  let um;
  if (homem) {
    um =
      495 / (1.0324 - 0.19077 * log(abdomem - pescoco) + 0.15456 * log(altura));
  } else {
    um =
      495 /
      (1.29579 -
        0.35004 * log(+cintura + +abdomem - pescoco) +
        0.221 * log(altura));
  }

  let bfp = um - 450; //Porcentagem de gordura corporal
  let mg = (bfp / 100) * peso; //Massa gorda
  let mm = peso - mg; //Massa magra

  let bfpimc = homem
    ? 1.2 * imc + 0.23 * idade - 16.2
    : 1.2 * imc + 0.23 * idade - 5.4; //bfp feito com imc
  let mgimc = (bfpimc / 100) * peso; //Massa gorda com IMC
  let mmimc = peso - mgimc; //Massa magra com IMC

  let bmr = 370 + 21.6 * (1 - bfp / 100) * peso;
  // 370 + 21.6(1 - F)W

  return (
    <div className="flex flex-col items-stretch result">
      {!!peso && (
        <>
          <h2>Água Diária</h2>
          <p>litros por dia (16 horas): {aguaDiaria.toPrecision(3)} L/16h</p>
          <p>
            ml por hora:{' '}
            {((aguaDiaria / 960) * 60).toPrecision(3).split('.')[1]} ml/h
          </p>
        </>
      )}
      <h1>Porcentagem de gordura corporal (PGC)</h1>
      {!!idade && !!altura && !!peso && (
        <>
          <h2 className="mt-3">Método IMC</h2>
          <p>IMC: {imc.toFixed(1)}</p>
          <p>PGC: {bfpimc.toFixed(1)}%</p>
          <p>Massa magra: {mmimc.toFixed(1)}kg</p>
          <p>Massa gorda: {mgimc.toFixed(1)}kg</p>
        </>
      )}

      {!!abdomem && !!pescoco && !!altura && !!peso && (
        <>
          <h2 className="mt-3">Método com medidas precisas</h2>
          <p>PGC: {bfp.toFixed(1)}%</p>
          <p>Massa magra: {mm.toFixed(1)}kg</p>
          <p>Massa gorda: {mg.toFixed(1)}kg</p>
          <ResultadoBarra porcentagem={bfp} />
        </>
      )}

      {!!peso && !!bfp && (
        <>
          <h1>Calórias diárias - {bmr.toPrecision(4)} </h1>
          <table>
            <thead>
              <tr>
                <th colspan="2">Tabela de calorias</th>
              </tr>
              <tr>
                <th>Nivel de atividade</th>
                <th>Calorias/dia</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Sedentário: pouco ou nenhum exercício</td>
                <td>{(bmr * 1.2).toPrecision(4)}</td>
              </tr>
              <tr>
                <td>1 - 3 atividades físicas por semana</td>
                <td>{(bmr * (1.2 + 0.175)).toPrecision(4)}</td>
              </tr>
              <tr>
                <td>4 - 5 atividades físicas por semana</td>
                <td>{(bmr * (1.2 + 0.265)).toPrecision(4)}</td>
              </tr>
              <tr>
                <td>
                  3 - 4 atividades físicas intensas ou atv. fisica diariamente
                </td>
                <td>{(bmr * (1.2 + 0.175 * 2)).toPrecision(4)}</td>
              </tr>
              <tr>
                <td>6 - 7 atividades físicas intensas por semana</td>
                <td>{(bmr * (1.2 + 0.175 * 3)).toPrecision(4)}</td>
              </tr>
              <tr>
                <td>pratica atividades físicas intensas diariamente</td>
                <td>{(bmr * 1.9).toPrecision(4)}</td>
              </tr>
            </tbody>
          </table>
        </>
      )}
    </div>
  );
}
