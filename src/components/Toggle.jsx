import { func, oneOf } from "prop-types";
import { PRICING_TERMS } from "../constants/pricing.js";

export default function TogglePricingTerm({ pricingTerm, togglePricingTerm }) {
  return (
    <div className="flex gap-4 items-center justify-center">
      <label
        htmlFor="pricing_terms"
        className="opacity-20 capitalize text-sm montserrat-bold"
      >
        annually
      </label>
      <div className="relative inline-block h-6.5 w-12">
        <input
          type="checkbox"
          name="pricing_terms"
          id="pricing_terms"
          className="pricing-checkbox hidden peer"
          checked={pricingTerm !== PRICING_TERMS.ANNUALLY}
          onChange={togglePricingTerm}
        />
        <label
          htmlFor="pricing_terms"
          className="absolute top-0 left-0 w-full h-full bg-linear-to-r from-indigo-200 to-indigo-500 rounded-4xl cursor-pointer duration-300 before:content-[''] before:absolute e before:size-5 before:rounded-full before:top-0.75 before:left-0.75 before:bg-white before:transition-transform before:duration-300 peer-checked:before:translate-x-5.5 hover:opacity-50 transition"
        ></label>
      </div>
      <label
        htmlFor="pricing_terms"
        className="opacity-20 capitalize text-sm montserrat-bold"
      >
        monthly
      </label>
    </div>
  );
}

TogglePricingTerm.propTypes = {
  pricingTerm: oneOf([PRICING_TERMS.ANNUALLY, PRICING_TERMS.MONTHLY])
    .isRequired,
  togglePricingTerm: func.isRequired,
};
