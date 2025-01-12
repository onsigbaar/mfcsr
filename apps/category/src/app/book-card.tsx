import {useSessionStorage} from '@libreria/custom-hooks';
import {Button, Card, Image} from 'semantic-ui-react';

export function BookCard(bookData: any) {
  const {book} = bookData;
  const [basket, setBasket]: any = useSessionStorage('shoppingBasket', {});

  const addItem = (id: string) => {
    basket[id] = basket[id] ? basket[id] + 1 : 1;
    setBasket(basket);
  };

  const removeItem = (id: string) => {
    basket[id] = basket[id] <= 1 ? 0 : basket[id] - 1;

    setBasket(basket);
  };
  return (
    <Card>
      <Card.Content>
        <Image src={book.image}/>
        <Card.Header>{book.title}</Card.Header>
        <Card.Description>{book.description}</Card.Description>
        <Card.Header>${book.price}</Card.Header>
      </Card.Content>
      <Card.Content extra>
        <div className="ui three buttons">
          <Button basic color="red" onClick={() => removeItem(book.id)}>
            Remove
          </Button>
          <Button basic color="blue">
            {basket[book.id] || 0}
          </Button>
          <Button basic color="green" onClick={() => addItem(book.id)}>
            Add
          </Button>
        </div>
      </Card.Content>
    </Card>
  );
}

export default BookCard;
