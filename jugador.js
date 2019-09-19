import Dado from "./dado.js";

export default class Jugador 
{
    constructor(nombre, posicion = 0)
    {
        this._posicion = posicion;
        this._dado = new Dado();
        this._nombre = nombre;
    }

    get posicion()
    {
        return this._posicion;
    }

    get nombre()
    {
        return this._nombre;
    }

    avanzar()
    {
        this._posicion += this._dado.tirar();
    }

    moveBySpecialSquare(bonus) {
        this._position += bonus;
    }

    toString()
    {
        if(this._posicion >= 100)
        {
            return `El jugador ${this._nombre} está en la posición: 100`;
        }
        else 
        {
            return `El jugador ${this._nombre} está en la posición: ${this._posicion}`;
        }
    }
}