'use client';

import Image from 'next/image';
import { useState, useEffect } from 'react';

interface DadoProps {
  valor: number;
  animando?: boolean;
}

export default function Dado({ valor, animando = false }: DadoProps) {
  const [shouldAnimate, setShouldAnimate] = useState(animando);

  useEffect(() => {
    setShouldAnimate(animando);
  }, [animando]);

  // Garante que o valor está entre 1 e 6
  const v = Math.min(Math.max(valor, 1), 6);

  return (
    <div className="flex items-center justify-center">
      <div
        className={`transform transition-all ${
          shouldAnimate ? 'animate-dice' : ''
        }`}
        onAnimationEnd={() => setShouldAnimate(false)}
      >
        <Image
          src={`/dados/dado-${v}.svg`}
          alt={`Dado com valor ${v}`}
          width={80}
          height={80}
          className="drop-shadow-lg hover:drop-shadow-xl transition-all"
          priority
        />
      </div>
    </div>
  );
}

