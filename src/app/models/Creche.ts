import {Local} from "../models/Local"
import {Servico} from "../models/Servico"

export interface Creche {
    id?: number
    dirImagem?: string
    nome: string
    avaliacao: number
    sobre: string
    horario: string
    faixaEtaria: string
    telefone: string
    servicos: Servico[]
    local: Local
}