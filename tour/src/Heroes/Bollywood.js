import React from 'react';
import './Heroes.css'
import ReactDOM from "react-dom";
import { ListViewComponent } from '@syncfusion/ej2-react-lists';
// import {ListView} from '@syncfusion/ej2-lists';    

import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
export default class Bollywood extends React.Component {

    constructor() {
        super(...arguments);
        this.listviewInstance = null;
        // define the array of Json
        this.dataSource = [
            { text: "Hritik Roshan", id: "1", icon: "delete-icon" },
            { text: "Akshay Kumar", id: "2", icon: "delete-icon" },
            { text: "Salman Khan", id: "3", icon: "delete-icon" },
            { text: "Shahid Kapoor", id: "4", icon: "delete-icon" },
            { text: "Amir Khan", id: "list-5", icon: "delete-icon" },
            { text: "Jubin Nautiyal", id: "6", icon: "delete-icon" }
        ];
        this.fields = { text: "text", iconCss: "icon" };
    }

    listTemplate(data) {
        return (<div className="text-content">
            {data.text}
            <span className="delete-icon" onClick={this.deleteItem.bind(this)} />
        </div>);
    }

    addItem() {
        let data = {
            text: "Hritik Roshan - " + (Math.random() * 1000).toFixed(0),
            id: (Math.random() * 1000).toFixed(0).toString(),
            icon: "delete-icon"
        };
        this.listviewInstance.addItem([data]);
    }

    deleteItem(args) {
        args.stopPropagation();
        let liItem = args.target.closest('li');
        this.listviewInstance.removeItem(liItem);
    }

    render() {
        return (
            <div>
                <ListViewComponent id="sample-list" dataSource={this.dataSource} fields={this.fields} template={this.listTemplate.bind(this)} ref={listview => {
                    this.listviewInstance = listview;
                }} />
                <ButtonComponent id="btn" onClick={this.addItem.bind(this)}>
                    Add Item
                </ButtonComponent>
            </div>
        );
    }
}