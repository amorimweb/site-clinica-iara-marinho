---
name: mateus-castro-site-style
description: Criar e revisar sites premium com direção de arte própria, composição editorial variada, movimento cinematográfico, trilhos horizontais, cenas fixadas, tipografia expressiva e microinterações. Usar em landing pages e sites institucionais quando o resultado precisa ser marcante, responsivo, animado e diferente dos projetos anteriores, em temas claros ou escuros.
---

# Sites premium com composição e movimento

## Fluxo obrigatório

1. Ler `references/visual-system.md`, `references/motion-system.md` e `references/implementation-guide.md`.
2. Ler `references/section-patterns.md` antes de definir a arquitetura da página.
3. Inventariar conteúdo, imagens e identidade da empresa; preservar dados reais.
4. Escolher uma direção de arte e uma narrativa adequadas ao setor. Não tornar todo projeto brutalista, escuro ou verde.
5. Montar uma matriz de seções contendo, para cada cena: objetivo, padrão escolhido, mídia, interação, transição e fallback mobile.
6. Comparar com projetos anteriores disponíveis. Trocar qualquer padrão estrutural repetido sem razão narrativa.
7. Construir a versão estática semântica e responsiva; adicionar movimento em camadas.
8. Implementar `prefers-reduced-motion`, foco visível, contraste, teclado e fallbacks.
9. Verificar que todo trilho horizontal responde à roda do mouse nos dois sentidos e volta ao fluxo vertical nas extremidades.

## Regra de diversidade

- Não repetir a sequência `hero dividido -> cards em grade -> imagem/texto -> três passos -> CTA` como padrão automático.
- Não usar mais de duas seções consecutivas com a mesma grade, alinhamento, proporção de imagem ou comportamento de entrada.
- Escolher ao menos quatro famílias distintas de `section-patterns.md` por site.
- Incluir uma única cena-assinatura memorável. As demais cenas devem sustentar conteúdo, não disputar atenção.
- Variar ritmo: alternar tela cheia, faixa compacta, composição assimétrica, respiro editorial e cena interativa.
- Variar a função da mídia: fundo, recorte, máscara, sequência, detalhe ampliado, comparação, panorama ou textura.
- Variar o movimento: scrub, sticky, reveal, parallax, troca de estado, marquee, máscara ou empilhamento; não aplicar `fade-up` em tudo.
- Se dois sites forem do mesmo segmento, mudar hero, ordem narrativa, geometria das seções, tipografia, tratamento fotográfico e cena-assinatura.

## Movimento com propósito

- Reservar pinning e scrub para relações que ganham significado com progressão.
- Fazer animações explicar processo, comparação, transformação, escala, localização ou prova.
- Usar CSS para microinterações e IntersectionObserver para revelações simples; usar GSAP/ScrollTrigger apenas quando necessário.
- Nunca sequestrar rolagem. Trilhos devem aceitar roda, trackpad, toque, teclado e botões acessíveis.
- No mobile, reduzir pinning e transformar cenas complexas em snap horizontal ou fluxo vertical completo.

## Entrega esperada

- direção de arte e tokens próprios;
- mapa narrativo e matriz de seções;
- justificativa breve dos padrões escolhidos;
- estados de entrada, repouso, hover, foco, ativo e saída;
- implementação responsiva e reduced motion;
- auditoria antirrepetição, acessibilidade e desempenho.

