/* eslint-disable-next-line */

interface bookListItem {
  id: string;
  title: string;
  image: string;
  price: number;
}

export const BOOK_LIST_MOCKS: Array<bookListItem> = [
  {
    id: '1',
    title: 'Geographys',
    image: '/assets/geography.jpg',
    price: 1.99,
  },
  {
    id: '2',
    title: 'Histories',
    image: '/assets/history.jpg',
    price: 2.5,
  },
  {
    id: '3',
    title: 'Maths',
    image: '/assets/math.jpg',
    price: 0.7,
  },
];

export default BOOK_LIST_MOCKS;
