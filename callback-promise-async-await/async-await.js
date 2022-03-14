console.log('start');

function loginUser(id, pw) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: 'james' });
        }, 2000);
    });
}

function getTeams(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ teamId: '11' }, { teamId: '22' }]);
        }, 2000);
    });
}

function getTeamName(teamId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ teamName: 'teamA' });
        }, 2000);
    });
}

// async, await
async function doLoginUser() {
    const user = await loginUser('aa', 'bb');
    console.log('login ok', user);
    const teams = await getTeams(user.userName);
    console.log('team list ok', teams);
    const team = await getTeamName(teams[0].teanId);
    console.log('team info ok', team.teamName);
}

doLoginUser();

console.log('end');
