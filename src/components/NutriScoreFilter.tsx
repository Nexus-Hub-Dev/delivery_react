import type { NutriScore } from '../models/Produto'

type NutriScoreFilterProps = {
  activeScore: 'Todos' | NutriScore
  onChange: (score: 'Todos' | NutriScore) => void
}

const scores: Array<'Todos' | NutriScore> = ['Todos', 'A', 'B', 'C', 'D', 'E']
const descriptions: Record<NutriScore, string> = { A: 'Excelente', B: 'Bom', C: 'Moderado', D: 'Menos', E: 'Evite' }

export function NutriScoreFilter({ activeScore, onChange }: NutriScoreFilterProps) {
  return (
    <div className="nutri-filter">
      <div>
        <span className="section-kicker">Escolha mais consciente</span>
        <strong>Filtrar por Nutri-Score</strong>
      </div>
      <div className="nutri-options">
        {scores.map((score) => (
          <button
            className={activeScore === score ? `nutri-option score-${score.toLowerCase()} active` : `nutri-option score-${score.toLowerCase()}`}
            type="button"
            key={score}
            onClick={() => onChange(score)}
          >
            {score === 'Todos' ? 'Todos' : <><span>{score}</span><small>{descriptions[score]}</small></>}
          </button>
        ))}
      </div>
    </div>
  )
}
