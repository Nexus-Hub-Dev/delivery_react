import {
  BeerBottle,
  BowlFood,
  Cake,
  ChefHat,
  ChartDonut,
  Cookie,
  Coffee,
  CookingPot,
  Fish,
  ForkKnife,
  Hamburger,
  IceCream,
  Orange,
  Pizza,
  Popcorn,
  Wine,
} from "@phosphor-icons/react";

type IconeCategoriaProps = {
  nome?: string;
  icone?: string;
  tamanho?: number;
};

export function renderizarIconeCategoria({
  nome = "",
  icone,
  tamanho = 24,
}: IconeCategoriaProps) {
  const chave = (icone || nome).toLowerCase();
  if (chave.includes("hamb")) return <Hamburger size={tamanho} weight="fill" />;
  if (chave.includes("pizza")) return <Pizza size={tamanho} weight="fill" />;
  if (chave.includes("massa") || chave.includes("pasta"))
    return <CookingPot size={tamanho} weight="fill" />;
  if (
    chave.includes("saud") ||
    chave.includes("bowl") ||
    chave.includes("salad")
  )
    return <BowlFood size={tamanho} weight="fill" />;
  if (
    chave.includes("jap") ||
    chave.includes("fish") ||
    chave.includes("peixe")
  )
    return <Fish size={tamanho} weight="fill" />;
  if (chave.includes("brasil")) return <Cake size={tamanho} weight="fill" />;
  if (chave.includes("veg")) return <Orange size={tamanho} weight="fill" />;
  if (chave.includes("pipoca") || chave.includes("popcorn"))
    return <Popcorn size={tamanho} weight="fill" />;
  if (chave.includes("donut"))
    return <ChartDonut size={tamanho} weight="fill" />;
  if (chave.includes("sorvete") || chave.includes("ice"))
    return <IceCream size={tamanho} weight="fill" />;
  if (
    chave.includes("sobrem") ||
    chave.includes("cookie") ||
    chave.includes("doce")
  )
    return <Cookie size={tamanho} weight="fill" />;
  if (chave.includes("beb") || chave.includes("beer"))
    return <BeerBottle size={tamanho} weight="fill" />;
  if (chave.includes("cafe") || chave.includes("coffee"))
    return <Coffee size={tamanho} weight="fill" />;
  if (chave.includes("vinho") || chave.includes("wine"))
    return <Wine size={tamanho} weight="fill" />;
  if (
    chave.includes("brasil") ||
    chave.includes("massa") ||
    chave.includes("veg")
  )
    return <ChefHat size={tamanho} weight="fill" />;
  return <ForkKnife size={tamanho} weight="fill" />;
}
