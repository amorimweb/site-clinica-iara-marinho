# Sistema de movimento observado

## Princípios

Construir sensação de máquina precisa e cinematográfica. Combinar entradas rápidas e controladas com rolagem lenta e espacial. Usar movimento em três escalas: microinteração (150–500 ms), revelação (600–1200 ms) e narrativa vinculada à rolagem.

## Tokens

```css
:root {
  --ease-ui: cubic-bezier(.4, 0, .2, 1);
  --ease-out-expo: cubic-bezier(.25, 1, .5, 1);
  --ease-spring-soft: cubic-bezier(.34, 1.2, .64, 1);
  --motion-fast: 200ms;
  --motion-base: 300ms;
  --motion-reveal: 700ms;
  --motion-cinematic: 1000ms;
}
```

Transições observadas: `all 300ms`, cores `300–500ms`, opacidade `500–700ms`, transform `500–1000ms`, e navegação/progresso com 600 ms e curva spring suave.

## Carregamento e hero

- Exibir preloader mínimo com mensagem e percentual; fazer saída por fade/clip, sem bloquear além do necessário.
- Revelar título por letras. Variar `translateY`, rotação ou profundidade em grupos; duração 700–1200 ms, stagger 20–60 ms.
- Usar canvas 3D com placas/cubos escuros em parallax lento. Restringir a interação do ponteiro e nunca causar enjoo.
- Animar o indicador de rolagem continuamente: deslocamento vertical de 15 px em 3 s, `ease-in-out`.
- Usar pulso de luz de fundo em 8 s, variando opacidade aproximadamente de .10 a .15 e escala de 1 a 1.1.

## Revelações por rolagem

- Eyebrow: opacity 0→1 e Y 20→0.
- Título: palavras/letras de Y 60–120 px para 0, ou clip-path `inset(100% 0 0)` para `inset(0)`.
- Texto secundário: stagger por palavra, 20–40 ms.
- Cartões de serviço: clip-path fechado, opacidade 0 e Y 80; abrir em sequência.
- Elemento “resultado”: animar glow de zero até `0 0 35px rgb(163 255 18 / .3)`.

## Projetos

Fixar a seção em desktop e converter a rolagem vertical em translação horizontal do trilho. No site observado, a seção de projetos recebe pinning e o trilho chega a transladar aproximadamente `-2714px`. Calcular a distância pelo conteúdo real: `track.scrollWidth - viewportWidth + gutter`.

Revelar o título por caracteres com gradiente branco→cinza e perspectiva de 600 px. Nos cartões, aplicar imagem `scale(1)`→`scale(1.05)` em 1 s com `ease-out-expo`; mover seta/CTA 8 px; elevar borda e chip.

## Diferenciais

Fixar o texto descritivo à esquerda em desktop. Empilhar cartões à direita durante a rolagem: entrada de Y positivo, blur leve e opacidade reduzida; convergir para blur 0, opacity 1 e Y 0. Manter o cartão ativo acima dos anteriores e usar espaçamento vertical suficiente para leitura.

Em mobile, renderizar uma lista normal; não simular pilha se isso ocultar conteúdo.

## Processo

Fixar uma viewport e sobrepor as etapas. Para cada transição:

1. etapa anterior: opacity 1→0, Y 0→-10%, scale 1→.85;
2. etapa nova: opacity 0→1, lados entram de `translateX(±10–20%)`;
3. atualizar número e navegação lateral;
4. manter apenas uma etapa semanticamente ativa/visível.

## Navegação lateral

Representar as seis seções por ícones circulares conectados. Ao cruzar cada seção, animar círculo, traço SVG/progresso e cor para verde em 600 ms com spring suave. Hover: scale 1.1 em 300–500 ms. Incluir rótulo acessível e foco de teclado.

## Hover e foco

- Cartão: scale até 1.02, borda verde 30–60%, glow controlado.
- Imagem: scale 1.05 em 1 s.
- Seta: translateX 8 px.
- Botão: verde `#A3FF12`→`#B4FF3D`, sombra aumenta; manter deslocamento máximo de 2 px.
- Ícone social: scale 1.1 e cor branca/verde.
- Foco: outline sólido de 2 px com offset de 3 px; não depender exclusivamente de animação.

## CSS keyframes equivalentes

```css
@keyframes fade-up {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
@keyframes bounce-slow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(15px); }
}
@keyframes ambient-pulse {
  0%, 100% { opacity: .1; transform: scale(1); }
  50% { opacity: .15; transform: scale(1.1); }
}
```

## Movimento reduzido

Sob `prefers-reduced-motion: reduce`, remover pinning, scrub, parallax, rotação por letra e loops; exibir tudo com opacity 1 e transform none. Manter no máximo fades curtos de 100–150 ms. Garantir que projetos, diferenciais e processo funcionem como fluxo vertical completo.

