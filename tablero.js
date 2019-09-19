export default class Tablero {
    constructor()
    {  
        this._casillas = new Array(100).fill(0);
    }

    get casillas()
    {
        return this._casillas;
    }

    setTablero()
    {
        this._setSerpientes();
        this._setEscaleras();
    }

    _setEscaleras()
    {
        this._casillas[4] = 14;
        this._casillas[7] = 29;
        this._casillas[22] = 41;
        this._casillas[30] = 49;
        this._casillas[40] = 50;
        this._casillas[66] = 70;
        this._casillas[73] = 79;
        this._casillas[82] = 95;
        
    }

    _setSerpientes()
    {
        this._casillas[11] = -5;
        this._casillas[20] = -12;
        this._casillas[35] = -7;
        this._casillas[38] = -10;
        this._casillas[44] = -19;
        this._casillas[52] = -26;
        this._casillas[61] = -5;
        this._casillas[77] = -10;
        this._casillas[98] = -50;
    }

}