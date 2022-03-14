console.log('start');

function loginUser(id, pw) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ name: 'james' });
        }, 3000);
    });
}

function getTeams(userName) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([{ teamId: '11' }, { teamId: '22' }]);
        }, 3000);
    });
}

function getTeamName(teamId) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve({ teamName: 'teamA' });
        }, 2000);
    });
}

// promise
loginUser('aa', 'bb')
    .then(user => {
        console.log('login ok', user);
        return getTeams(user.userName);
    })
    .then(teams => {
        console.log('team list ok', teams);
        return getTeamName(teams[0].teanId)
    })
    .then(team => {
        console.log('team info ok', team.teamName);
    });

console.log('end');
