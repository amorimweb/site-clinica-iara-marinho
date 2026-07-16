# Sistema visual observado

Fonte analisada: `https://mateuscastro-dev.vercel.app/` em viewport desktop de 1280 × 720. Tratar medidas como referência adaptável, não como especificação rígida.

## Direção de arte

Estética tech brutalista/cinematográfica: fundos quase pretos, estruturas grafite, tipografia enorme e compacta, linhas finas e um verde ácido que comunica energia, progresso e interatividade. A composição alterna áreas muito densas e grandes vazios, com bordas discretas e brilhos controlados.

## Paleta

| Papel | Valor observado/recomendado | Uso |
|---|---|---|
| Acento principal | `#A3FF12` | estados ativos, linhas, palavras-chave, CTA e glow |
| Acento hover | `#B4FF3D` | hover de CTA |
| Preto | `#000000` | hero e projetos |
| Fundo carvão | `#0A0A0A` | contato |
| Fundo frio | `#0A0C10`, `#0B0D12` | processo e diferenciais |
| Superfície | `#12151A`, `#18181B` | cartões e controles |
| Texto principal | `#FFFFFF`, `#E5E7EB` | títulos e leitura dominante |
| Texto secundário | `#9CA3AF`, `#94A3B8` | parágrafos e metadados |
| Borda | branco a 5–10% | separação discreta |
| Borda ativa | acento a 30–80% | hover, foco e progresso |

Aplicar o acento com transparências de 5%, 10%, 30%, 40% e 50%. Para glow, usar combinações como `0 0 30px rgb(163 255 18 / .4)`; evitar glow branco ou multicolorido.

## Tipografia

- Display observada: `Changa One`, sans-serif; usar em títulos enormes, caixa alta, tracking apertado ou levemente aberto conforme a cena.
- Texto/UI: `Inter` e `Outfit`; usar para parágrafos e dados.
- Rótulos: mono do sistema ou sans com `letter-spacing: .2em–.45em`, caixa alta e tamanho pequeno.
- Alternativa de destaque: texto contornado transparente com `-webkit-text-stroke: 1px rgb(255 255 255 / .12)`.
- Escala recomendada: título hero `clamp(4rem, 12vw, 11rem)`; título de seção `clamp(3rem, 8vw, 8rem)`; título de cartão `clamp(1.5rem, 3vw, 3rem)`; corpo `1rem–1.25rem`.

## Composição

- Hero sticky de uma viewport com canvas/estrutura 3D escura ao fundo.
- Conteúdo alinhado à esquerda, com título ocupando grande parte da largura.
- Navegação vertical fixa à direita: círculos escuros de 40–48 px conectados por uma linha fina; item ativo verde com glow.
- Seções separadas por bordas brancas de baixa opacidade e mudanças sutis de preto para azul-grafite.
- Containers largos (`max-width` aproximado de 1200–1400 px) e paddings laterais responsivos.
- Cartões com raio grande (24–32 px), borda de 1 px, fundo frio e bastante padding.
- Projetos em cartões visuais largos, imagens com cantos arredondados, chips translúcidos e conteúdo abaixo/por cima conforme viewport.
- Contato em duas colunas: chamada tipográfica maciça e formulário contido em painel escuro.

## Componentes recorrentes

### Hero

Usar fundo 3D monocromático de cubos/placas com luz muito baixa. Manter contraste do texto por meio de overlay preto, vinheta e menor luminância no centro da cópia. Destacar nome em verde e subtítulo com tracking amplo. Incluir indicador de rolagem com bounce lento.

### Cabeçalho de seção

Adicionar eyebrow pequeno com linha horizontal verde. Dividir o título em linha sólida e linha contornada/itálica. Revelar a segunda linha com atraso curto.

### Cartões

Usar superfície `#12151A`, borda branca a 5%, raio de 32 px e acento interno de resultado com verde a 5%. Em hover, elevar a borda, aplicar brilho moderado e deslocar ícone/seta 8 px.

### Formulário

Usar inputs quase pretos, borda branca a 10%, raio de 10–14 px e altura confortável. Aplicar rótulos pequenos com tracking amplo. CTA verde de largura total, texto preto e sombra verde discreta. Foco precisa de contorno visível, não apenas glow.

## Responsividade

- Em telas estreitas, remover pinning complexo e transformar trilhos horizontais em lista vertical ou snap horizontal controlável.
- Reduzir título sem truncar palavras; preferir `clamp()`.
- Transformar duas colunas em uma; posicionar navegação lateral como barra inferior ou menu compacto.
- Desligar canvas pesado em dispositivos fracos e exibir imagem/gradiente equivalente.
- Preservar espaçamento generoso, mas reduzir raios e paddings de cartões.

