import {getJournalEntries} from './entries.js'

// for (const entries of journalEntry) {
//     console.log(entries);
//   }

// for (const entries of journalEntry) {
//     console.log(entries.concept);
// }

// for (const entries of journalEntry) {
//     if (entries.id %2 >0) {
//         console.log(entries)
//     }
// };
const cat = () => { 
    let html= ""
    const entry = getJournalEntries()
    for (let i = 0; i < entry.length; i++) {
        html += `<div class="taco">
        <p>${entry[i].concept}</p>
        <p>${entry[i].date}</p>
        <p>${entry[i].mood}</p>
        <p>${entry[i].entry}</p>
        </div>`
    }
    document.getElementById('entries').innerHTML = html

}
    
cat()
// getJournalEntries()
