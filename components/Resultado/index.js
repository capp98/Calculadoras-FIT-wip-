import AguaDiaria from '../AguaDiaria';
import CaloriasDiarias from '../CaloriasDiarias';
import IMC from '../IMC';
import PGCPreciso from '../PGCPreciso';
import ResultadoBarra from '../ResultadoBarra';
import styles from './style.module.css';

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

  return (
    <div className={styles.result}>
      {!!peso && <AguaDiaria aguaDiaria={aguaDiaria} />}

      <h1>Porcentagem de gordura corporal (PGC)</h1>
      {!!idade && !!altura && !!peso && (
        <IMC {...{ imc, bfpimc, mmimc, mgimc }} />
      )}

      {!!abdomem && !!pescoco && !!altura && !!peso && (
        <PGCPreciso {...{ bfp, mm, mg }} />
      )}

      {!!peso && !!bfp && <CaloriasDiarias bmr={bmr} />}
    </div>
  );
}
