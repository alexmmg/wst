import React from 'react'
import * as axios from "axios";
import remove from "../assets/img/body/remove.png"

class FileUpload extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            files: []
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.deleteFile = this.deleteFile.bind(this);
    }

    onFormSubmit(e) {
        e.preventDefault();
        this.fileUpload(this.state.files).then((response) => {
            console.log(response.data);
        })
        this.clearFileList()
    }

    onChange(e) {
        this.setState({files: [...this.state.files, ...e.target.files]});
    }

    deleteFile(e) {
        this.setState({files: this.state.files.filter(file => file.name !== e._targetInst.return.key)});
    }

    clearFileList() {
        this.setState({files: []});
    }

    fileUpload(file) {
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const formData = new FormData();
        formData.append('file', file);
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        return axios.post(url, formData, config)
    }

    render() {
        return (
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <input type="file" name="files" onChange={this.onChange} multiple/>
                <div className="mt-4">
                    {this.state.files &&
                    this.state.files.map(f =>
                        <div key={f.name}>
                            {f.name} <span key={f.name}><img onClick={this.deleteFile} className="removeImg"
                                                             src={remove} alt="Remove file"/></span>
                        </div>)
                    }
                </div>
                <button className="btn btn-outline-success mt-4 mb-4 mr-3" type="submit"
                        disabled={this.state.files.length === 0}>Upload
                </button>
                <span className="alert-danger">{this.state.files.length === 0 ? "Choose file(s)" : ""}</span>
            </form>
        )
    }
}

export default FileUpload;
