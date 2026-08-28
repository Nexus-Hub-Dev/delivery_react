function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        {/* Logo + Nome */}
        <div className="site-footer-brand">
          <img
            src="https://ik.imagekit.io/beakrg2dk/PI1%20-%20CRM/Gemini_Generated_Image_obmllvobmllvobml.png"
            alt="Logo NexusHubDev"
            className="w-15 h-15 object-contain"
          />

          <span>NexusHubDev</span>
        </div>

        {/* Copyright + Nomes */}
        <div className="site-footer-copy">
          <p>© 2026 NexusDelivery.</p>
          <p>Paula, Higor, Nayara, Thais, Guilherme, Edson, João.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
