export default class Dado {
    tirar()
    {
        return Math.floor((Math.random() * 6 + 1));
    }
}