export default class UserPerformance{
    constructor(perf, kind){
        this.id = perf.userId;
        this.kindOfPerf = this.translatePerf(kind);
        this.formatPerf = perf.data.map((performance, kind) => ({
            ...performance,
            kind: this.kindOfPerf[kind],
            value: performance.value
        }))
        // inverse le tableau formatPerf
        this.formatPerf.reverse();
    }

     /* JSDOC*/
    translatePerf(){
        const formatPerf = ["Cardio", "Energie", "Endurance", "Force", "Vitesse", "Intensité"];
        return formatPerf;
    }
}