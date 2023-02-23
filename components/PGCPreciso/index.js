import ResultadoBarra from '../ResultadoBarra';

export default function PGCPreciso({ bfp, mm, mg }) {
  return (
    <>
      <h2 className="mt-3">Método com medidas precisas</h2>
      <p>PGC: {bfp.toFixed(1)}%</p>
      <p>Massa magra: {mm.toFixed(1)}kg</p>
      <p>Massa gorda: {mg.toFixed(1)}kg</p>
      <ResultadoBarra porcentagem={bfp} />
    </>
  );
}
