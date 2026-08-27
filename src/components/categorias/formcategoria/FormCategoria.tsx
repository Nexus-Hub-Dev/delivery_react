import { useEffect, useState, type ChangeEvent, type SyntheticEvent } from "react"
import { useNavigate, useParams } from "react-router-dom"
import type Categoria from "../../../models/Categoria"
import { atualizar, buscar, cadastrar } from "../../../services/Service"
import axios from "axios"
import { ClipLoader } from "react-spinners"

function FormCategoria() {
	// Objeto responsável por redirecionar a categoria para outra rota
	const navigate = useNavigate()

	// Estado responsável por controlar o loader (animação de carregamento)
	const [isLoading, setIsLoading] = useState<boolean>(false)

	// Estado responsável por armazenar os dados da categoria que será persistida no Backend (API)
	const [categoria, setCategoria] = useState<Categoria>({} as Categoria)

	// Acessar o parâmetro da rota (id da categoria)
	const { id } = useParams<{ id: string }>()

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
	useEffect(() => {
		if (id !== undefined) {
			buscarCategoriaPorId()
		}
	}, [id])

	// Função responsável por atualizar o estado categoria
	function atualizarEstado(e: ChangeEvent<HTMLInputElement>) {
		setCategoria({
			...categoria,
			[e.target.name]: e.target.value,
		})
	}

	// Função responsável por enviar uma requisição do tipo POST ou PUT
	// com os dados da categoria (estado categoria)
	async function gerarNovaCategoria(e: SyntheticEvent<HTMLFormElement>) {
		// Impede o envio automático do formulário
		e.preventDefault()

		setIsLoading(true)

		if (id !== undefined) {
			try {
				await atualizar(`/categorias`, categoria, setCategoria)
				alert("Categoria atualizada com sucesso!")
			} catch (error) {
				if (axios.isAxiosError(error)) {
					alert(`Erro ao atualizar a categoria (${error.response?.status})`)
				}
				return
			} finally {
				setIsLoading(false)
			}
		} else {
			try {
				await cadastrar(`/categorias`, categoria, setCategoria)
				alert("Categoria cadastrada com sucesso!")
			} catch (error) {
				if (axios.isAxiosError(error)) {
					alert(`Erro ao cadastrar a categoria (${error.response?.status})`)
				}
				return
			} finally {
				setIsLoading(false)
			}
		}

		retornar()
	}

	function retornar() {
		navigate("/categorias")
	}

	return (
		<div className="container flex flex-col items-center justify-center mx-auto">
			<h1 className="text-4xl text-center my-8">
				{id === undefined ? "Cadastrar" : "Editar"} Categoria
			</h1>

			<form className="w-1/2 flex flex-col gap-4" onSubmit={gerarNovaCategoria}>
				<div className="flex flex-col gap-2">
					<label htmlFor="tipo">Categoria</label>
					<input
						type="text"
						placeholder="Digite o nome da categoria"
						name="tipo"
						className="border-2 border-slate-700 rounded p-2"
						value={categoria.tipo}
						onChange={(e: ChangeEvent<HTMLInputElement>) => atualizarEstado(e)}
					/>
				</div>
				<button
					className="rounded text-slate-100 bg-indigo-400 
                    hover:bg-indigo-800 w-1/2 py-2 mx-auto flex justify-center cursor-pointer"
					type="submit"
				>
					{isLoading ? (
						<ClipLoader color="#ffffff" size={24} />
					) : (
						<span>{id === undefined ? "Cadastrar" : "Atualizar"}</span>
					)}
				</button>
			</form>
		</div>
	)
}

export default FormCategoria