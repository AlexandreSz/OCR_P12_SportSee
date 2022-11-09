export default class UserSession{
    constructor({sessions, userId}) {
        this.id = userId;
        this.sessions = this.weekDay(sessions.day);
        this.sessionData = sessions.map((session, index) => ({
            ...session,
            sessionLength: session.sessionLength,
            day: this.sessions[index]
        }))
    }

     /* JSDOC*/
    weekDay(){
        const formatDay = ["L", "M", "M", "J", "V", "S", "D"];
        return formatDay;
    }
}