class Jogo {

    id;
    jogadores;
    cargos;
    rodada;
    tempo;
    objetivo;

    constructor(id, jogadores, cargos, rodada, tempo, objetivo) {

        this.id = id;
        this.jogadores = jogadores;
        this.cargos = cargos;
        this.rodada = rodada;
        this.tempo = tempo;
        this.objetivo = objetivo;
    }
}

export default Jogo;