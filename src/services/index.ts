export async function getSummary(notes: string) {
    try {
        const response = await fetch('/api/summarize?notes=' + encodeURIComponent(notes));
        const data = await response.json();
        return {summary: data.summary};    
    } catch(e) {
        console.error('Error fetching summary:', e);
        return {error: 'Failed to fetch summary'}; // Return an error object instead of throwing
    }
}

export async function getFlashcards(notes: string) {
    try {
        const response = await fetch('/api/flashcards?notes=' + encodeURIComponent(notes));
        const data = await response.json();        
        return {flashcards: data.flashcards};    
    } catch(e) {
        console.error('Error fetching flashcards:', e);
        return {error: 'Failed to fetch flashcards'}; // Return an error object instead of throwing
    }
}