import { services } from "../../data/services"
import ServiceCard from "../ui/ServiceCard"
import SectionHead from "../ui/SectionHead"

function Services({ t, lang }) {
  return (
    <section id="services" className="px-5 pb-20 pt-0 md:pb-24">
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal">
          <SectionHead
            eyebrow={t.services.eyebrow}
            title={t.services.title}
            text={t.services.text}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={`reveal reveal-delay-${(index % 3) + 1}`}
            >
              <ServiceCard service={service} lang={lang} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services