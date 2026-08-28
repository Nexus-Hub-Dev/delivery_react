const equipe = [
  ["Paula", "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/Paula_Leao.png"],
  ["Nayara", "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/nayara_bastos.png"],
  ["Thais", "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/thais_santana.jpg"],
  ["Higor", "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/higor_damasceno.png"],
  ["Edson", "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/edson_nascimento.jpg"],
  ["João", "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/joao_ribeiro.jpg"],
  ["Guilherme", "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/guilherme_sandoli.png"],
];

const criarFallbackFoto = (nome: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112"><rect width="112" height="112" fill="#EDE4FF"/><text x="56" y="70" fill="#7548B8" font-family="Arial,sans-serif" font-size="48" font-weight="700" text-anchor="middle">${nome.charAt(0)}</text></svg>`)}`;

function Sobre() {
  return (
    <main className="about-page">
      <section className="about-hero">
        <span className="eyebrow">Sobre o NexusDelivery</span>
        <h1>
          Pedidos mais simples.
          <br />
          <em>Entregas no ritmo certo.</em>
        </h1>
        <p>
          Uma plataforma criada para organizar pedidos, acompanhar entregas e
          dar ao vendedor mais controle sobre cada etapa da operação.
        </p>
      </section>
      <section className="about-section" id="solucao">
        <span className="section-kicker">Nossa solução</span>
        <h2>Do pedido à porta, tudo em um só fluxo.</h2>
        <p>
          O NexusDelivery conecta catálogo, categorias e acompanhamento
          logístico em uma experiência clara para quem vende e para quem pede.
        </p>
        <div className="about-stats">
          <div>
            <strong>01</strong>
            <span>Catálogo organizado</span>
          </div>
          <div>
            <strong>02</strong>
            <span>Pedidos acompanhados</span>
          </div>
          <div>
            <strong>03</strong>
            <span>Equipe em movimento</span>
          </div>
        </div>
      </section>
      <section className="about-team" id="equipe">
        <span className="section-kicker">Quem faz acontecer</span>
        <h2>Conheça nossa equipe</h2>
        <div className="team-grid">
          {equipe.map(([nome, foto], index) => (
            <article key={nome}>
              <img
                className="team-photo"
                src={foto}
                alt={`Foto de ${nome}`}
                loading="lazy"
                referrerPolicy="no-referrer"
                onError={(event) => {
                  event.currentTarget.onerror = null;
                  event.currentTarget.src = criarFallbackFoto(nome);
                }}
              />
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{nome}</h3>
              <p>Desenvolvimento e evolução do NexusDelivery.</p>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Sobre;
