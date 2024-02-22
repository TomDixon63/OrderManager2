export  class  Bestand  {
    public description: string;
    public lager: number;
    public today: number;
    public tommorow: number;
    public aftertommorow: number;
    public all: number;

    constructor() { 
        this.description = '';
        this.today = 0;
        this.tommorow = 0;
        this.aftertommorow = 0;
        this.all = 0;
    }
}