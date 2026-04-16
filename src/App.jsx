import { useState } from "react";
import { PLANS, PRICING_TERMS } from "./constants/pricing.js";
import TogglePricingTerm from "./components/Toggle.jsx";
import Link from "./components/Link.jsx";

export default function App() {
  const [pricingTerm, setPricingTerm] = useState(PRICING_TERMS.ANNUALLY);

  function togglePricingTerm() {
    if (pricingTerm === PRICING_TERMS.ANNUALLY) {
      setPricingTerm(PRICING_TERMS.MONTHLY);
      return;
    }

    setPricingTerm(PRICING_TERMS.ANNUALLY);
  }
  return (
    <div className="bg-blue-50 bg-no-repeat wrapper min-h-screen flex flex-col items-center py-14 px-4 gap-12">
      <header className="capitalize space-y-8 text-center">
        <h1 className="text-3xl text-gray-650 montserrat-bold">our pricing</h1>
        <TogglePricingTerm
          pricingTerm={pricingTerm}
          togglePricingTerm={togglePricingTerm}
        />
      </header>
      <main className="w-full max-w-sm lg:max-w-none">
        <ul className="flex flex-col gap-7 lg:flex-row lg:gap-0 lg:items-center lg:justify-center">
          {PLANS.map((plan) => {
            const { NAME, SEND_SIZE_LIMIT, STORAGE, USERS_COUNT, FEATURED } =
              plan;
            return (
              <li
                key={NAME}
                className={`card ${FEATURED ? "card--primary" : "card--secondary"} ${NAME === "basic" ? "card--basic-pricing" : NAME === "master" ? "card--master-pricing" : "card--professional-pricing"}`}
              >
                <h2 className="capitalize">{NAME}</h2>
                <p className="price">
                  <span className="text-4xl">$</span>
                  <span className="text-7xl">{plan[pricingTerm]}</span>
                </p>
                <ul className="feature-list">
                  <li>{STORAGE} Storage</li>
                  <li>{USERS_COUNT} Users Allowed</li>
                  <li>Send up to {SEND_SIZE_LIMIT}</li>
                </ul>
                <Link className="btn--learn-more my-3">
                  <span>learn more</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </main>
    </div>
  );
}
