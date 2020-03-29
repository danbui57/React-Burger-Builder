import React from "react";
import Modal from "../../components/UI/Modal/Modal/Modal"
import Aux from "../Aux/Aux"

const withErrorHandler = (WrappedComponent, axios) => {
    return class extends React.Component {
        state = {
            error: null
        }

        componentDidMount() {
            axios.interceptors.request.use(req => {
                this.setState({ error: null });
                return req;
            });
            axios.interceptors.response.use(res => res, error => {
                this.setState({ error: error });
            });
        }

        errorConfirmedHandler = () => {
            this.setState({ error: null })
        }

        render() {
            return (
                <Aux>
                    <Modal show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                        Something didn't work!
            </Modal>
                    <WrappedComponent {...this.props} />
                </Aux>
            );

        }
    }
}

export default withErrorHandler;