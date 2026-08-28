const equipe = [
  {
    nome: "Paula",
    cargo: "Desenvolvedora",
    foto: "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/Paula_Leao.png",
    descricao:
      "Responsável pelo desenvolvimento e implementação das principais funcionalidades do Nexus CRM.",
  },
  {
    nome: "Nayara",
    cargo: "Desenvolvedora",
    foto: "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/nayara_bastos.png",
    descricao:
      "Atua no desenvolvimento da aplicação e na implementação de soluções para o sistema.",
  },
  {
    nome: "Thais",
    cargo: "Desenvolvedora",
    foto: "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/thais_santana.jpg",
    descricao:
      "Contribui para o desenvolvimento e organização das funcionalidades do Nexus CRM.",
  },
  {
    nome: "Higor",
    cargo: "Desenvolvedor",
    foto: "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/higor_damasceno.png",
    descricao:
      "Atua na construção e evolução das funcionalidades, contribuindo para o aprimoramento do sistema.",
  },
  {
    nome: "Edson",
    cargo: "Desenvolvedor",
    foto: "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/edson_nascimento.jpg",
    descricao:
      "Responsável pelo desenvolvimento e integração dos recursos da aplicação.",
  },
  {
    nome: "João",
    cargo: "Desenvolvedor",
    foto: "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/joao_ribeiro.jpg",
    descricao:
      "Contribui com o desenvolvimento, testes e aprimoramento das funcionalidades do sistema.",
  },
  {
    nome: "Guilherme",
    cargo: "Desenvolvedor",
    foto: "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/guilherme_sandoli.png",
    descricao:
      "Atua no desenvolvimento e aprimoramento das soluções propostas pelo Nexus CRM.",
  },
];

const logo =
  "https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/Gemini_Generated_Image_obmllvobmllvobml.png";

const criarFallbackFoto = (nome: string) =>
  `data:image/svg+xml,${encodeURIComponent(`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 112 112"><rect width="112" height="112" fill="#EDE4FF"/><text x="56" y="70" fill="#7548B8" font-family="Arial,sans-serif" font-size="48" font-weight="700" text-anchor="middle">${nome.charAt(0)}</text></svg>`)}`;

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FAF8FF] text-[#29213D]">
      {/* =========================
      PARTE 1 — HERO
  ========================== */}
      <section id="inicio" className="relative overflow-hidden">
        {/* Elementos decorativos */}
        <div className="absolute -left-32 top-20 h-72 w-72 rounded-full bg-[#E9DEFF] blur-3xl" />

        <div className="absolute -right-32 bottom-10 h-80 w-80 rounded-full bg-[#E5D6FF] blur-3xl" />

        <div className="relative mx-auto grid min-h-[650px] max-w-7xl items-center gap-14 px-6 py-20 lg:grid-cols-2 lg:px-10">
          {/* TEXTO */}
          <div className="max-w-xl">
            {/* LOGO */}
            <div className="mb-6">
              <img
                src={logo}
                alt="NexusDelivery Logo"
                className="h-28 w-auto object-contain object-left"
              />
            </div>

            <span className="inline-block rounded-full bg-[#EDE4FF] px-4 py-2 text-sm font-semibold text-[#7047A8]">
              Controle logístico inteligente
            </span>

            <h1 className="mt-6 text-5xl font-extrabold leading-tight tracking-tight text-[#29213D] md:text-6xl">
              Agilize seus pedidos.
              <span className="block text-[#7548B8]">
                Controle suas entregas.
              </span>
            </h1>

            <p className="mt-6 text-lg leading-8 text-[#6D647C]">
              O NexusDelivery é um sistema focado na gestão de pedidos e no
              acompanhamento logístico. Substitua o controle manual por um fluxo
              estruturado e digital.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#equipe"
                className="rounded-lg bg-[#7548B8] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#7548B8]/20 transition hover:-translate-y-1 hover:bg-[#63389F]"
              >
                Conheça nossa equipe
              </a>

              <a
                href="#solucao"
                className="rounded-lg border border-[#D8C9EF] bg-white px-7 py-3.5 font-semibold text-[#7548B8] transition hover:bg-[#F0E9FF]"
              >
                Sobre o NexusDelivery
              </a>
            </div>
          </div>

          {/* =========================
          MOCKUP (Adaptado para Delivery)
      ========================== */}
          <div className="relative">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-[#DCC7FF] blur-3xl" />

            <div className="relative rounded-3xl border border-[#E4D9F4] bg-white p-3 shadow-2xl shadow-[#7548B8]/10">
              <div className="overflow-hidden rounded-2xl bg-[#EDE4FF]">
                <div className="p-8">
                  {/* Cabeçalho do App */}
                  <div className="flex items-center">
                    <img
                      src={logo}
                      alt="NexusDelivery Logo"
                      className="h-16 w-auto max-w-[190px] object-contain object-left"
                    />
                  </div>

                  {/* Cards */}
                  <div className="mt-7 grid grid-cols-2 gap-4">
                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <p className="text-sm text-[#766B85]">Em Preparo</p>

                      <p className="mt-2 text-3xl font-bold text-[#7548B8]">
                        34
                      </p>

                      <div className="mt-4 h-2 rounded-full bg-[#E9DEFF]">
                        <div className="h-2 w-4/5 rounded-full bg-[#7548B8]" />
                      </div>
                    </div>

                    <div className="rounded-2xl bg-white p-5 shadow-sm">
                      <p className="text-sm text-[#766B85]">Em Rota</p>

                      <p className="mt-2 text-3xl font-bold text-[#7548B8]">
                        12
                      </p>

                      <div className="mt-4 h-2 rounded-full bg-[#E9DEFF]">
                        <div className="h-2 w-3/5 rounded-full bg-[#9066C6]" />
                      </div>
                    </div>

                    {/* Gráfico */}
                    <div className="col-span-2 rounded-2xl bg-white p-5 shadow-sm">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-sm text-[#766B85]">
                            Fluxo de hoje
                          </p>

                          <p className="mt-1 font-bold text-[#29213D]">
                            Entregas Concluídas
                          </p>
                        </div>

                        <span className="rounded-full bg-[#EDE4FF] px-3 py-1 text-sm font-semibold text-[#7548B8]">
                          +18%
                        </span>
                      </div>

                      <div className="mt-7 flex h-28 items-end gap-3">
                        <div className="h-[30%] flex-1 rounded-t-md bg-[#D9C7F2]" />
                        <div className="h-[45%] flex-1 rounded-t-md bg-[#C8AFE9]" />
                        <div className="h-[40%] flex-1 rounded-t-md bg-[#B392D8]" />
                        <div className="h-[65%] flex-1 rounded-t-md bg-[#9A72C5]" />
                        <div className="h-[80%] flex-1 rounded-t-md bg-[#8757B7]" />
                        <div className="h-full flex-1 rounded-t-md bg-[#7548B8]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================
      PEQUENA APRESENTAÇÃO
  ========================== */}
      <section
        id="solucao"
        className="border-y border-[#E6DCF3] bg-white py-20"
      >
        <div className="mx-auto max-w-3xl px-6 text-center">
          {/* LOGO */}
          <img
            src={logo}
            alt="NexusDelivery Logo"
            className="mx-auto mb-6 h-20 w-auto object-contain"
          />

          <span className="text-sm font-bold uppercase tracking-widest text-[#8A5DB8]">
            NexusDelivery
          </span>

          <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#29213D]">
            Gestão total sobre os pedidos em aberto
          </h2>

          <p className="mt-5 text-lg leading-8 text-[#6D647C]">
            Ganhe agilidade no preparo monitorando detalhadamente cada pedido.
            Categorize fluxos (Aguardando, Em Preparo, Em Rota, Entregue ou
            Cancelado) e garanta que nenhuma entrega atrase ou seja esquecida,
            além de facilitar a automação de relatórios de vendas.
          </p>
        </div>
      </section>

      {/* =========================
      PARTE 2 — EQUIPE
  ========================== */}
      <section id="equipe" className="bg-[#FAF8FF] py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          {/* TÍTULO */}
          <div className="mx-auto max-w-2xl text-center">
            {/* LOGO PEQUENA */}
            <img
              src={logo}
              alt="NexusDelivery Logo"
              className="mx-auto mb-5 h-20 w-auto object-contain"
            />

            <span className="text-sm font-bold uppercase tracking-widest text-[#8A5DB8]">
              Sobre nós
            </span>

            <h2 className="mt-3 text-4xl font-bold tracking-tight text-[#29213D] md:text-5xl">
              Conheça nosso time
            </h2>

            <p className="mt-5 leading-7 text-[#6D647C]">
              Por trás do NexusDelivery existe uma equipe que trabalha em
              conjunto para transformar a logística do seu estabelecimento
              através da tecnologia.
            </p>
          </div>

          {/* =========================
          CARDS DA EQUIPE
      ========================== */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipe.map((pessoa) => (
              <div
                key={pessoa.nome}
                className="group rounded-2xl border border-[#E4D9F4] bg-white p-6 text-center shadow-sm transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#7548B8]/10"
              >
                {/* FOTO */}
                <div className="mx-auto h-28 w-28 overflow-hidden rounded-full border-4 border-[#EDE4FF] bg-[#EDE4FF] shadow-sm">
                  <img
                    src={pessoa.foto}
                    alt={`Foto de ${pessoa.nome}`}
                    className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    onError={(event) => {
                      event.currentTarget.onerror = null;
                      event.currentTarget.src = criarFallbackFoto(pessoa.nome);
                    }}
                  />
                </div>

                {/* NOME */}
                <h3 className="mt-5 text-xl font-bold text-[#29213D]">
                  {pessoa.nome}
                </h3>

                {/* CARGO */}
                <p className="mt-1 text-sm font-semibold text-[#7548B8]">
                  {pessoa.cargo}
                </p>

                {/* DESCRIÇÃO */}
                <p className="mt-4 text-sm leading-6 text-[#6D647C]">
                  {pessoa.descricao}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
