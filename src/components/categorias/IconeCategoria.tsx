import { renderizarIconeCategoria } from "./iconeCategoriaUtils";

type IconeCategoriaProps = {
  nome?: string;
  icone?: string;
  tamanho?: number;
};

function IconeCategoria({ nome, icone, tamanho = 24 }: IconeCategoriaProps) {
  return renderizarIconeCategoria({ nome, icone, tamanho });
}

export default IconeCategoria;
