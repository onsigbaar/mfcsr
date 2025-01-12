import {Card} from 'semantic-ui-react';
import BookCard from './book-card';
import {BOOK_LIST_MOCKS} from '@libreria/mocks';

export function BookList() {
  return (
    <Card.Group>
      {BOOK_LIST_MOCKS.map((book) => (
        <BookCard key={book.id} book={book}/>
      ))}
    </Card.Group>
  );
}

export default BookList;
