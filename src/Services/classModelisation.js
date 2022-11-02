class userData{
    constructor(data) {
        this.is = data.id;
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.age = data.age;
        this.todayScore = data.todayScore || data.score;
        this.calorie = data.keyData.calorieCount;
        this.protein = data.keyData.proteinCount;
        this.carb = data.keyData.carbohydrateCount;
        this.lipide = data.keyData.lipidCount;
    }
}

class activityData{
    constructor(data) {
        this.id = data.userId;
        this.sessions = data.sessions;
        this.day = data.sessions.day;
        this.kilogram = data.sessions.kilogram;
        this.calories = data.sessions.calories;
    }
}

class sessionData{
    constructor(data) {
        this.id = data.userId;
        this.sessions = data.sessions;
        this.day = data.sessions.day;
        this.sessionLength = data.sessions.sessionLength
    }
}

class performanceData{
    constructor(data) {
        this.data = data.data;
        this.kind = data.kind;
    }
}

export {userData, activityData, sessionData, performanceData}