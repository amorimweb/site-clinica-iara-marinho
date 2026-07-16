# Guia de implementação e verificação

## Arquitetura sugerida

Separar a experiência em `HeroScene`, `SectionNav`, `Services`, `ProjectRail`, `DifferentialStack`, `ProcessSteps` e `Contact`. Centralizar tokens em CSS. Criar uma camada de movimento que possa ser desligada sem alterar o conteúdo ou o layout semântico.

Usar GSAP + ScrollTrigger quando já estiverem disponíveis ou quando pinning/scrub forem essenciais. Caso contrário, preferir IntersectionObserver, CSS scroll-driven animations com fallback e transições CSS. Para 3D, usar Three.js ou React Three Fiber somente se o orçamento de desempenho permitir.

## Ordem de construção

1. Modelar HTML semântico e navegação por âncoras.
2. Aplicar tokens, contraste, tipografia e layout estático.
3. Implementar estados hover/foco em CSS.
4. Adicionar revelações de entrada com IntersectionObserver.
5. Adicionar uma narrativa por vez: projetos, diferenciais, processo.
6. Adicionar canvas por último e medir desempenho.
7. Implementar reduced motion e fallback mobile.
8. Verificar o fluxo completo em browser real.

## Pseudocódigo para pinning

```js
const mm = gsap.matchMedia()

mm.add('(min-width: 1024px) and (prefers-reduced-motion: no-preference)', () => {
  const distance = Math.max(0, track.scrollWidth - innerWidth + gutter)
  gsap.to(track, {
    x: -distance,
    ease: 'none',
    scrollTrigger: {
      trigger: section,
      start: 'top top',
      end: `+=${distance}`,
      pin: true,
      scrub: 1,
      invalidateOnRefresh: true
    }
  })
})
```

Limpar listeners, timelines, WebGL e ScrollTriggers ao desmontar componentes. Recalcular após fontes e imagens carregarem. Evitar valores fixos de distância.

## Performance

- Animar `transform`, `opacity` e, com moderação, `clip-path`; evitar animar layout.
- Limitar `will-change` ao período da animação.
- Carregar canvas e imagens abaixo da dobra de forma preguiçosa.
- Usar texturas comprimidas, DPR limitado a 1.5–2 e pausar renderização fora da viewport.
- Reduzir blur animado; ele é caro. Preferir 0–8 px e poucos elementos.
- Evitar mais de uma seção pinned ativa em cada ponto da página.
- Mirar 60 fps em desktop e pelo menos 30 fps estáveis em dispositivos modestos.

## Acessibilidade

- Não fragmentar títulos de forma que leitores de tela leiam letras isoladas; manter nome acessível íntegro via `aria-label` ou duplicata somente para leitores.
- Não usar canvas como única fonte de conteúdo.
- Garantir contraste AA para corpo e controles.
- Oferecer foco visível, ordem de tabulação lógica e links de navegação nomeados.
- Atualizar item ativo sem depender apenas de cor.
- Manter formulários com `label`, mensagens de erro e estados de envio acessíveis.
- Não sequestrar rolagem nem bloquear gestos nativos em mobile.

## Checklist de fidelidade

- Fundo é predominantemente preto/grafite, com seções frias discretas?
- O verde está concentrado em estado, direção e conversão?
- Os títulos usam peso, escala, caixa alta e contraste sólido/contorno?
- Cada seção tem uma função narrativa clara?
- A rolagem cria progressão espacial sem ocultar conteúdo?
- Hovers combinam borda, glow e pequeno transform?
- Navegação lateral reflete a seção atual e funciona por teclado?
- Mobile mantém todo o conteúdo sem depender de pinning?
- Reduced motion remove loops e scrub?
- Canvas tem fallback, lazy load e orçamento de DPR?

## Limites de adaptação

Usar esta referência como gramática visual. Não copiar textos, portfólio, fotos, logotipo, ícones proprietários, links sociais, formulário ou identidade pessoal. Recriar padrões com conteúdo, marca, imagens e objetivos do projeto atual.

