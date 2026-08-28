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
			await buscar(`/categoria/${id}`, setCategoria)
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

				await deletar(`/categoria/${id}`)

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
		<div className="category-delete-page">
			<h1>Deletar categoria</h1>

			<p className="text-center font-semibold mb-4">
				Você tem certeza de que deseja apagar a categoria a seguir?
			</p>

			<div className="category-delete-card">
				<header className="category-card-header">
					Categoria
				</header>

				<div className="category-delete-content"><strong>{categoria.tipo}</strong><p>{categoria.descricao}</p></div>

				<div className="category-delete-actions">
					<button className="category-delete-no" onClick={retornar}>
						Não
					</button>

					<button
						className="category-delete-yes"
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