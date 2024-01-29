import { PaperPlaneRight } from "phosphor-react";
import { FormEvent, KeyboardEvent, useState } from "react";
import { Header } from "../components/Header"
import { Separator } from "../components/Separator"
import { Tweet } from "../components/Tweet"

import './Status.css';

/**
 * Fluxo de renderização:
 * 
 * 1. Toda vez que alteramos o estado de um componente, TODO componente é recalculado.
 * 2. Toda vez que o seu componente PAI renderizar.
 * 3. Toda vez que alguma das suas propriedades mudarem.
 */

/**
 * Algoritmo de reconciliação:
 * 
 * 1. Criar em memória a nova versão do HTML do componente
 * 2. Compara essa nova versão com a versão anterior do HTML (Diff)
 * 3. Aplicar as operações JavaScript para alterar somente o necessário no HTML
 */

export function Status() {
  const [newAnswer, setNewAnswer] = useState('')
  const [answers, setAnswers] = useState([
    'Concordo...',
    'Olha, faz sentido!',
    'Parabéns pelo progresso.'
  ])

  function createNewAnswer(event: FormEvent) {
    event.preventDefault()

    setAnswers([newAnswer, ...answers])
    setNewAnswer('')
  }

  function handleHotkeySubmit(event: KeyboardEvent) {
    if (event.key === 'Enter' && (event.ctrlKey || event.metaKey)) {
      setAnswers([newAnswer, ...answers])
      setNewAnswer('')
    }
  }

  return (
    <main className="status">
      <Header title="Tweet" />

      <Tweet content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique officia autem libero, veritatis mollitia qui nisi eveniet cumque rerum atque, unde nobis, consectetur illo assumenda. Amet totam consequuntur repudiandae cum?" />

      <Separator />

      <form onSubmit={createNewAnswer} className="answer-tweet-form">
        <label htmlFor="tweet">
          <img src="data:image/jpeg;base64,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" alt="Christina Aguilera" />
          <textarea 
            id="tweet" 
            placeholder="Tweet your answer" 
            value={newAnswer}
            onKeyDown={handleHotkeySubmit}
            onChange={(event) => {
              setNewAnswer(event.target.value)
            }}
          />
        </label>

        <button type="submit">
          <PaperPlaneRight />
          <span>Answer</span>
        </button>
      </form>

      {answers.map(answer => {
        return <Tweet key={answer} content={answer} />
      })}
    </main>
  )
}