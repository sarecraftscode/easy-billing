const formatAmount = (amount: number | undefined): string => {
  if (!amount) return "0,00 €";
  return new Intl.NumberFormat("fr-FR", {
    style: "currency",
    currency: "EUR",
  }).format(amount);
};

export default formatAmount;
