import { useEffect, useState } from "react";
import CardCategoria from "../cardcategorias/CardCategoria";
import type Categoria from "../../../models/Categoria";
import { buscar } from "../../../services/Service";
import axios from "axios";
import { SyncLoader } from "react-spinners";

function ListaCategorias() {
  // Estado responsável por controlar o loader (animação de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Estado responsável por armazenar todas as categorias persistidas no Backend (API)
  const [categorias, setCategorias] = useState<Categoria[]>([]);

  // Função responsável por buscar todas as categorias no Backend (API)
  async function buscarCategorias() {
    try {
      await buscar(`/categoria`, setCategorias);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        alert(`Erro ao buscar as categorias (${error.response?.status})`);
      }
    } finally {
      setIsLoading(false);
    }
  }

  // useEffect responsável por executar a função buscarCategorias
  useEffect(() => {
    queueMicrotask(() => void buscarCategorias());
  }, []);

  return (
    <>
      {isLoading && (
        <div className="flex justify-center w-full my-8">
          <SyncLoader color="#312e81" size={32} />
        </div>
      )}

      <div className="flex justify-center w-full px-4 my-4">
        <div className="container flex flex-col">
          {!isLoading && categorias.length === 0 && (
            <span className="text-3xl text-center my-8">
              Nenhuma categoria foi encontrada!
            </span>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <CardCategoria key={categoria.id} categoria={categoria} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
export default ListaCategorias;
