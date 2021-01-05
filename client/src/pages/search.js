import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Jumbotron from "../components/Jumbotron";
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";
import { Form, Input, SearchBtn } from "../components/Form";
import API from "../utils/API";
import apiSearch from "../utils/googlebook";

function SearchBooks() {
  const [books, setBooks] = useState([]);
  const [bookSearch, setBookSearch] = useState("");

  useEffect(() => {
    loadBooks();
  }, []);

  

  function loadBooks() {
    API.getBooks()
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  function handleInputChange(event) {
    const { value } = event.target;
    setBookSearch(value);
  }

  function handleSearch() {
    SearchBooks(bookSearch)
  }

  function handleFormSubmit(event) {
    event.preventDefault();
    API.saveBook(bookSearch)
      .then((res) => setBooks(res.data))
      .catch((err) => console.log(err));
  }

  return (
    <Container fluid>
      <Row>
        <Col size="md-6 sm-12">
          <Jumbotron />
          <Form>
            <Input name="BookSearch" value={bookSearch} onChange={handleInputChange} />
            <SearchBtn onClick={handleSearch}>Search</SearchBtn>
          </Form>
        </Col>
        <Col size="md-6 sm-12">
          <Jumbotron>
            <h1>Results</h1>
          </Jumbotron>
          {books.length} ? (
          <BookList>
            {books.map((book) => (
              <BookListItem key={book._id}>
                <Link>
                  <strong>{book.title}</strong>
                </Link>
                <h3>{book.author}</h3>
                <h3>{book.description}</h3>
              </BookListItem>
            ))}
          </BookList>
          ) : (<h3>No Results to Display</h3>)
        </Col>
      </Row>
    </Container>
  );
}
export default SearchBooks;
