'use client';

import { useEffect, useRef, useState } from 'react';

const services = [
  ['01', 'Design de sobrancelhas', 'Arquitetura personalizada para valorizar expressão, proporção e identidade.'],
  ['02', 'Micropigmentação', 'Técnica, precisão e naturalidade para resultados que respeitam cada rosto.'],
  ['03', 'Brow lamination', 'Alinhamento e volume para sobrancelhas com acabamento contemporâneo.'],
  ['04', 'Cílios', 'Olhar marcante com aplicação cuidadosa e resultado sob medida.'],
  ['05', 'Limpeza de pele', 'Protocolos de cuidado para uma pele renovada, luminosa e bem assistida.'],
  ['06', 'Estética facial', 'Tratamentos pensados a partir das necessidades e objetivos de cada cliente.'],
];

function Arrow({down=false}:{down?:boolean}) { return <span aria-hidden="true">{down ? '↓' : '↗'}</span> }

export default function Home() {
  const [menu, setMenu] = useState(false);
  const rail = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const wheel = (event: WheelEvent) => {
      const delta = event.deltaY || event.deltaX;
      const atStart = el.scrollLeft <= 1;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 1;
      if ((delta < 0 && atStart) || (delta > 0 && atEnd)) return;
      event.preventDefault();
      el.scrollBy({left: delta * 1.15, behavior:'smooth'});
    };
    el.addEventListener('wheel', wheel, {passive:false});
    return () => el.removeEventListener('wheel', wheel);
  }, []);

  return <main>
    <header className="nav">
      <a href="#inicio" className="brand" aria-label="Clínica Iara Marinho, início"><i>IM</i><span>Iara Marinho<small>CLINIC</small></span></a>
      <nav className={menu ? 'open' : ''}>
        <a href="#clinica" onClick={()=>setMenu(false)}>A clínica</a><a href="#servicos" onClick={()=>setMenu(false)}>Especialidades</a><a href="#formacao" onClick={()=>setMenu(false)}>Formação</a><a href="#contato" onClick={()=>setMenu(false)}>Contato</a>
      </nav>
      <a className="navCta" href="https://wa.me/5594991799030" target="_blank">Agendar <Arrow /></a>
      <button className="menu" onClick={()=>setMenu(!menu)} aria-label="Abrir menu">{menu?'FECHAR':'MENU'}</button>
    </header>

    <section className="hero" id="inicio">
      <div className="heroImage" aria-hidden="true" />
      <div className="heroShade" />
      <div className="heroContent">
        <p className="eyebrow"><span /> CLÍNICA DE BELEZA · PARAUAPEBAS</p>
        <h1>Sua beleza<br/><em>em destaque.</em></h1>
        <div className="heroBottom"><p>Um espaço completo onde técnica, cuidado e sofisticação revelam o que já existe de mais bonito em você.</p><a href="#servicos" className="circle"><Arrow down/></a></div>
      </div>
      <div className="heroSeal"><b>IM</b><span>BEAUTY<br/>EXPERIENCE</span></div>
    </section>

    <section className="numbers" aria-label="Destaques da clínica">
      <div><b>17,8 mil</b><span>pessoas acompanham<br/>nosso trabalho</span></div>
      <div><b>01</b><span>estrutura completa<br/>em Parauapebas</span></div>
      <div><b>360°</b><span>beleza, cuidado<br/>e formação</span></div>
      <p>A beleza muda quando encontra<br/><em>conhecimento e intenção.</em></p>
    </section>

    <section className="services" id="servicos">
      <div className="sectionTitle"><p className="eyebrow dark"><span/> EXPERIÊNCIAS IARA MARINHO</p><h2>Escolha como você<br/><em>quer se sentir.</em></h2><p>Role para conhecer <b>→</b></p></div>
      <div className="rail" ref={rail}>
        {services.map((s,i)=><article className="serviceCard" key={s[0]} style={{'--img':`url('/service-${(i%4)+1}.jpg')`} as React.CSSProperties}>
          <div className="cardPhoto"/><span>{s[0]}</span><h3>{s[1]}</h3><p>{s[2]}</p><a href="https://wa.me/5594991799030" target="_blank">Quero saber mais <Arrow/></a>
        </article>)}
      </div>
    </section>

    <section className="clinic" id="clinica">
      <div className="clinicPhoto"><span>PARQUE DOS CARAJÁS II</span></div>
      <div className="clinicCopy"><p className="eyebrow dark"><span/> A CLÍNICA</p><h2>Uma grande estrutura.<br/><em>Um cuidado próximo.</em></h2><p>Do primeiro atendimento ao resultado final, cada detalhe foi pensado para que você viva uma experiência segura, elegante e acolhedora.</p><ul><li><b>01</b> Atendimento personalizado</li><li><b>02</b> Profissionais especializados</li><li><b>03</b> Protocolos e técnicas atuais</li></ul><a className="textLink" href="#contato">Conheça nosso endereço <Arrow/></a></div>
    </section>

    <section className="mosaic">
      <div className="mosaicWords"><span>PRECISÃO</span><span>NATURALIDADE</span><span>EXPERIÊNCIA</span></div>
      <div className="mosaicPhoto one"/><div className="mosaicQuote"><p>“Não criamos um novo rosto. Revelamos, com técnica e delicadeza, a melhor versão de cada expressão.”</p><span>— Filosofia Iara Marinho</span></div><div className="mosaicPhoto two"/>
    </section>

    <section className="academy" id="formacao">
      <div className="academyVisual"><div className="outline">IM</div><div className="academyPhoto"/><span className="tag">PROFISSIONAIS QUE TRANSFORMAM</span></div>
      <div className="academyCopy"><p className="eyebrow"><span/> IARA MARINHO ACADEMY</p><h2>Da experiência<br/>à <em>formação.</em></h2><p>Além de cuidar da beleza, a Iara Marinho compartilha conhecimento. Uma escola para quem deseja transformar talento em técnica, confiança e profissão.</p><div className="academyStats"><span><b>Prática</b>Aprendizado aplicado</span><span><b>Mentoria</b>Olhar profissional</span></div><a className="goldButton" href="https://wa.me/5594991799030?text=Olá!%20Quero%20saber%20sobre%20as%20formações." target="_blank">Conhecer as formações <Arrow/></a></div>
    </section>

    <section className="statement"><p>BELEZA É PRESENÇA</p><h2>Mais que um procedimento.<br/>Uma forma de <em>se reconhecer.</em></h2><a href="https://www.instagram.com/iara_marinho_clinic/" target="_blank">Acompanhe no Instagram <Arrow/></a></section>

    <section className="contact" id="contato">
      <div><p className="eyebrow dark"><span/> VAMOS CONVERSAR</p><h2>Seu próximo momento<br/>de cuidado começa <em>aqui.</em></h2><a className="contactButton" href="https://wa.me/5594991799030" target="_blank">Agendar pelo WhatsApp <Arrow/></a></div>
      <address><span>ENDEREÇO</span><p>Av. Potiguar, Qd. 56, Lt. 19<br/>Parque dos Carajás II<br/>Parauapebas — PA</p><span>ATENDIMENTO</span><p>Consulte horários e disponibilidade<br/>pelo WhatsApp</p><a href="tel:+5594991799030">(94) 99179-9030</a></address>
    </section>
    <footer><a className="brand light" href="#inicio"><i>IM</i><span>Iara Marinho<small>CLINIC</small></span></a><p>© 2026 Clínica Iara Marinho</p><div><a href="https://www.instagram.com/iara_marinho_clinic/" target="_blank">Instagram</a><a href="https://wa.me/5594991799030" target="_blank">WhatsApp</a></div></footer>
    <a className="whatsapp" href="https://wa.me/5594991799030" target="_blank" aria-label="Falar no WhatsApp">WA</a>
  </main>
}
