import Tablero from "./tablero.js";

export default class Juego {

    constructor()
    {
        this._ganador = 0;
        this._juegoTerminado = false;
        this._tablero = new Tablero();
    }

    get ganador()
    {
        return this._ganador;
    }

    iniciarJuego(jugador1, jugador2)
    {
        this._tablero.setTablero();
        do {
            jugador1.avanzar();
            console.log(jugador1.toString());
            this._revisar(jugador1);
            jugador2.avanzar();
            console.log(jugador2.toString());
            this._revisar(jugador2);
        } while (this._revisarLugar(jugador1, jugador2) === false);

        console.log(this._getGanador());
    }

    revisar(jugador)
    {
        let valorCasilla = this._tablero.casillas[jugador.posicion - 1];
        if (valorCasilla > 0)
        {
            console.log(`Jugador ${jugador.nombre} está en una casilla con escalera: +${valorCasilla}`);
            this._jugadorCasillaEspecial(jugador, valorCasilla);
        }
        else if (valorCasilla < 0)
        {
            console.log(`Jugador ${jugador.nombre} está en una casilla con serpiente:   +${valorCasilla}`);
            this._jugadorCasillaEspecial(jugador, valorCasilla);
        }
    }

    _jugadorCasillaEspecial(jugador, valor)
    {
        jugador.moveBySpecialSquare(valor);
        console.log(jugador.toString());
    }

    _revisarLugar(jugador1, jugador2)
    {
        if(jugador1.posicion >= 100)
        {
            this._juegoTerminado = true;
            this._ganador = `Jugador ${jugador.nombre}`;    
            return this._juegoTerminado;
        } 
        else if (jugador2.posicion >= 100)
        {
            this._juegoTerminado = true;
            this._ganador = `Jugador ${jugador.nombre}`;
            return this._juegoTerminado;
        }
        else {
            return this._juegoTerminado;
        }
    }

    getGanador()
    {
        return console.log("El ganador de la carrera es: " + this._ganador)
    }
}
