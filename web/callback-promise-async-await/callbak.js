console.log('start');

function loginUser(id, pw, callback) {
    setTimeout(() => {
        callback({ name: 'james' });
    }, 2000);
}

function getTeams(userName, callback) {
    setTimeout(() => {
        callback([{ teamId: '11' }, { teamId: '22' }]);
    }, 2000);
}

function getTeamName(teamId, callback) {
    setTimeout(() => {
        callback({ teamName: 'teamA' });
    }, 2000);
}

// callback hell
loginUser('aa', 'bb', (user) => {
    console.log('login ok', user);
    getTeams(user.name, (teams) => {
        console.log('team list ok', teams);
        getTeamName(teams[0].teamId, (team) => {
            console.log('team info ok', team.teamName);
        })
    });
});

console.log('end');
