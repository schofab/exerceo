export const metadata = {
  title: "Contact — Exerceo",
};

export default function ContactPage() {
  return (
    <article className="space-y-5 animate-fade-slide-up">
      <h1 className="text-2xl font-extrabold" style={{ color: "#071453" }}>
        Contact
      </h1>

      <div className="space-y-4 text-sm leading-relaxed text-gray-600">
        <p>
          Pour toute question concernant l'application Exerceo, vous pouvez
          nous contacter à l'adresse suivante :
        </p>

        <div className="rounded-2xl p-5" style={{ backgroundColor: "#f5f9ff" }}>
          <a
            href="mailto:hellomixarto@gmail.com"
            className="text-base font-bold"
            style={{ color: "#748bf7" }}
          >
            hellomixarto@gmail.com
          </a>
        </div>

        <p>
          Nous faisons de notre mieux pour répondre dans les meilleurs délais.
        </p>
      </div>
    </article>
  );
}
