const equipe = ['Paula', 'Nayara', 'Thais', 'Higor', 'Edson', 'João', 'Guilherme']

function Sobre() {
  return (
    <main className="about-page">
      <section className="about-hero"><span className="eyebrow">Sobre o NexusDelivery</span><h1>Pedidos mais simples.<br /><em>Entregas no ritmo certo.</em></h1><p>Uma plataforma criada para organizar pedidos, acompanhar entregas e dar ao vendedor mais controle sobre cada etapa da operação.</p></section>
      <section className="about-section" id="solucao"><span className="section-kicker">Nossa solução</span><h2>Do pedido à porta, tudo em um só fluxo.</h2><p>O NexusDelivery conecta catálogo, categorias e acompanhamento logístico em uma experiência clara para quem vende e para quem pede.</p><div className="about-stats"><div><strong>01</strong><span>Catálogo organizado</span></div><div><strong>02</strong><span>Pedidos acompanhados</span></div><div><strong>03</strong><span>Equipe em movimento</span></div></div></section>
      <section className="about-team" id="equipe"><span className="section-kicker">Quem faz acontecer</span><h2>Conheça nossa equipe</h2><div className="team-grid">{equipe.map((nome, index) => <article key={nome}><span>{String(index + 1).padStart(2, '0')}</span><h3>{nome}</h3><p>Desenvolvimento e evolução do NexusDelivery.</p></article>)}</div></section>
    </main>
  )
}

export default Sobre
