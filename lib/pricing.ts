import { fees } from "@/config/site";

/** Government fees for a party, in USD, for display in the planner and FAQ. */
export function estimateSdf(nights: number, adults: number, childAges: number[] = []) {
  const adultTotal = nights * adults * fees.sdf.adultPerNightUSD;
  const childTotal = childAges.reduce((sum, age) => {
    if (age < fees.sdf.childFreeUnderAge) return sum;
    if (age <= fees.sdf.childRateMaxAge) return sum + nights * fees.sdf.childPerNightUSD;
    return sum + nights * fees.sdf.adultPerNightUSD;
  }, 0);
  return { adultTotal, childTotal, total: adultTotal + childTotal };
}

export const feeLabel = (sdfIncluded: boolean, visaIncluded?: boolean) =>
  [sdfIncluded ? "SDF included" : "SDF not included", visaIncluded === undefined ? null : visaIncluded ? "Visa fee included" : "Visa fee not included"]
    .filter(Boolean)
    .join(" · ");
