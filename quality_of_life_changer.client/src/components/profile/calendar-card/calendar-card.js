import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class CalendarCard extends Component {
  copy = async () => {
    await navigator.clipboard.writeText(this.props.url);
  };

  render() {
    return (
      <Card className="custom-card">
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Body>
          <Card.Title>
            <Button onClick={this.copy}>Copy Calendar Link</Button>
          </Card.Title>
          <Card.Link href={this.props.url}>Download</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CalendarCard;
