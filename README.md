# Jogo de Dados - Atividade Front-end

Um jogo de dados interativo entre 2 jogadores com 5 rodadas, desenvolvido com Next.js.

**Atividade para a disciplina de Programação Front-end do curso de Sistemas para Internet, da Universidade Católica de Pernambuco.**

## Características

- **2 Jogadores**: Jogo disputado entre Jogador A e Jogador B
- **5 Rodadas**: Cada partida possui 5 rodadas
- **Dados Dinâmicos**: Componente Dado que exibe visualmente os valores sorteados
- **Lógica de Pontuação**: Vence em cada rodada quem tiver a maior soma dos dois dados
- **Interface Intuitiva**: Design moderno com Tailwind CSS
- **Placar em Tempo Real**: Acompanhe a pontuação conforme o jogo progride
- **Resultado Final**: Exibe o vencedor da partida ou se houve empate
- **🎲 Animações Suaves**: Rotação 3D dos dados com efeitos visuais fluidos
- **🌓 Dark Mode / Light Mode**: Toggle com ícones de sol e lua, tema persistente

## Requisitos

- Node.js 18 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório ou acesse o diretório do projeto
2. Instale as dependências:

```bash
npm install
```

## Como Executar

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
```

O aplicativo estará disponível em `http://localhost:3000`.

## Como Jogar

1. **Inicie o jogo**: Você verá a Rodada 1 com dois jogadores prontos
2. **Jogador A**: Clique no botão "Jogar Dado" do Jogador A para sortear seus dados
3. **Jogador B**: Após o Jogador A sortear, clique no botão "Jogar Dado" do Jogador B
4. **Resultado**: O resultado da rodada será exibido (A Venceu, B Venceu ou Empate)
5. **Próximas Rodadas**: Clique "Próxima Rodada" para continuar
6. **Resultado Final**: Após 5 rodadas, veja o resultado final e clique "Jogar Novamente" para uma nova partida

## Estrutura do Projeto

```
jogo-dados/
├── app/
│   ├── components/
│   │   ├── Dado.tsx          # Componente que exibe a imagem do dado
│   │   └── JogoDados.tsx      # Componente principal com a lógica do jogo
│   ├── layout.tsx            # Layout raiz
│   ├── page.tsx              # Página principal
│   └── globals.css           # Estilos globais com Tailwind
├── public/
│   └── dados/
│       ├── dado-1.svg        # Imagens dos dados (1-6)
│       ├── dado-2.svg
│       ├── dado-3.svg
│       ├── dado-4.svg
│       ├── dado-5.svg
│       └── dado-6.svg
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Tecnologias Utilizadas

- **Next.js 14**: Framework React moderno
- **React 18**: Biblioteca para criação de UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS utilitário
- **SVG**: Imagens dos dados em formato vetorial

## Funcionalidades Implementadas

✅ Componente Dado que recebe prop `valor` (1-6) e exibe imagem correspondente
✅ Imagens dos dados em SVG dentro do projeto
✅ Componente JogoDados com lógica completa do jogo
✅ Jogo com 5 rodadas
✅ Sistema de pontuação por rodada
✅ Interface mostrando dados de ambos os jogadores
✅ Botões habilitados apenas na ordem correta
✅ Resultado final com opção de jogar novamente
✅ Design responsivo e moderna
✅ **Animações Suaves**: Rotação 3D dos dados ao jogar (600ms)
✅ **Dark Mode / Light Mode**: Toggle com ícones intuitivos
✅ **Tema Persistente**: Salvo em localStorage

## Animações e Efeitos Visuais

### Dados em Rotação
- Rotação 3D suave ao lançar os dados (600ms)
- Transforma em múltiplos eixos (X, Y, Z) simultaneamente
- Easing function cúbica para movimento natural

### Dark Mode / Light Mode
- **Toggle Button**: Canto superior direito com ícones de sol e lua
- **Persistência**: Tema salvo em localStorage
- **Preferência do Sistema**: Respeita `prefers-color-scheme` se não configurado
- **Transições Suaves**: Animação de 300ms ao trocar tema
- **Cores Otimizadas**: Paleta cuidadosamente selecionada para cada modo

### Outros Efeitos
- Fade-in nas somas dos dados (400ms)
- Pulse animation no resultado da rodada
- Slide-in na tela final
- Scale effect nos botões (hover 5%, active 95%)

## Estrutura do Projeto

```
jogo-dados/
├── app/
│   ├── components/
│   │   ├── Dado.tsx              # Componente com animação de rotação
│   │   ├── JogoDados.tsx         # Lógica principal e dark mode
│   │   └── ThemeToggle.tsx       # Toggle dark/light mode
│   ├── layout.tsx                # Layout com ThemeToggle
│   ├── page.tsx                  # Página principal
│   └── globals.css               # Estilos globais + animações CSS
├── public/
│   └── dados/
│       ├── dado-1.svg até dado-6.svg
├── package.json
├── next.config.js
├── tailwind.config.js
├── postcss.config.js
└── tsconfig.json
```

## Tecnologias Utilizadas

- **Next.js 14**: Framework React moderno
- **React 18**: Biblioteca para criação de UI
- **TypeScript**: Tipagem estática
- **Tailwind CSS**: Framework CSS utilitário (com dark mode)
- **CSS Animations**: Animações keyframes customizadas
- **SVG**: Imagens dos dados em formato vetorial
- **localStorage**: Persistência de tema

## Funcionalidades Implementadas

## Build para Produção

```bash
npm run build
npm start
```

## Licença

Este projeto é de código aberto e pode ser usado livremente para fins educacionais.
