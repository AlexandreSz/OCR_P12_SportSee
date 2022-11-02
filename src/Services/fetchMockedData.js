import { userData, activityData, sessionData, performanceData } from "./classModelisation";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../data/mockedData";


const getUser = id => {
    const data = USER_MAIN_DATA.find(value => value.id.toString() === id);
    const infos = new userData(data);
    return infos;
}

const getActivity = id => {
    const data = USER_ACTIVITY.find(value => value.userId.toString() ===  id);
    const infos = new activityData(data);
    return infos;
}

const getSession = id => {
    const data = USER_AVERAGE_SESSIONS.find(value => value.userId.toString() ===id);
    const infos = new sessionData(data);
    return infos;
}

const getPerformance = id => {
    const data = USER_PERFORMANCE.find(value => value.userId.toString() === id);
    const infos = new performanceData(data);
    return infos;
}

export const getData = async (id, categorie) => {
    switch(categorie){
        case "activity" : return getActivity(id);
        case "average-sessions" : return getSession(id);
        case "performance" : return getPerformance(id);
        default : return getUser(id);
    }
}

