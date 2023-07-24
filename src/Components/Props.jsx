import { Component } from "react";


class Props extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <table border={1}>
                <thead>
                    <tr>
                        <td>Grid</td>
                        <td>Name</td>
                        <td>Email</td>
                        <td>Password</td>
                        <td>Course</td>
                        <td>City</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.record.map((val) => {
                            return (
                                <tr key={val}>
                                    <td>{val.userid}</td>
                                    <td>{val.name}</td>
                                    <td>{val.email}</td>
                                    <td>{val.password}</td>
                                    <td>{val.course}</td>
                                    <td>{val.city}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        )
    }
}

export default Props;