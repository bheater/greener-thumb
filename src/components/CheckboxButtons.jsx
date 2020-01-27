import React, { useState } from 'react';
import { Button, ButtonGroup,Container, Row, Col } from 'reactstrap';

const Example = (props) => {
  const [cSelected, setCSelected] = useState([]);

  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }
  return (
    <div>
      <Container>
        <Row>
          <Col xs="6" s="4">
            <h5>Sun Exposure</h5>
            <ButtonGroup>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}> <img src="https://image.flaticon.com/icons/png/32/1163/1163662.png" alt="sunny" /> </Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}> <img src="https://image.flaticon.com/icons/png/32/1163/1163661.png" alt="partly-cloudy" /> </Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}> <img scr="https://image.flaticon.com/icons/png/32/1163/1163624.png" alt="cloudy" /> </Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
          <Col  s="8" m="8">
            <h5>Height</h5>
            <ButtonGroup>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>1 ft</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>1-3 ft</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>4-10 ft</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>11-20 ft</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(5)} active={cSelected.includes(5)}>21 ft</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
          <Col s="6">
            <h5>Bloom Color</h5>
            <ButtonGroup>
              <Button color="primary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>Blue</Button>
              <Button outline color="secondary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>White</Button>
              <Button color="success" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Green</Button>
              <Button outline color="info" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Purple</Button>
              <Button color="warning" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Yellow</Button>
              <Button outline color="danger" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Pink</Button>
              <Button color="danger" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>Red</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
          <Col s="6">
            <h5>USDA Hardiness Zone</h5>
            <ButtonGroup>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>1</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>2</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>3</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>4</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(5)} active={cSelected.includes(5)}>5</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(6)} active={cSelected.includes(6)}>6</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(7)} active={cSelected.includes(7)}>7</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(8)} active={cSelected.includes(8)}>8</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(9)} active={cSelected.includes(9)}>9</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(10)} active={cSelected.includes(10)}>10</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(11)} active={cSelected.includes(11)}>11</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(12)} active={cSelected.includes(12)}>Not Applicable</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Example;
