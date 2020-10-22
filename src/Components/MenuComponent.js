import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardImgOverlay, CardText, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null,
            Comment : null 

        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
        this.setState({ Comment: dish.comments })
    }

    renderDish(dish) {

        if (dish != null) {
            return (
                <div>
                    <Card>
                        <CardImg top src={dish.image} alt={dish.name}  />
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description} </CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        }
        else {
           return(
               <div></div>
           );
        }
    }

    render() {

        const menu = this.props.dishes.map((dish) => {
            return (
                <div onClick={() => this.onDishSelect(dish)} key={dish.id} className="col-12 col-md-5 ">
                    <Card >
                        <CardImg width="100%" src={dish.image} alt={dish.name} />

                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardBody>
                    </Card>
                </div>
            );
        });
        return (
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <DishDetail dish={this.state.selectedDish} comment={this.state.Comment}/>
            </div>

        );
    }
}

export default Menu;