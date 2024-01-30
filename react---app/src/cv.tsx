import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css'; // Import Bootstrap CSS
import { ListGroup, Container, Row, Col, Card } from 'react-bootstrap';
import myImage from './image/WhatsApp Image 2023-10-31 at 16.49.37.jpg';
const CV: React.FC = () => {
    const [selectedEntry, setSelectedEntry] = useState<string | null>(null);
  
    const entries = [
        {
            title: 'Personal Details and Photo',
            content: (
              <div>
                <h4>Mwangi Tevin Muchura</h4>
                <img src={myImage} alt="Your Photo" width="150" height="150" />
                <p>P.O Box 617-0100</p>
                <p>tmmwangi@usiu.ac.ke</p>
                <p>+254798365478</p>
              
              </div>
            ),
          },

      { title: 'Education Background', 
      content: (
        <div>
          <ul>
          <li>*Primary School: Nyeri GoodSheperd Academy* </li>
            <li>From Class 1 to Class 8 where i did my KCSE (2006-2014)</li>
            <li>*Pioneer International*- </li>
            <li>High School from form 1 to Form 4(2015-2018)</li>
            <li>*Bachelor of Science in Computer Science* </li>
            <li>United States  International University- (2021-2024)</li>
            

      </ul>
      </div>
      
      
      ), },

      { title: 'Special Skills', 
      content: (
        <div>
          <ul>
          <li> Programming Languages: Java, Python, C++</li>
          <li> Web Development: HTML, CSS, JavaScript</li>
          <li> Data Analysis: R, SQL</li>
          <li> Problem Solving</li>
          <li> Strong Communication Skills</li>

      
      
      </ul>
      </div>
      
      
      ), },

      { title: 'Extra Curriculum Activities', 
      content: (
        <div>
          <ul>
          <li> Member of the [University Name] Coding Club</li>
         <li> Volunteer at [Community Organization] </li>
         <li> Participated in the [University Name] Hackathon</li>
         <li> Organized and led coding workshops for fellow students</li>

      
      
      </ul>
      </div>
      
      
      ), },

      { title: 'Hobbies and Interests', 
      content: (
        <div>
          <ul>
          <li> Playing musical instruments: Guitar and Piano</li>
          <li> Photography</li>
          <li> Hiking and Outdoor Adventures</li>
          <li> Reading Science Fiction Novels</li>
          <li> Cooking and Culinary Experiments</li>

      </ul>
      </div>
      
      
      ),},
    ];
  
    const handleEntryClick = (title: string) => {
      setSelectedEntry(title);
    };
  
    return (
      <Container>
        <Row>
          <Col sm={4}>
            <ListGroup>
              {entries.map((entry, index) => (
                <ListGroup.Item
                  key={index}
                  action
                  onClick={() => handleEntryClick(entry.title)}
                >
                  {entry.title}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Col>
          <Col sm={8}>
            {selectedEntry ? (
              <Card>
                <Card.Header>{selectedEntry}</Card.Header>
                <Card.Body>{entries.find((entry) => entry.title === selectedEntry)?.content}</Card.Body>
              </Card>
            ) : (
              <p>Select an entry to view details.</p>
            )}
          </Col>
        </Row>
      </Container>
    );
  };
  
  export default CV;