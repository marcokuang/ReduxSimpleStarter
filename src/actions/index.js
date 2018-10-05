export function selectBook(book){
    // console.log('A book is selected: ' + book.title);
    //selectBook is an action creator, it needs to return an action, object with a type property
    // payload has more information about the returned object.
    return {
        type: 'BOOK_SELECTED',
        payload: book
    }
}