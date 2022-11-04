export default class UserMainData{
    constructor(data) {
        this.id = data.id;
        this.firstName = data.firstName;
        this.todayScore = data.todayScore || data.score;
        this.score = this.getFormat(this.todayScore);
        this.keyData = data.keyData
    }

    getFormat(){
        return [{value: this.todayScore * 100}];
    }
}