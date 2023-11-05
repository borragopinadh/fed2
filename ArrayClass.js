import React, { Component } from 'react';
class ArrayClass extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {
                    name: "gopi",
                    marks: 100,
                    id: 1,
                },
                {
                    name:"sundar",
                    marks:95,
                    id:2,
                }
            ]
        };
    }
    render() {
        const { list } = this.state;
        return (
            <div>
                <table border="1">
                    <tr>
                        <th>Name</th>
                        <th>ID</th>
                        <th>Marks</th>
                    </tr>
                    {list.length > 0 && list.map((ele) => (
                        <tr key={ele.id}>
                            <th>{ele.name}</th>
                            <th>{ele.id}</th>
                            <th>{ele.marks}</th>
                        </tr>
                    ))}
                </table>
                
            </div>
        );
    }
}
export default ArrayClass;
