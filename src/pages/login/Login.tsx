import { Link } from "react-router-dom";

function Login() {
  return (
    <main className="login-page">
      <section className="login-panel">
        <div className="login-heading">
          <span className="section-kicker">Área restrita</span>
          <h1>Bem-vindo de volta</h1>
          <p>Entre para acompanhar seus pedidos no NexusDelivery.</p>
        </div>

        <form className="login-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            E-mail
            <input type="email" placeholder="seu@email.com" required />
          </label>
          <label>
            Senha
            <input type="password" placeholder="Digite sua senha" required />
          </label>
          <button type="submit" className="login-submit">
            Entrar
          </button>
        </form>

        <Link to="/" className="login-back-link">
          Voltar ao catálogo
        </Link>
      </section>
    </main>
  );
}

export default Login;
