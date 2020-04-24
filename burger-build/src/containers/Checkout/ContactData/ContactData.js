import React from "react";
import Button from "../../../components/UI/Button/Button"
import Classes from "./ContactData.module.css"
import axios from "../../../axios-orders"
import Spinner from "../../../components/UI/Spinner/Spinner"
import Input from "../../../components/UI/Input/Input"

class ContactData extends React.Component {
    state = {
        orderForm: {
            name: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your Name"
                },
                value: ""
            },
            street: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Street"
                },
                value: ""
            },
            zipCode: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "ZIP Code"
                },
            },

            country: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "country"
                },
                value: ""
            },
            email: {
                elementType: "input",
                elementConfig: {
                    type: "text",
                    placeholder: "Your E-mail"
                },
            },
            deliveryMethod:{
                elementType: "select",
                elementConfig: {
                    options: [{value: "Fastest", displayValue: "Fastest" },
                              {vale: "Cheapest", displayValue: "Cheapest"}]
                }
            }

        },
        loading: false
    }

    orderHandler = (event) => {
        event.preventDefault()
        //  alert("You continue!")
        this.setState({ loading: true })
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,

        }
        axios.post("/orders.json", order)
            .then(response => {
                this.setState({ loading: false });
                this.props.history.push("/");
            })
            .catch(error => {
                this.setState({ loading: false });
            });
    }

    render() {
        let form = (
            <form>
                <Input elementType="..." elementConfig="..." value="..."/>
                <Input inputtype="input" type="email" name="email" placeholder="Your Mail" />
                <Input inputtype="input" type="text" name="street" placeholder="Street" />
                <Input inputtype="input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className={Classes.ContactData}>
                <h4>Enter your Contact Data</h4>
                {form}
            </div>
        );
    }
}

export default ContactData;