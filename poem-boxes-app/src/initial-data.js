const initialData = {
    poems: {
        'poem-1': {
            id: 'poem-1',
            content:
                'If By Rudyard Kipling - If you can keep your head when all about you Are losing theirs and blaming it on you; If you can trust yourself when all men doubt you, But make allowance for their doubting too: If you can wait and not be tired by waiting, Or, being lied about,...'
        },
        'poem-2': {
            id: 'poem-2',
            content:
                'The Invitation By Oriah Mountain Dreamer - It does not interest me what you do for a living. I want to know what you ache for and if you dare to dream of meeting your heart is longing...'
        },
        'poem-3': {
            id: 'poem-3',
            content:
                'Have You Earned Your Tomorrow By Edgar Guest - Is anybody happier because you passed his way? Does anyone remember that you spoke to him today? This day is almost over, and its toiling time is through; Is there anyone to utter now a kindly word of you?...'
        },
        'poem-4': {
            id: 'poem-4',
            content:
                'Human Family By Maya Angelou - I note the obvious differences in the human family. Some of us are serious, some thrive on comedy...'
        }
    },
    columns: {
        'column-1': {
            id: 'column-1',
            title: 'To Read',
            poemIds: ['poem-1', 'poem-2', 'poem-3', 'poem-4']
        },
        'column-2': {
            id: 'column-2',
            title: 'In Progress',
            poemIds: []
        },
        'column-3': {
            id: 'column-3',
            title: 'Done',
            poemIds: []
        }
    },
    columnOrder: ['column-1', 'column-2', 'column-3']
};

export default initialData;
