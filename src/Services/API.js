export async function getUser(userId){
    const res = await fetch(`http://localhost:3000/user/${userId}`)
    const data = await res.json();
    const userName = data.data.userInfos.firstName;
    return userName;
}

export async function getMacro(userId){
    const res = await fetch(`http://localhost:3000/user/${userId}`)
    const data = await res.json();
    const macro = data.data.keyData;
    const calories = macro.calorieCount;
    const proteins = macro.proteinCount;
    const carbs = macro.carbohydrateCount;
    const lipids = macro.lipidCount;

    return [calories, proteins, carbs, lipids];

}

export async function getActivity(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/activity`)
    const data = await response.json()
    const userActivity = data.data.sessions
    userActivity.map((session, index) => (
        session.name = index + 1
    )) 
    return userActivity
}

export async function getSessions(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}/average-sessions`);
    const data = await response.json();
    const userSession = data.data.session;
    return userSession;
}

export async function getPerformance(userId){
    const res = await fetch(`http://localhost:3000/user/${userId}/performance`)
    const data = await res.json();
    const userPerformance = Object.values(data.data.kind);
    userPerformance.map((perf, i) => (
        data.data.data[i].perf = perf
    ))

    return data.data.data;
}

export async function getScore(userId){
    const response = await fetch(`http://localhost:3000/user/${userId}`);
    const data = await response.json();
    const userScore = [{"value" : 1, "fill" : "transparent"}, {"value": data.data.score ? data.data.score : data.data.todayScore, "fill": "red"}]

    let values = Object.values(userScore);
    let score = values.map(x => x.value)
    let percent = (score[1] * 100) + '%';

    return [userScore, percent]
}