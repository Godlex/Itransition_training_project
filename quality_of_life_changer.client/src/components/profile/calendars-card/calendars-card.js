import { Component } from "react";
import { Button, Card } from "react-bootstrap";

class CalendarCard extends Component {
  render() {
    const copy = async () => {
      await navigator.clipboard.writeText(this.props.url);
    };

    return (
      <Card className="custom-card">
        <Card.Header>{this.props.name}</Card.Header>
        <Card.Body>
          <Card.Title>
            <Button onClick={copy}>Copy Calendar Link</Button>
          </Card.Title>
          <Card.Link href={this.props.url}>Download</Card.Link>
        </Card.Body>
      </Card>
    );
  }
}

export default CalendarCard;
