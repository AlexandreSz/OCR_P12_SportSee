import { userData, activityData, sessionData, performanceData } from "./classModelisation";
const url = "http://localhost:3000/user";

export const getData = async (id, category) => {
    let dataURL = category ? url + `/${id}/${category}/` : url + `/${id}/`;
    const data = await fetch(dataURL);
    const fetchData = await data.json();
    
    switch(category){
        case "activity": return new activityData(fetchData.data);
        case "average-sessions": return new sessionData(fetchData.data);
        case "performance": return new performanceData(fetchData.data);
        default: return new userData(fetchData.data);
    }
}