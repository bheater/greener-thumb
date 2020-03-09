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
            <h5>Operator Age (age)</h5>
            <ButtonGroup>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(1)} active={cSelected.includes(1)}>34 or younger</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(2)} active={cSelected.includes(2)}>35-44</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(3)} active={cSelected.includes(3)}>45-54</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(4)} active={cSelected.includes(4)}>55-64</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(5)} active={cSelected.includes(5)}>65+</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>

          <Col  s="8" m="8">
            <h5>NASS region (n5reg)</h5>
            <ButtonGroup>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(6)} active={cSelected.includes(6)}>Atlantic</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(7)} active={cSelected.includes(7)}>South</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(8)} active={cSelected.includes(8)}>Midwest</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(9)} active={cSelected.includes(9)}>Plains</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(10)} active={cSelected.includes(10)}>West</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
          <Col s="6">
            <h5>Production Specialty (spec)</h5>
            <ButtonGroup>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(11)} active={cSelected.includes(11)}>Tobacco, cotton, peanuts</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(12)} active={cSelected.includes(12)}>Other field crops</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(13)} active={cSelected.includes(13)}>Cattle</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(14)} active={cSelected.includes(14)}>Dairy</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(15)} active={cSelected.includes(15)}>Hogs, poultry, other</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(16)} active={cSelected.includes(16)}>Vegetables</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(17)} active={cSelected.includes(17)}>Nursery and greenhouse</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(18)} active={cSelected.includes(18)}>All cash grains</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(19)} active={cSelected.includes(19)}>Specialty crops</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(20)} active={cSelected.includes(20)}>All other livestock</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
          <Col  s="8" m="8">
            <h5>Economic Class (sal)</h5>
            <ButtonGroup>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(21)} active={cSelected.includes(21)}>$100k</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(22)} active={cSelected.includes(22)}>$100k-$249,999</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(23)} active={cSelected.includes(23)}>$250k-$499,999</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(24)} active={cSelected.includes(24)}>$500k-$999,999</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(25)} active={cSelected.includes(25)}>$1M+</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
          <Col s="6">
            <h5>Farm Resource Region (Reg)</h5>
            <ButtonGroup>
  
              <Button color="secondary" onClick={() => onCheckboxBtnClick(27)} active={cSelected.includes(27)}>Heartland</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(28)} active={cSelected.includes(28)}>Northern Crescent</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(29)} active={cSelected.includes(29)}>Northern Great Plains</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(30)} active={cSelected.includes(30)}>Prarie Gateway</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(31)} active={cSelected.includes(31)}>Eastern Uplands</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(29)} active={cSelected.includes(29)}>Southern Seaboard</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(30)} active={cSelected.includes(30)}>Fruitful Rim</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(31)} active={cSelected.includes(31)}>Basin and Range</Button>
              <Button color="secondary" onClick={() => onCheckboxBtnClick(32)} active={cSelected.includes(32)}>Mississippi Portal</Button>
            </ButtonGroup>
            <p>Selected: {JSON.stringify(cSelected)}</p>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Example;
