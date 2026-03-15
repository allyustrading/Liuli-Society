export default function App() {
  const navItems = [
    "Home",
    "About",
    "Our Approach",
    "Wellness Pathways",
    "Research at UNH BIC",
    "Community",
    "Updates",
    "Support Us",
    "Contact",
  ];

  const pillars = [
    {
      title: "Health Knowledge System",
      subtitle: "健康知识体系",
      body:
        "We translate wellness knowledge into practical, understandable guidance for daily life.",
    },
    {
      title: "Thoughtful Product Design",
      subtitle: "产品设计逻辑",
      body:
        "Our design process begins with real-life wellness needs and a deeper understanding of health support.",
    },
    {
      title: "Companion Support Service",
      subtitle: "陪伴跟踪服务",
      body:
        "We believe trust grows through follow-up, listening, education, and long-term support.",
    },
  ];

  const pathways = [
    "Comfort & Circulation Support",
    "Daily Natural Skin Wellness",
    "Special Skin Care Support",
    "Light Balance & Clean Living",
    "Calm & Rest Support",
    "Emotional Ease & Mood Balance",
    "Better Living Rituals",
    "Focus & Clarity Support",
    "Space Purification & Atmosphere",
  ];

  const trustItems = [
    "U.S. 501(c)(3) Nonprofit",
    "Research-Informed Approach",
    "Community-Centered Mission",
    "Innovation Environment at UNH BIC",
  ];

  const communityItems = [
    "Community education",
    "Small-group experiences",
    "Wellness learning circles",
    "Volunteer opportunities",
    "Long-term community support vision",
  ];

  const updateItems = [
    {
      type: "Project Update",
      title: "Building the Liuli knowledge framework",
      text: "An evolving foundation for research-informed wellness education, everyday support, and future community programming.",
    },
    {
      type: "Education Article",
      title: "Why understanding comes before design",
      text: "A reflection on how knowledge, context, and daily living needs shape thoughtful wellness pathways.",
    },
    {
      type: "Community Note",
      title: "Exploring small-group learning models",
      text: "How intimate educational formats can make wellness knowledge more accessible, supportive, and human.",
    },
  ];

  const inquiryTypes = [
    "University / research collaboration",
    "Community partnership",
    "Education inquiry",
    "Volunteer interest",
    "General mission-aligned partnership",
  ];

  return (
    <div className="min-h-screen bg-[#f7f3ea] text-slate-800">
      <header className="sticky top-0 z-50 border-b border-[#d6d2c6] bg-[#f7f3ea]/90 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 lg:px-8">
          <div>
            <div className="text-2xl font-semibold tracking-wide text-[#1f5f5b]">Liuli Society</div>
            <div className="text-sm text-slate-600">
              Research-Informed Wellness Education and Community Innovation at UNH BIC
            </div>
          </div>
          <nav className="hidden gap-6 text-sm lg:flex">
            {navItems.map((item) => (
              <a key={item} href={`#${item.toLowerCase().replace(/\s+/g, "-")}`} className="transition hover:text-[#1f5f5b]">
                {item}
              </a>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section id="home" className="relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(82,143,132,0.18),transparent_35%),radial-gradient(circle_at_bottom_right,rgba(179,148,89,0.12),transparent_30%)]" />
          <div className="mx-auto grid max-w-7xl gap-12 px-4 py-20 lg:grid-cols-[1.2fr_0.8fr] lg:px-8 lg:py-28">
            <div className="relative">
              <div className="mb-5 inline-flex items-center rounded-full border border-[#c7d3ce] bg-white/70 px-4 py-2 text-sm text-[#285f5a] shadow-sm">
                U.S. 501(c)(3) nonprofit · Research-informed · Community-centered
              </div>
              <h1 className="max-w-4xl text-4xl font-semibold leading-tight text-slate-900 md:text-6xl">
                Building a Research-Informed Natural Wellness Platform at UNH BIC
              </h1>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-700">
                Liuli Society is a U.S. 501(c)(3) nonprofit organization advancing wellness education,
                thoughtful product innovation, and companion-centered community support through a
                research-informed approach.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <a
                  href="#about"
                  className="rounded-2xl bg-[#1f5f5b] px-6 py-3 text-sm font-medium text-white shadow-lg shadow-[#1f5f5b]/20 transition hover:-translate-y-0.5"
                >
                  About Liuli Society
                </a>
                <a
                  href="#our-approach"
                  className="rounded-2xl border border-[#b8c4be] bg-white px-6 py-3 text-sm font-medium text-slate-800 transition hover:border-[#1f5f5b] hover:text-[#1f5f5b]"
                >
                  Explore Our Approach
                </a>
                <a
                  href="#contact"
                  className="rounded-2xl border border-transparent px-6 py-3 text-sm font-medium text-slate-700 transition hover:text-[#1f5f5b]"
                >
                  Connect With Us
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-[2rem] border border-[#d8d1c0] bg-white/90 p-6 shadow-2xl shadow-black/5">
                <div className="rounded-[1.5rem] bg-[linear-gradient(135deg,#eaf2ec,#f5efe1)] p-6">
                  <div className="text-sm uppercase tracking-[0.2em] text-[#7b735f]">Key Strategic Message</div>
                  <p className="mt-4 text-2xl font-medium leading-9 text-slate-900">
                    Liuli Society is a U.S. 501(c)(3) nonprofit organization building a
                    research-informed, community-centered natural wellness platform at UNH BIC.
                  </p>
                  <div className="mt-6 grid gap-3">
                    {trustItems.map((item) => (
                      <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/80 px-4 py-3 text-sm text-slate-700 shadow-sm">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#1f5f5b]" />
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="border-y border-[#ddd6c8] bg-white/60">
          <div className="mx-auto grid max-w-7xl gap-4 px-4 py-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
            {trustItems.map((item) => (
              <div key={item} className="rounded-2xl border border-[#d8d1c0] bg-white px-5 py-4 text-sm font-medium text-slate-700 shadow-sm">
                {item}
              </div>
            ))}
          </div>
        </section>

        <section id="about" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#1f5f5b]">About</div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Our Mission</h2>
            </div>
            <div className="space-y-6 text-lg leading-8 text-slate-700">
              <p>
                We are committed to advancing natural wellness through education, research-informed
                design, and community-based support. Our mission is to make healthy living more
                understandable, more accessible, and more humane for individuals, families, and
                communities.
              </p>
              <div className="grid gap-5 md:grid-cols-2">
                <div className="rounded-[1.75rem] border border-[#d8d1c0] bg-white p-6 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#7b735f]">Who We Are</div>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    Liuli Society is a U.S. nonprofit organization recognized as tax-exempt under
                    Section 501(c)(3) of the Internal Revenue Code.
                  </p>
                </div>
                <div className="rounded-[1.75rem] border border-[#d8d1c0] bg-white p-6 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#7b735f]">Why This Model</div>
                  <p className="mt-3 text-base leading-7 text-slate-700">
                    We exist to support education, research-informed innovation, and community-based
                    initiatives rather than product sales or commercial promotion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="our-approach" className="bg-[#edf4ef] py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-[#1f5f5b]">Our Approach</div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                Our approach begins not with selling, but with understanding.
              </h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                Liuli Society is built around a knowledge-first model: from understanding, to
                design, to daily support, and ultimately to long-term trust through companion-style
                education and follow-through.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {pillars.map((pillar) => (
                <div key={pillar.title} className="rounded-[2rem] border border-[#d1ddd6] bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#1f5f5b]">{pillar.subtitle}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{pillar.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{pillar.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="wellness-pathways" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="max-w-3xl">
            <div className="text-sm uppercase tracking-[0.22em] text-[#1f5f5b]">Wellness Pathways</div>
            <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
              A framework organized around nine pathways
            </h2>
            <p className="mt-5 text-lg leading-8 text-slate-700">
              Our wellness framework is organized into nine pathways that reflect everyday needs,
              natural care experiences, and future areas of research and education.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {pathways.map((pathway, index) => (
              <div key={pathway} className="rounded-[1.8rem] border border-[#ddd6c8] bg-white p-6 shadow-sm">
                <div className="text-sm font-medium text-[#7b735f]">Pathway {index + 1}</div>
                <h3 className="mt-3 text-xl font-semibold text-slate-900">{pathway}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-700">
                  Education-centered exploration and supportive everyday wellness guidance shaped by
                  thoughtful design and community understanding.
                </p>
              </div>
            ))}
          </div>
        </section>

        <section id="research-at-unh-bic" className="bg-[#103b39] py-20 text-white">
          <div className="mx-auto grid max-w-7xl gap-10 px-4 lg:grid-cols-[1fr_0.95fr] lg:px-8">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#b9d8d1]">Research at UNH BIC</div>
              <h2 className="mt-4 text-3xl font-semibold md:text-4xl">
                Research and innovation within the UNH BIC environment
              </h2>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                Within the innovation environment of UNH BIC, Liuli Society is developing a
                nonprofit platform for wellness education, exploratory formulation design,
                community-centered pilot initiatives, and long-term mission-driven growth.
              </p>
            </div>
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-7 backdrop-blur-sm">
              <div className="grid gap-4">
                {[
                  "Early-stage wellness innovation",
                  "Education-centered pilot models",
                  "Community-facing initiatives",
                  "Responsible exploration and refinement",
                ].map((item) => (
                  <div key={item} className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-slate-100">
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="community" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#1f5f5b]">Community</div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Community impact rooted in education and support</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                We aim to build a model that does more than offer products. By integrating
                education, thoughtful design, and human-centered follow-through, we hope to create a
                healthier and more supportive experience for the communities we serve.
              </p>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {communityItems.map((item) => (
                <div key={item} className="rounded-[1.7rem] border border-[#ddd6c8] bg-white p-6 shadow-sm">
                  <h3 className="text-lg font-semibold text-slate-900">{item}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-700">
                    Mission-aligned programs that encourage learning, dialogue, and sustained
                    community wellbeing.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="updates" className="bg-[#f1eee6] py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="text-sm uppercase tracking-[0.22em] text-[#1f5f5b]">Updates</div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Space for ongoing project updates and educational content</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                A nonprofit-friendly publishing area for project developments, educational articles,
                community events, research notes, and reflections on wellness design.
              </p>
            </div>

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              {updateItems.map((item) => (
                <article key={item.title} className="rounded-[1.8rem] border border-[#ddd6c8] bg-white p-7 shadow-sm">
                  <div className="text-sm uppercase tracking-[0.18em] text-[#7b735f]">{item.type}</div>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-4 leading-7 text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="support-us" className="mx-auto max-w-7xl px-4 py-20 lg:px-8">
          <div className="grid gap-8 rounded-[2.2rem] border border-[#d8d1c0] bg-[linear-gradient(135deg,#ffffff,#f6f0e5)] p-8 shadow-xl shadow-black/5 lg:grid-cols-[1.2fr_0.8fr] lg:p-12">
            <div>
              <div className="text-sm uppercase tracking-[0.22em] text-[#1f5f5b]">Support Us</div>
              <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">Support our mission</h2>
              <p className="mt-5 text-lg leading-8 text-slate-700">
                As a 501(c)(3) nonprofit organization, Liuli Society welcomes mission-aligned
                partnerships, educational collaborations, and future support opportunities that help
                expand community wellness impact.
              </p>
              <p className="mt-5 text-sm leading-7 text-slate-600">
                Contributions may be tax-deductible to the extent permitted by law.
              </p>
            </div>
            <div className="flex flex-col justify-center gap-4">
              <a href="#contact" className="rounded-2xl bg-[#1f5f5b] px-6 py-4 text-center text-sm font-medium text-white shadow-lg shadow-[#1f5f5b]/20">
                Partner With Us
              </a>
              <a href="#contact" className="rounded-2xl border border-[#c5c0b4] bg-white px-6 py-4 text-center text-sm font-medium text-slate-800">
                Support the Mission
              </a>
            </div>
          </div>
        </section>

        <section id="contact" className="bg-[#edf4ef] py-20">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-10 lg:grid-cols-[0.95fr_1.05fr]">
              <div>
                <div className="text-sm uppercase tracking-[0.22em] text-[#1f5f5b]">Contact</div>
                <h2 className="mt-4 text-3xl font-semibold text-slate-900 md:text-4xl">
                  Let’s build a better wellness future together
                </h2>
                <p className="mt-5 text-lg leading-8 text-slate-700">
                  We welcome conversations with educators, researchers, community partners, and
                  supporters who believe in a more thoughtful approach to natural wellness.
                </p>
                <div className="mt-8 grid gap-3">
                  {inquiryTypes.map((item) => (
                    <div key={item} className="rounded-2xl border border-[#d1ddd6] bg-white px-4 py-3 text-sm text-slate-700 shadow-sm">
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              <div className="rounded-[2rem] border border-[#d1ddd6] bg-white p-8 shadow-sm">
                <div className="grid gap-5">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Name</label>
                    <input className="w-full rounded-2xl border border-[#d7d2c5] bg-[#fcfbf8] px-4 py-3 outline-none transition focus:border-[#1f5f5b]" placeholder="Your name" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Email</label>
                    <input className="w-full rounded-2xl border border-[#d7d2c5] bg-[#fcfbf8] px-4 py-3 outline-none transition focus:border-[#1f5f5b]" placeholder="your@email.org" />
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Inquiry Type</label>
                    <select className="w-full rounded-2xl border border-[#d7d2c5] bg-[#fcfbf8] px-4 py-3 outline-none transition focus:border-[#1f5f5b]">
                      {inquiryTypes.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="mb-2 block text-sm font-medium text-slate-700">Message</label>
                    <textarea rows={5} className="w-full rounded-2xl border border-[#d7d2c5] bg-[#fcfbf8] px-4 py-3 outline-none transition focus:border-[#1f5f5b]" placeholder="Tell us about your interest or collaboration idea" />
                  </div>
                  <button className="rounded-2xl bg-[#1f5f5b] px-6 py-4 text-sm font-medium text-white shadow-lg shadow-[#1f5f5b]/20">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-[#d8d1c0] bg-[#f7f3ea]">
        <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 lg:grid-cols-[1.2fr_0.8fr] lg:px-8">
          <div>
            <div className="text-2xl font-semibold text-[#1f5f5b]">Liuli Society</div>
            <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
              Liuli Society is a registered 501(c)(3) nonprofit organization in the United States.
              Contributions may be tax-deductible to the extent permitted by law.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-600">
              Liuli Society is developing its nonprofit wellness innovation work within the broader
              innovation environment of UNH BIC.
            </p>
            <p className="mt-3 max-w-3xl text-sm leading-7 text-slate-500">
              This website is dedicated to the nonprofit mission of education, research, and
              community support. It is not a product sales or commercial promotional website.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4 text-sm text-slate-600">
            {["Mission", "Research", "Community", "Support", "Contact", "Updates"].map((item) => (
              <a key={item} href="#" className="transition hover:text-[#1f5f5b]">
                {item}
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
}
