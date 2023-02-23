export default function CaloriasDiarias({ bmr }) {
  return (
    <div className="quadro">
      <h2>Calorias diárias </h2>
      <p>
        <span className="highlight">{bmr.toPrecision(4)} Kcal</span>
      </p>
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
    </div>
  );
}
