# Documentação de Componentes

## Componente Dado

### Descrição
O componente `Dado` é responsável por exibir visualmente um dado com um valor específico (de 1 a 6), com suporte a animações de rotação.

### Props
- `valor` (number): Número inteiro entre 1 e 6 que representa o valor do dado a ser exibido
- `animando?` (boolean): Ativa a animação de rotação 3D quando `true` (padrão: false)

### Funcionamento
- Recebe um valor numérico através da prop `valor`
- Garante que o valor esteja entre 1 e 6 (usando `Math.min` e `Math.max`)
- Carrega e exibe a imagem SVG correspondente ao valor do arquivo `/public/dados/dado-{valor}.svg`
- Aplica animação de rotação 3D quando `animando` é `true`
- A animação dura 600ms com easing cubic-bezier
- Remove a classe de animação após a conclusão

### Exemplo de Uso
```tsx
// Sem animação
<Dado valor={3} />

// Com animação
<Dado valor={5} animando={true} />
```

---

## Componente ThemeToggle

### Descrição
Componente do cliente que gerencia o switch entre light mode e dark mode da aplicação.

### Funcionalidades
- **Toggle de Tema**: Botão flutuante no canto superior direito
- **Ícones Dinâmicos**: Sol para light mode, lua para dark mode
- **Persistência**: Salva preferência em `localStorage` com chave `theme`
- **Preferência do Sistema**: Respeita `prefers-color-scheme` do navegador se não houver preferência salva
- **Transições Suaves**: Animação de 300ms ao trocar tema
- **Acessibilidade**: Atributos `aria-label` e `title` para melhor UX

### Estado Gerenciado
- `isDark`: Boolean indicando se está em dark mode
- `mounted`: Boolean para garantir renderização apenas no cliente

### Funcionamento
1. No mount, verifica `localStorage` ou preferência do sistema
2. Aplica a classe `dark` ao elemento `html` se necessário
3. Ao clicar, alterna entre light e dark mode
4. Persiste a escolha em `localStorage`

### Exemplo de Uso
```tsx
import ThemeToggle from './components/ThemeToggle';

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ThemeToggle />
        {children}
      </body>
    </html>
  );
}
```

---

## Componente JogoDados

### Descrição
O componente principal `JogoDados` gerencia toda a lógica do jogo de dados entre dois jogadores.

### Estado
- `rodadaAtual`: Número da rodada atual (1-5)
- `vitoriasA`: Contagem de vitórias do Jogador A
- `vitoriasB`: Contagem de vitórias do Jogador B
- `empates`: Contagem de empates
- `rodadaState`: Estado específico da rodada
  - `dadosJogadorA`: Array com valores dos dois dados do Jogador A
  - `dadosJogadorB`: Array com valores dos dois dados do Jogador B
  - `resultado`: Estado atual ('aguardando', 'a-jogou', 'b-jogou', 'finalizada')
- `jogoFinalizado`: Boolean indicando se os 5 rodadas foram concluídas

### Fluxo do Jogo

1. **Início da Rodada**: `resultado` = 'aguardando'
   - Apenas o botão do Jogador A está habilitado

2. **Jogador A Joga**: `resultado` = 'a-jogou'
   - Gera dois números aleatórios (1-6) para o Jogador A
   - Habilita o botão do Jogador B

3. **Jogador B Joga**: `resultado` = 'finalizada'
   - Gera dois números aleatórios (1-6) para o Jogador B
   - Compara as somas e atualiza o placar
   - Exibe o resultado da rodada

4. **Próxima Rodada**:
   - Se for a 5ª rodada: Exibe tela final
   - Caso contrário: Reseta para 'aguardando' e incrementa `rodadaAtual`

### Lógica de Pontuação
- Soma dos dados do Jogador A vs Soma dos dados do Jogador B
- Maior soma = Vitória
- Somas iguais = Empate

### Tela Final
- Exibe o resultado final (A venceu, B venceu ou Empate)
- Mostra a contagem de vitórias de cada jogador
- Permite recomeçar o jogo com o botão "Jogar Novamente"

### Exemplo de Uso
```tsx
<JogoDados />
```

---

## Imagens dos Dados

As imagens dos dados são arquivos SVG localizados em `/public/dados/`:

- `dado-1.svg`: 1 ponto (centro)
- `dado-2.svg`: 2 pontos (diagonal)
- `dado-3.svg`: 3 pontos (diagonal com centro)
- `dado-4.svg`: 4 pontos (cantos)
- `dado-5.svg`: 5 pontos (cantos com centro)
- `dado-6.svg`: 6 pontos (2 colunas de 3)

Cada imagem é um SVG vetorial com:
- Fundo branco com borda preta
- Pontos (círculos pretos) posicionados conforme o valor
- Cantos arredondados para um visual moderno

---

## Estilos

### Tailwind CSS
O projeto utiliza Tailwind CSS para estilização. As principais classes utilizadas:

- Layout: `flex`, `grid`, `gap`, `p`, `m`
- Cores: `bg-white`, `bg-blue-500`, `text-gray-800`, `text-blue-600`
- Efeitos: `shadow-2xl`, `rounded-full`, `drop-shadow-lg`
- Responsividade: `max-w-2xl`, `min-h-screen`
- Estados: `hover:`, `disabled:`

### Arquivo principal
- `app/globals.css`: Estilos globais com imports do Tailwind
