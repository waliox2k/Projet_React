import React, { Component } from 'react';
import { Card, CardBody, CardImg, CardText, CardTitle } from 'reactstrap';
import moment from 'moment' ;




class DishDetail extends Component {

    constructor(props) {
        super(props);

    }



    renderDish(dish) {
        if (dish != null) {
            return (
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            );
        }
        else {
            return (<div></div>);
        }


    }
    renderComments(comnt) {

        if (comnt != null) {
            const commments = comnt.map((cmnt) => {
                
                return (
                    <li>
                        <p>{cmnt.comment}</p>
                        <p>-- {cmnt.author} , {moment(cmnt.date).format('ll')}</p>
                    </li>
                )
            });

            return (
                <div className=" col-12 col-md-5  m-1">
                    <h4>Comments</h4>
                    <ul className="list-unstyled">
                        {commments}
                    </ul>

                </div>
            );

        }
        else {
            return (<div></div>);
        }
    }

    render() {

        return (

            <div className="row">
                <div className=" col-12 col-md-5  m-1">
                    {this.renderDish(this.props.dish)}
                </div>
                {this.renderComments(this.props.comment)}

            </div >
        );


    }
}

export default DishDetail;