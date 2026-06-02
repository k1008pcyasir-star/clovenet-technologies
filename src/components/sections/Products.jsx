import { products } from "../../data/products"
import ProductCard from "../ui/ProductCard"
import SectionHead from "../ui/SectionHead"

function Products({ t, lang }) {
  return (
    <section
      id="products"
      className="bg-white/[0.045] px-5 py-20 md:py-24"
    >
      <div className="mx-auto max-w-[1180px]">
        <div className="reveal">
          <SectionHead
            eyebrow={t.products.eyebrow}
            title={t.products.title}
            text={t.products.text}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={product.id}
              className={`reveal reveal-delay-${index + 1}`}
            >
              <ProductCard
                product={product}
                lang={lang}
                t={t}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Products