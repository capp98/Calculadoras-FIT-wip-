export default function ResultadoBarra({ porcentagem = 0 }) {
  return (
    <>
      <div className="fundo">
        <div className="barra um"></div>
        <div className="barra dois"></div>
        <div className="barra tres"></div>
        <div className="barra quatro"></div>
        <div
          className="barra resultado"
          style={{ width: `${porcentagem * 3}%` }}
        >
          <div className="Resultado">
            {porcentagem < 0 ? 0 : porcentagem.toFixed(1)}%
          </div>
        </div>
      </div>
    </>
  );
}
