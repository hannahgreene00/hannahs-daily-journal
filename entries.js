const journalEntries = [ {

    id: 1,
    date: "07/05/2022",
    concept: "First day",
    entry: "I watched a lot of powerpoints today. My head kinda hurts.",
    mood: "Tired, but also excited"
},

{
    id: 2,
    date: "07/26/22",
    concept: "Html and css",
    entry: "A couple people in my group left the breakout room and I didn't know what was going on, so me and Kyle left class and we were told to come back to class. Lol oops.",
    mood: "Confused"

},
    
{
    id: 3,
    date: "07/27/22",
    concept: "Github",
    entry: "I accidentally messed up my group's code. I don't know how to fix it and I think my teammates are mad at me.",
    mood: "Discouraged"
},

{
    id: 4,
    date: "07/30/22",
    concept: "Presentation",
    entry: "I'm really anxious about the presentation. My portion of the website looks awful compared to everyone else's.",
    mood: "Anxious"
},

{
    id: 5,
    date: "08/02/2022",
    concept: "Javascript",
    entry: "I learned a lot of javascript stuff today. It almost made my head hurt and I got lost after awhile.",
    mood: "Tired"
},

{
    id: 6,
    date: "08/03/2022",
    concept: "Javascript",
    entry: "My stepdad used to be a web developer and today he's helping me with some of the foundation exercises.",
    mood: "Happy"
},

{
    id: 7,
    date: "08/04/2022",
    concept: "Javascript",
    entry: "First time meeting with my new group, we're going over for loops in our daily journal.",
    mood: "Tired, but also a excited to learn"
}
]

export const getJournalEntries = () => {
    const copyOfEntries = journalEntries
    return copyOfEntries
  }