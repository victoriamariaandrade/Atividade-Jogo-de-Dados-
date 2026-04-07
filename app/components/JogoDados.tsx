'use client';

import { useState } from 'react';
import Dado from './Dado';

interface RodadaState {
  dadosJogadorA: [number, number];
  dadosJogadorB: [number, number];
  resultado: 'aguardando' | 'a-jogou' | 'b-jogou' | 'finalizada';
  animandoA: boolean;
  animandoB: boolean;
}

export default function JogoDados() {
  const [rodadaAtual, setRodadaAtual] = useState(1);
  const [vitoriasA, setVitoriasA] = useState(0);
  const [vitoriasB, setVitoriasB] = useState(0);
  const [empates, setEmpates] = useState(0);
  const [rodadaState, setRodadaState] = useState<RodadaState>({
    dadosJogadorA: [0, 0],
    dadosJogadorB: [0, 0],
    resultado: 'aguardando',
    animandoA: false,
    animandoB: false,
  });
  const [jogoFinalizado, setJogoFinalizado] = useState(false);

  const gerarDados = (): [number, number] => {
    return [Math.floor(Math.random() * 6) + 1, Math.floor(Math.random() * 6) + 1];
  };

  const calcularResultado = (somaA: number, somaB: number) => {
    if (somaA > somaB) {
      return 'A Venceu';
    } else if (somaB > somaA) {
      return 'B Venceu';
    } else {
      return 'Empate';
    }
  };

  const jogarDadosJogadorA = () => {
    setRodadaState((prev) => ({
      ...prev,
      animandoA: true,
    }));

    setTimeout(() => {
      const dados = gerarDados();
      setRodadaState((prev) => ({
        ...prev,
        dadosJogadorA: dados,
        resultado: 'a-jogou',
        animandoA: false,
      }));
    }, 600);
  };

  const jogarDadosJogadorB = () => {
    setRodadaState((prev) => ({
      ...prev,
      animandoB: true,
    }));

    setTimeout(() => {
      const dadosB = gerarDados();
      const somaA = rodadaState.dadosJogadorA[0] + rodadaState.dadosJogadorA[1];
      const somaB = dadosB[0] + dadosB[1];

      const resultRodada = calcularResultado(somaA, somaB);

      setRodadaState((prev) => ({
        ...prev,
        dadosJogadorB: dadosB,
        resultado: 'finalizada',
        animandoB: false,
      }));

      // Incrementar pontuações
      if (resultRodada === 'A Venceu') {
        setVitoriasA((prev) => prev + 1);
      } else if (resultRodada === 'B Venceu') {
        setVitoriasB((prev) => prev + 1);
      } else {
        setEmpates((prev) => prev + 1);
      }

      // Se for a última rodada, finalizar jogo
      if (rodadaAtual === 5) {
        setJogoFinalizado(true);
      }
    }, 600);
  };

  const proximaRodada = () => {
    setRodadaAtual((prev) => prev + 1);
    setRodadaState({
      dadosJogadorA: [0, 0],
      dadosJogadorB: [0, 0],
      resultado: 'aguardando',
      animandoA: false,
      animandoB: false,
    });
  };

  const reiniciarJogo = () => {
    setRodadaAtual(1);
    setVitoriasA(0);
    setVitoriasB(0);
    setEmpates(0);
    setRodadaState({
      dadosJogadorA: [0, 0],
      dadosJogadorB: [0, 0],
      resultado: 'aguardando',
      animandoA: false,
      animandoB: false,
    });
    setJogoFinalizado(false);
  };

  const somaA =
    rodadaState.resultado !== 'aguardando'
      ? rodadaState.dadosJogadorA[0] + rodadaState.dadosJogadorA[1]
      : 0;
  const somaB =
    rodadaState.resultado !== 'aguardando'
      ? rodadaState.dadosJogadorB[0] + rodadaState.dadosJogadorB[1]
      : 0;
  const resultadoRodada = calcularResultado(somaA, somaB);

  if (jogoFinalizado) {
    let resultadoFinal = '';

    if (vitoriasA > vitoriasB) {
      resultadoFinal = `Jogador A Venceu! (${vitoriasA}x${vitoriasB})`;
    } else if (vitoriasB > vitoriasA) {
      resultadoFinal = `Jogador B Venceu! (${vitoriasB}x${vitoriasA})`;
    } else {
      resultadoFinal = `Empate! (${vitoriasA}x${vitoriasB})`;
    }

    return (
      <div className="w-full max-w-2xl">
        <div className="animate-slide-in bg-white dark:bg-gray-800 rounded-2xl shadow-2xl p-8 text-center transition-all duration-300">
          <h1 className="text-4xl font-bold text-gray-800 dark:text-white mb-6">
            Jogo Finalizado!
          </h1>
          <p className="text-2xl font-bold text-blue-600 dark:text-blue-400 mb-8">
            {resultadoFinal}
          </p>
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-green-50 dark:bg-green-900/30 p-4 rounded-lg transition-all">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Vitórias Jogador A
              </p>
              <p className="text-3xl font-bold text-green-600 dark:text-green-400">
                {vitoriasA}
              </p>
            </div>
            <div className="bg-red-50 dark:bg-red-900/30 p-4 rounded-lg transition-all">
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-2">
                Vitórias Jogador B
              </p>
              <p className="text-3xl font-bold text-red-600 dark:text-red-400">
                {vitoriasB}
              </p>
            </div>
          </div>
          <button
            onClick={reiniciarJogo}
            className="px-8 py-4 bg-black dark:bg-gray-700 text-white rounded-full font-bold text-lg hover:bg-gray-800 dark:hover:bg-gray-600 transition-all hover:scale-105 transform"
          >
            Jogar Novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl">
      <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-2xl overflow-hidden transition-all duration-300">
        {/* Header com número da rodada */}
        <div className="bg-gradient-to-r from-blue-500 to-blue-600 dark:from-blue-700 dark:to-blue-800 p-6 text-center">
          <h1 className="text-3xl font-bold text-white">Rodada {rodadaAtual}/5</h1>
        </div>

        {/* Conteúdo principal */}
        <div className="p-8">
          {/* Jogador A */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              Jogador A
            </h2>
            <div className="flex justify-center gap-6 mb-4">
              <Dado
                valor={rodadaState.dadosJogadorA[0]}
                animando={rodadaState.animandoA}
              />
              <Dado
                valor={rodadaState.dadosJogadorA[1]}
                animando={rodadaState.animandoA}
              />
            </div>
            {rodadaState.resultado !== 'aguardando' && (
              <div className="animate-fade-in text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Soma:</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {somaA}
                </p>
              </div>
            )}
          </div>

          {/* Resultado da rodada (quando houver) */}
          {rodadaState.resultado === 'finalizada' && (
            <div className="mb-8 text-center">
              <div
                className={`animate-pulse-result inline-block px-6 py-3 rounded-full font-bold text-lg transition-all ${
                  resultadoRodada === 'A Venceu'
                    ? 'bg-green-100 dark:bg-green-900/40 text-green-700 dark:text-green-300'
                    : resultadoRodada === 'B Venceu'
                    ? 'bg-red-100 dark:bg-red-900/40 text-red-700 dark:text-red-300'
                    : 'bg-yellow-100 dark:bg-yellow-900/40 text-yellow-700 dark:text-yellow-300'
                }`}
              >
                {resultadoRodada === 'A Venceu'
                  ? 'Jogador A Venceu'
                  : resultadoRodada === 'B Venceu'
                  ? 'Jogador B Venceu'
                  : 'Empate'}
              </div>
            </div>
          )}

          {/* Jogador B */}
          <div className="mb-8">
            <h2 className="text-lg font-bold text-gray-800 dark:text-white mb-4">
              Jogador B
            </h2>
            <div className="flex justify-center gap-6 mb-4">
              <Dado
                valor={rodadaState.dadosJogadorB[0]}
                animando={rodadaState.animandoB}
              />
              <Dado
                valor={rodadaState.dadosJogadorB[1]}
                animando={rodadaState.animandoB}
              />
            </div>
            {rodadaState.resultado !== 'aguardando' && (
              <div className="animate-fade-in text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400">Soma:</p>
                <p className="text-2xl font-bold text-gray-800 dark:text-white">
                  {somaB}
                </p>
              </div>
            )}
          </div>

          {/* Placar */}
          <div className="grid grid-cols-3 gap-4 mb-8 py-4 border-t border-b border-gray-200 dark:border-gray-700">
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">A</p>
              <p className="text-2xl font-bold text-green-600 dark:text-green-400">
                {vitoriasA}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">
                Empates
              </p>
              <p className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">
                {empates}
              </p>
            </div>
            <div className="text-center">
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-1">B</p>
              <p className="text-2xl font-bold text-red-600 dark:text-red-400">
                {vitoriasB}
              </p>
            </div>
          </div>

          {/* Botões de ação */}
          <div className="grid grid-cols-2 gap-4">
            <button
              onClick={jogarDadosJogadorA}
              disabled={rodadaState.resultado !== 'aguardando'}
              className={`py-3 px-4 rounded-full font-bold text-white transition-all transform hover:scale-105 ${
                rodadaState.resultado === 'aguardando'
                  ? 'bg-black dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 active:scale-95'
                  : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-50'
              }`}
            >
              Jogar Dado
            </button>
            <button
              onClick={jogarDadosJogadorB}
              disabled={rodadaState.resultado !== 'a-jogou'}
              className={`py-3 px-4 rounded-full font-bold text-white transition-all transform hover:scale-105 ${
                rodadaState.resultado === 'a-jogou'
                  ? 'bg-black dark:bg-gray-700 hover:bg-gray-800 dark:hover:bg-gray-600 active:scale-95'
                  : 'bg-gray-300 dark:bg-gray-600 cursor-not-allowed opacity-50'
              }`}
            >
              Jogar Dado
            </button>
          </div>

          {/* Botão próxima rodada */}
          {rodadaState.resultado === 'finalizada' && rodadaAtual < 5 && (
            <button
              onClick={proximaRodada}
              className="w-full mt-4 py-3 px-4 bg-blue-600 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-600 text-white rounded-full font-bold transition-all hover:scale-105 transform active:scale-95"
            >
              Próxima Rodada
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
