export const defaultBoard = (numberOfLetters) => [
    new Array(numberOfLetters).fill(''),
    new Array(numberOfLetters).fill(''),
    new Array(numberOfLetters).fill(''),
    new Array(numberOfLetters).fill(''),
    new Array(numberOfLetters).fill(''),
    new Array(numberOfLetters).fill(''),
]

export const defaultFixture = {
    fixture: {
        id: 574447,
        referee: 'Damian Sylwestrzak, Poland',
        timezone: 'UTC',
        date: '2020-12-20T14:00:00+00:00',
        timestamp: 1608472800,
        periods: {
            first: 1608472800,
            second: 1608476400,
        },
        venue: {
            id: 1255,
            name: 'Stadion Miejski',
            city: 'Gliwice',
        },
        status: {
            long: 'Match Finished',
            short: 'FT',
            elapsed: 90,
        },
    },
    league: {
        id: 106,
        name: 'Ekstraklasa',
        country: 'Poland',
        logo: 'https://media.api-sports.io/football/leagues/106.png',
        flag: 'https://media.api-sports.io/flags/pl.svg',
        season: 2020,
        round: 'Regular Season - 14',
    },
    teams: {
        home: {
            id: 349,
            name: 'Piast Gliwice',
            logo: 'https://media.api-sports.io/football/teams/349.png',
            winner: null,
        },
        away: {
            id: 3491,
            name: 'Raków Częstochowa',
            logo: 'https://media.api-sports.io/football/teams/3491.png',
            winner: null,
        },
    },
    goals: {
        home: 0,
        away: 0,
    },
    score: {
        halftime: {
            home: 0,
            away: 0,
        },
        fulltime: {
            home: 0,
            away: 0,
        },
        extratime: {
            home: null,
            away: null,
        },
        penalty: {
            home: null,
            away: null,
        },
    },
}

export const defaultLineup = {
    team: {
        id: 349,
        name: 'Piast Gliwice',
        logo: 'https://media.api-sports.io/football/teams/349.png',
        colors: null,
    },
    coach: {
        id: 1220,
        name: 'W. Fornalik',
        photo: 'https://media.api-sports.io/football/coachs/1220.png',
    },
    formation: '4-2-3-1',
    startXI: [
        {
            player: {
                id: 40411,
                name: 'F. Plach',
                number: 26,
                pos: 'G',
                grid: '1:1',
            },
        },
        {
            player: {
                id: 40200,
                name: 'P. Malarczyk',
                number: 34,
                pos: 'D',
                grid: '2:4',
            },
        },
        {
            player: {
                id: 40203,
                name: 'B. Rymaniak',
                number: 28,
                pos: 'D',
                grid: '2:3',
            },
        },
        {
            player: {
                id: 40414,
                name: 'J. Czerwiński',
                number: 4,
                pos: 'D',
                grid: '2:2',
            },
        },
        {
            player: {
                id: 61237,
                name: 'J. Holúbek',
                number: 14,
                pos: 'M',
                grid: '2:1',
            },
        },
        {
            player: {
                id: 40425,
                name: 'T. Jodłowiec',
                number: 3,
                pos: 'M',
                grid: '3:2',
            },
        },
        {
            player: {
                id: 40343,
                name: 'M. Chrapek',
                number: 6,
                pos: 'M',
                grid: '3:1',
            },
        },
        {
            player: {
                id: 40428,
                name: 'P. Sokołowski',
                number: 18,
                pos: 'M',
                grid: '4:3',
            },
        },
        {
            player: {
                id: 40370,
                name: 'S. Milewski',
                number: 19,
                pos: 'M',
                grid: '4:2',
            },
        },
        {
            player: {
                id: 1078,
                name: 'J. Świerczok',
                number: 70,
                pos: 'F',
                grid: '4:1',
            },
        },
        {
            player: {
                id: 119203,
                name: 'D. Steczyk',
                number: 16,
                pos: 'F',
                grid: '5:1',
            },
        },
    ],
    substitutes: [
        {
            player: {
                id: 40420,
                name: 'Gerard Badía',
                number: 21,
                pos: 'M',
                grid: null,
            },
        },
        {
            player: {
                id: 96646,
                name: 'Tiago Alves',
                number: 7,
                pos: 'F',
                grid: null,
            },
        },
        {
            player: {
                id: 40448,
                name: 'P. Lipski',
                number: 17,
                pos: 'M',
                grid: null,
            },
        },
        {
            player: {
                id: 40591,
                name: 'M. Żyro',
                number: 11,
                pos: 'F',
                grid: null,
            },
        },
        {
            player: {
                id: 148448,
                name: 'A. Pyrka',
                number: 77,
                pos: 'M',
                grid: null,
            },
        },
        {
            player: {
                id: 40421,
                name: 'R. Borkała',
                number: 29,
                pos: 'M',
                grid: null,
            },
        },
        {
            player: {
                id: 61167,
                name: 'T. Huk',
                number: 5,
                pos: 'D',
                grid: null,
            },
        },
        {
            player: {
                id: 40412,
                name: 'J. Szmatuła',
                number: 1,
                pos: 'G',
                grid: null,
            },
        },
        {
            player: {
                id: 61179,
                name: 'K. Vida',
                number: 10,
                pos: 'M',
                grid: null,
            },
        },
    ],
}

export const convertToLatinLetters = function convert_accented_characters(str) {
    const conversions = {}
    conversions['ae'] = 'ä|æ|ǽ'
    conversions['oe'] = 'ö|œ'
    conversions['ue'] = 'ü'
    conversions['Ae'] = 'Ä'
    conversions['Ue'] = 'Ü'
    conversions['Oe'] = 'Ö'
    conversions['A'] = 'À|Á|Â|Ã|Ä|Å|Ǻ|Ā|Ă|Ą|Ǎ'
    conversions['a'] = 'à|á|â|ã|å|ǻ|ā|ă|ą|ǎ|ª'
    conversions['C'] = 'Ç|Ć|Ĉ|Ċ|Č'
    conversions['c'] = 'ç|ć|ĉ|ċ|č'
    conversions['D'] = 'Ð|Ď|Đ'
    conversions['d'] = 'ð|ď|đ'
    conversions['E'] = 'È|É|Ê|Ë|Ē|Ĕ|Ė|Ę|Ě'
    conversions['e'] = 'è|é|ê|ë|ē|ĕ|ė|ę|ě'
    conversions['G'] = 'Ĝ|Ğ|Ġ|Ģ'
    conversions['g'] = 'ĝ|ğ|ġ|ģ'
    conversions['H'] = 'Ĥ|Ħ'
    conversions['h'] = 'ĥ|ħ'
    conversions['I'] = 'Ì|Í|Î|Ï|Ĩ|Ī|Ĭ|Ǐ|Į|İ'
    conversions['i'] = 'ì|í|î|ï|ĩ|ī|ĭ|ǐ|į|ı'
    conversions['J'] = 'Ĵ'
    conversions['j'] = 'ĵ'
    conversions['K'] = 'Ķ'
    conversions['k'] = 'ķ'
    conversions['L'] = 'Ĺ|Ļ|Ľ|Ŀ|Ł'
    conversions['l'] = 'ĺ|ļ|ľ|ŀ|ł'
    conversions['N'] = 'Ñ|Ń|Ņ|Ň'
    conversions['n'] = 'ñ|ń|ņ|ň|ŉ'
    conversions['O'] = 'Ò|Ó|Ô|Õ|Ō|Ŏ|Ǒ|Ő|Ơ|Ø|Ǿ'
    conversions['o'] = 'ò|ó|ô|õ|ō|ŏ|ǒ|ő|ơ|ø|ǿ|º'
    conversions['R'] = 'Ŕ|Ŗ|Ř'
    conversions['r'] = 'ŕ|ŗ|ř'
    conversions['S'] = 'Ś|Ŝ|Ş|Š'
    conversions['s'] = 'ś|ŝ|ş|š|ſ'
    conversions['T'] = 'Ţ|Ť|Ŧ'
    conversions['t'] = 'ţ|ť|ŧ'
    conversions['U'] = 'Ù|Ú|Û|Ũ|Ū|Ŭ|Ů|Ű|Ų|Ư|Ǔ|Ǖ|Ǘ|Ǚ|Ǜ'
    conversions['u'] = 'ù|ú|û|ũ|ū|ŭ|ů|ű|ų|ư|ǔ|ǖ|ǘ|ǚ|ǜ'
    conversions['Y'] = 'Ý|Ÿ|Ŷ'
    conversions['y'] = 'ý|ÿ|ŷ'
    conversions['W'] = 'Ŵ'
    conversions['w'] = 'ŵ'
    conversions['Z'] = 'Ź|Ż|Ž'
    conversions['z'] = 'ź|ż|ž'
    conversions['AE'] = 'Æ|Ǽ'
    conversions['ss'] = 'ß'
    conversions['IJ'] = 'Ĳ'
    conversions['ij'] = 'ĳ'
    conversions['OE'] = 'Œ'
    conversions['f'] = 'ƒ'
    for (let i in conversions) {
        const re = new RegExp(conversions[i], 'g')
        str = str.replace(re, i)
    }
    return str
}
