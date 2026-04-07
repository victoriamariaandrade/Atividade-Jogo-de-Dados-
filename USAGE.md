# Guia de Uso

## Como Usar o Projeto

### Executar em Desenvolvimento

```bash
npm install
npm run dev
```

O projeto estará disponível em `http://localhost:3000`

### Compilar para Produção

```bash
npm run build
npm start
```

---

## Funcionalidades do Usuário

### 🎮 Jogar uma Rodada

1. Você verá a Rodada N (N = 1 a 5)
2. Clique no botão "Jogar Dado" abaixo do Jogador A
3. Os dados do Jogador A serão lançados com animação
4. Agora clique no botão "Jogar Dado" do Jogador B
5. Os dados do Jogador B serão lançados
6. O resultado da rodada será mostrado (Ganhou, Perdeu ou Empatou)
7. Clique "Próxima Rodada" para continuar (se não for a última rodada)

### 🌓 Mudar o Tema

- Clique no botão com ícone de Sol (light mode) ou Lua (dark mode) no canto superior direito
- O tema será trocado instantaneamente com transição suave
- Sua preferência será salva automaticamente em localStorage

### 📊 Acompanhar a Pontuação

- A pontuação atual é exibida em tempo real:
  - **A**: Vitórias do Jogador A
  - **Empates**: Rodadas empatadas
  - **B**: Vitórias do Jogador B

### 🏆 Resultado Final

Após 5 rodadas:
- A tela final exibe o vencedor ou se houve empate
- Mostra o placar final
- Clique "Jogar Novamente" para começar uma nova partida

---

## Regras do Jogo

### Pontuação por Rodada

- Cada jogador lança 2 dados
- A soma dos dados é calculada
- Quem tiver a maior soma **vence** a rodada
- Se as somas forem iguais, a rodada é **empatada**

### Vitória Final

- Após 5 rodadas, o jogador com mais vitórias **vence** a partida
- Se ambos tiverem o mesmo número de vitórias, é **empate geral**

---

## Dicas e Truques

### ✨ Aproveite as Animações

- Observe as animações suaves dos dados enquanto são lançados
- Elas criam uma experiência mais imersiva e divertida

### 🎨 Escolha seu Tema Favorito

- O dark mode é perfeito para usar à noite
- O light mode é melhor durante o dia
- Sua escolha é lembrada na próxima vez que abrir o site

### 📱 Design Responsivo

- O jogo funciona em diferentes tamanhos de tela
- Use em desktop, tablet ou celular

---

## Estrutura Técnica para Desenvolvedores

### Componentes Principais

1. **ThemeToggle.tsx**: Gerencia light/dark mode
2. **Dado.tsx**: Exibe dados com animações
3. **JogoDados.tsx**: Lógica principal do jogo
4. **page.tsx**: Página raiz
5. **layout.tsx**: Layout com tema

### Gerenciamento de Estado

O estado é mantido totalmente em `JogoDados.tsx` usando `useState`:

```typescript
const [rodadaAtual, setRodadaAtual] = useState(1);
const [vitoriasA, setVitoriasA] = useState(0);
const [vitoriasB, setVitoriasB] = useState(0);
const [empates, setEmpates] = useState(0);
const [rodadaState, setRodadaState] = useState({...});
const [jogoFinalizado, setJogoFinalizado] = useState(false);
```

### Persistência

- **Tema**: Armazenado em `localStorage` com chave `theme`
- **Pontuação**: Mantida em estado, reinicia ao clicar "Jogar Novamente"

### Animações

Definidas em CSS com:
- `@keyframes spin-dice`: Rotação 3D dos dados
- `@keyframes fade-in`: Aparação da soma
- `@keyframes pulse-result`: Pulsação do resultado
- `@keyframes slide-in-top`: Entrada da tela final

---

## Troubleshots

### O jogo não carrega

- Verifique se o servidor está rodando: `npm run dev`
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Tente em uma aba anônima

### As animações não funcionam

- Verifique se o CSS foi compilado corretamente
- Tente recarregar a página (F5)
- Verifique se não há erros no console do navegador

### O dark mode não persiste

- Verifique se localStorage está habilitado no navegador
- Tente limpar localStorage: `localStorage.clear()` no console

### Os dados não aparecem

- Verifique se as imagens SVG estão em `/public/dados/`
- Tente recarregar a página
- Verifique o console para erros de 404

