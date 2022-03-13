console.log('start');

function loginUser(id, pw, callback) {
    setTimeout(() => {
        callback({name: 'james'});
    }, 3000);
}

function getUserTeams(user, callback) {
    setTimeout(() => {
        callback([{teamId: '11'}, {teamId: '22'}]);
    }, 3000);
}

function getTeam(teamId, callback) {
    setTimeout(() => {
        callback({teamName: 'teamA'});
    }, 2000);
}

// callback hell
loginUser('aa', 'bb', user => {
    console.log('login ok', user);
    getUserTeams(user, (teams) => {
        console.log('team list ok', teams);
        getTeam(teams[0].teamId, (team) => {
            console.log('team info ok', team.teamName);
        })
    });
});

console.log('end');
