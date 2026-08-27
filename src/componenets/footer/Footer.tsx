function App() {
  return (
    <div className="flex flex-col">

      {/* O resto do conteúdo da sua página entra aqui em cima */}
      <main className="flex-1">
        {/* ex: <h1>Bem-vindo</h1> */}
      </main>

      <footer className="bg-slate-950 text-slate-300 px-6 py-4">
        <div className="mx-auto flex items-center justify-between flex-wrap gap-4">

          {/* Logo + Nome */}
          <div className="flex items-center gap-0">
            <img
              src="https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/Gemini_Generated_Image_obmllvobmllvobml.png"
              alt="Logo NexusHubDev"
              className="w-15 h-15 object-contain"
            />

            <span className="text-white font-semibold text-lg">
              NexusHubDev
            </span>
          </div>

          {/* Copyright + Nomes */}
          <div className="text-right text-sm">
            <p className="text-slate-400">© 2026 Nexus CRM.</p>
            <p className="text-slate-500">Paula, Higor, Nayara, Thais, Guilherme, Edson, João.</p>
          </div>

        </div>
      </footer>
    </div>
  );
}

export default App;