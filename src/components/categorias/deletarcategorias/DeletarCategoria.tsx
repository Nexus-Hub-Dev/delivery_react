import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import type Categoria from "../../../models/Categoria";
import { buscar, deletar } from "../../../services/Service";
import { ClipLoader } from "react-spinners";


function DeletarCategoria() {

	// Objeto responsável por redirecionar a categoria para outra rota
  const navigate = useNavigate();

  // Estado responsável por controlar o loader (animação de carregamento)
  const [isLoading, setIsLoading] = useState<boolean>(false);

	// Estado responsável por armazenar a categoria que será deletada no Backend (API)
	const [categoria, setCategoria] = useState<Categoria>({} as Categoria);

	// Acessar o parâmetro da rota (id da categoria)
	const { id } = useParams<{ id: string }>();

	// Função responsável por buscar uma categoria pelo ID no Backend (API)
	async function buscarCategoriaPorId() {
		try {
			await buscar(`/categorias/${id}`, setCategoria)
		} catch (error) {
			if (axios.isAxiosError(error)) {
				alert(`Erro ao buscar a categoria (${error.response?.status})`)
			}
		}
	}
	
	// useEffect para monitorar o id (parâmetro da rota)
	useEffect( () => {
		if (id !== undefined){
			buscarCategoriaPorId();
		}
	}, [id])

// Função responsável por deletar uma categoria pelo ID no Backend (API)
	async function deletarCategoria(){

		setIsLoading(true);

		try{

				await deletar(`/categorias/${id}`)

				alert('Categoria deletada com sucesso!')

		}catch (error){
			if (axios.isAxiosError(error)){
          alert(`Erro ao deletar a categoria (${error.response?.status})`);
        }
		}finally {
			setIsLoading(false);
		}

		retornar();
	}

	function retornar(){
		navigate("/categorias");
	}

	return (
		<div className="container w-1/3 mx-auto">
			<h1 className="text-4xl text-center my-4">Deletar categoria</h1>

			<p className="text-center font-semibold mb-4">
				Você tem certeza de que deseja apagar a categoria a seguir?
			</p>

			<div className="border flex flex-col rounded-2xl overflow-hidden justify-between">
				<header className="py-2 px-6 bg-indigo-600 text-white font-bold text-2xl">
					Categoria
				</header>

				<p className="p-8 text-3xl bg-slate-200 h-full">{categoria.tipo}</p>

				<div className="flex">
					<button className="text-slate-100 bg-red-400 hover:bg-red-600 w-full py-2 cursor-pointer" onClick={retornar}>
						Não
					</button>

					<button
						className="w-full text-slate-100 bg-indigo-400
                      hover:bg-indigo-600 flex items-center justify-center cursor-pointer"
						onClick={deletarCategoria}
					>
						{
                isLoading ? (
                      <ClipLoader
                        color="#ffffff"
                        size={24}
                      />
                  ):(
                    <span>Sim</span>
                  )
                }
					</button>
				</div>
			</div>
		</div>
	)
}
export default DeletarCategoria