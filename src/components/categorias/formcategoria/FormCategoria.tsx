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
	const [categoria, setCategoria] = useState<Categoria>({ id: 0, tipo: "", descricao: "" })

	// Acessar o parâmetro da rota (id da categoria)
	const { id } = useParams<{ id: string }>()

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
	useEffect(() => {
		if (id !== undefined) {
			buscarCategoriaPorId()
		}
	}, [id])

	// Função responsável por atualizar o estado categoria
	function atualizarEstado(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
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
				await atualizar(`/categoria`, categoria, setCategoria)
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
				const novaCategoria = { tipo: categoria.tipo, descricao: categoria.descricao }
				await cadastrar(`/categoria`, novaCategoria, setCategoria)
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
		<div className="category-form-page">
			<div className="category-form-heading"><span className="section-kicker">Organização do cardápio</span><h1>{id === undefined ? "Adicionar" : "Editar"} categoria</h1><p>Preencha os dados que serão exibidos no cardápio.</p></div>

			<form className="category-form" onSubmit={gerarNovaCategoria}>
				<div className="category-form-fields">
					<label htmlFor="tipo">Tipo<input id="tipo" type="text" placeholder="Ex.: Pizza" name="tipo" value={categoria.tipo} onChange={atualizarEstado} required /></label>
					<label htmlFor="descricao">Descrição<textarea id="descricao" placeholder="Descreva esta categoria" name="descricao" value={categoria.descricao} onChange={atualizarEstado} rows={4} required /></label>
				</div>
				<button className="category-form-submit" type="submit">
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