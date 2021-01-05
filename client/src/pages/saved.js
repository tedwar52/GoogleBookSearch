import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Nav from "../components/Nav";
import Jumbotron from "../components/Jumbotron"
import { Col, Row, Container } from "../components/Grid";
import { BookList, BookListItem } from "../components/BookList";

function SavedBooks() {

    const books = useState([]);

    useEffect(() => {
        loadBooks()
    }, []);

    function loadBooks() {

    };

    return (
        <Container fluid>
            <Row>
                <Col size="md-6 sm-12">
                    <Jumbotron />
                        <h1>My Saved Books</h1>
                    <BookList>
                        <BookListItem
                            key={books.title}
                            title={books.title}
                            author={books.author}
                            description={books.description}
                        />
                    </BookList>
                </Col>
            </Row>
        </Container>
    )
  }

  export default SavedBooks;