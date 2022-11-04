import axios from "axios";
import UserMainData from "../models/UserMainData";
import UserActivity from "../models/UserActivity";
import UserSession from "../models/UserSession";
import UserPerformance from "../models/UserPerformance";
import {USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_MAIN_DATA, USER_PERFORMANCE} from "../data/mockedData";

const ENV = "dev";

export const getUserMainData = async (id) => {
    if(ENV === "dev"){
        const data = USER_MAIN_DATA.find((element) => element.id.toString() === id);
        const user = new UserMainData(data);
        return user;
    } else {
        const data = await axios
                .get(`http://localhost:3000/user/${id}`)
                .then((response) => response.data.data);
        const user = new UserMainData(data);
        return user;         
    }
}

export const getUserActivity = async (id) => {
    if(ENV === "dev"){
        const data = USER_ACTIVITY.find((element) => element.userId.toString() === id);
        const activity = new UserActivity(data);
        return activity;
    } else {
        const data = await axios    
                .get(`http://localhost:3000/user/${id}/activity`)
                .then((response) => response.data.data);
        const activity = new UserActivity(data);
        return activity;
    }
}

export const getUserSession = async (id) => {
    if(ENV === "dev"){
        const data = USER_AVERAGE_SESSIONS.find((element) => element.userId.toString() === id);
        const sessions = new UserSession(data);
        return sessions;
    } else{
        const data = await axios
                .get(`http://localhost:3000/user/${id}/average-sessions`)
                .then((response) => response.data.data);
        const sessions = new UserSession(data);
        return sessions;
    }
}

export const getUserPerformance = async (id) => {
    if(ENV === "dev"){
        const data = USER_PERFORMANCE.find((element) => element.userId.toString() === id);
        const performance = new UserPerformance(data);
        return performance;
    } else {
        const data = await axios
                .get(`http://localhost:3000/user/${id}/performance`)
                .then((response) => response.data.data)
        const performance = new UserPerformance(data);
        return performance;
    }
}