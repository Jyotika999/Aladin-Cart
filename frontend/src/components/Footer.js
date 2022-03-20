import React from 'react'
import {Container, Row, Col} from 'react-bootstrap'

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children; 
  }
}


const Footer = () => {
  return (
    <footer>
    <ErrorBoundary>
      <Container>
        <Row>
          <Col className='text-center py-3'>Copyright &copy; Aladin Cart</Col>

        </Row>
      </Container>
      </ErrorBoundary>
    </footer>
  )
}
export default Footer

