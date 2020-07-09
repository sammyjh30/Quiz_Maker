const PLAYER_TYPES = [
    { name: 'Individual' },
    { name: 'Team' }
]

const DATA_STEP_1 = {
    quizName: { type: 'text', validations: { required: true }, errors: { required: 'Please provide quiz name' } },
    numberOfRounds: { type: 'number', validations: { required: true, minLength: 1 }, errors: {} },
    quizDate: { type: 'datetime', validations: { required: true }, errors: {} },
    multipleChoice: { type: 'checkbox' },
    trueFalse: { type: 'checkbox' }
}

const DATA_STEP_2 = {
    question: { type: 'text', validations: { required: true }, errors: {} },
    answer1: { type: 'text', validations: { required: true }, errors: {} },
    answer2: { type: 'text', validations: { required: true }, errors: {} },
    answer3: { type: 'text', validations: { required: true }, errors: {} },
    answer4: { type: 'text', validations: { required: true }, errors: {} },
    completeRound: { type: 'button', validations: {}, errors: {} },
    nextQuestion: { type: 'button', validations: {}, errors: {} }
}

const DATA_STEP_3 = {
    inviteHosts: { type: 'text', validations: {}, errors: {} },
    inviteModerators: { type: 'text', validations: {}, errors: {} },
    individual: { type: 'checkbox'},
    team: { type: 'checkbox'},
    minTeamSize: { type: 'number', validations: {}, errors: {} },
    maxTeamSize: { type: 'number', validations: {}, errors: {} },
    invitePlayers: { type: 'email', validations: {}, errors: {} },
    inviteLink: { type: 'url', validations: {}, errors: {} },
    copyInviteLink: { type: 'button', validations: {}, errors: {} },

}

const STEP_ITEMS = [
    { label: 'Step 1', data: DATA_STEP_1 },
    { label: 'Step 2', data: DATA_STEP_2 },
    { label: 'Step 3', data: DATA_STEP_3 },
    { label: 'Review & Submit', data: {} }
]

export { STEP_ITEMS }