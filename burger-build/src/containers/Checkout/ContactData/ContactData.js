import React from "react";
import Button from "../../../components/UI/Button/Button"
import Classes from "./ContactData.module.css"

class ContactData extends React.Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        }
    }

    render () {
        return (
            <div className={Classes.ContactData }>
                <h4>Enter your Contact Data</h4>
                <form>
                    <input className={Classes.Input} type="text" name="name" placeholder="Your Name" />
                    <input className={Classes.Input} type="email" name="email" placeholder="Your Mail" />
                    <input className={Classes.Input} type="text" name="street" placeholder="Street" />
                    <input className={Classes.Input} type="text" name="postal" placeholder="Postal Code" />
                    <Button btnType="Success">ORDER</Button>
                </form>
            </div>
        );
    }
}

export default ContactData;