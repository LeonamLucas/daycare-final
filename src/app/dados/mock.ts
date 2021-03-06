import { Creche } from "../models/Creche";
import { Servico } from "../models/Servico";
import { Local } from "../models/Local";

export const MOCK: Creche[] = [
    {
        id: 1,
        dirImagem: "assets/img/creches/babykids.jpg",
        nome: "Baby Kids",
        avaliacao: 3.5,
        sobre: "Fundada em 2018, a Baky Kids conta com professoras especializadas e auxiliares, onde visamos um acompanhamento mais efetivo de cada criança. Contamos com um excelente espaço, além de passarmos a segurança que seu filho merece.",
        horario: "Segunda à sexta, de 8h às 22h",
        faixaEtaria: "0-5 anos",
        telefone: "(61) 3256-5569",
        servicos: [
            {
                icone: "assets/img/servicos/futebol.png",
                descricao: "Futebol"
            },
            {
                icone: "assets/img/servicos/music.png",
                descricao: "Educação Musical"
            }
        ],
        local: {
            endereco: "St. Sudoeste Superquadra Sudoeste 303/304 - Cruzeiro / Sudoeste / Octogonal, Brasília - Distrito Federal do Brasil, Brasilien",
            lat: -15.8004049,
            lon: -47.9278497
        }

    },
    {
        id: 2,
        dirImagem: "assets/img/creches/babies.jpg",
        nome: "Babies",
        avaliacao: 4.1,
        sobre: "Na Babies seu baby literalmente ficará mais feliz! Contamos com um exelente espaço, além de oferecermos os melhores serviços já existentes no mercado. Venha nos fazer uma visita!",
        horario: "Segunda à sexta, de 8h às 18h",
        faixaEtaria: "0-3 anos",
        telefone: "(61) 3325-4420",
        servicos: [
            {
                icone: "assets/img/servicos/natacao.png",
                descricao: "Natação"
            },
            {
                icone: "assets/img/servicos/capoeira.png",
                descricao: "Capoeira"
            }
        ],
        local: {
            endereco: "Gama, Brasília - Distrito Federal do Brasil, Brasilien",
            lat: -15.9665094,
            lon: -48.0452284
        }

    }
]