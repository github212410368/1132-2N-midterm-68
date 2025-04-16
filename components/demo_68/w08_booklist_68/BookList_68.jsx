'use client';

import Book_68 from './Book_68';
import books_data from './booklist_data';

import Wrapper from '@/styles/wrappers/BookList_68';

const BookList_68 = () => {
  console.log('books_data', JSON.stringify(books_data));
  return (
    <Wrapper>
      <section className='booklist'>
        {books_data?.map((book) => {
          const { id, img, title, author } = book;
          return <Book_68 key={id} img={img} title={title} author={author} />;
        })}
      </section>
    </Wrapper>
  );
};

export default BookList_68;
