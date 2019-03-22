import React, { Component } from "react";
import styled from "styled-components";
import { Checkbox, Upload, Icon, message } from "antd";

const Dragger = Upload.Dragger;

const props = {
    name: "file",
    multiple: true,
    action: "//jsonplaceholder.typicode.com/posts/",
    onChange(info) {
        const status = info.file.status;
        if (status !== "uploading") {
            console.log(info.file, info.fileList);
        }
        if (status === "done") {
            message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === "error") {
            message.error(`${info.file.name} file upload failed.`);
        }
    }
};
class LessonCode extends Component {
    onChange = e => {
        console.log(`checked = ${e.target.checked}`);
    };
    render() {
        const {} = this.props;
        return (
            <Wrapper>
                <h3>Exercise: Building Your First Real World Application</h3>
                <div id="yui_3_17_2_1_1553253056004_46">
                    <div id="yui_3_17_2_1_1553253056004_45">
                        <react-component
                            name="ArticleAsset"
                            props="articleAssetComponentProps"
                            id="yui_3_17_2_1_1553253056004_44"
                        >
                            <div
                                data-reactroot=""
                                id="yui_3_17_2_1_1553253056004_43"
                            >
                                <div id="yui_3_17_2_1_1553253056004_42">
                                    <div id="yui_3_17_2_1_1553253056004_41">
                                        <p>
                                            <strong>Overview</strong>
                                        </p>
                                        <p id="yui_3_17_2_1_1553253056004_48">
                                            In the previous exercise, you built
                                            your first Spring Boot application
                                            from scratch. In this exercise, we
                                            are going to take some of the tools
                                            and concepts we learned in the
                                            section and build a more
                                            full-featured web application.
                                        </p>
                                        <p>
                                            <strong>Exercise</strong>
                                        </p>
                                        <ul>
                                            <li>
                                                Use The Spring Initializr to
                                                create your project template
                                            </li>
                                            <li>You can use Maven or Gradle</li>
                                            <li>You can use Java or Groovy</li>
                                            <li>Add the Web dependency</li>
                                            <li>Run the program</li>
                                            <li>
                                                Create a controller with 1 or
                                                more routes
                                            </li>
                                            <li>
                                                Run the program and test those
                                                routes
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </react-component>
                    </div>
                </div>

                <ul>
                    <li>
                        <Checkbox onChange={this.onChange}>Ex1</Checkbox>
                    </li>

                    <li>
                        <Checkbox onChange={this.onChange}>Ex2</Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={this.onChange}>Ex3</Checkbox>
                    </li>
                    <li>
                        <Checkbox onChange={this.onChange}>Ex4</Checkbox>
                    </li>
                </ul>

                <Dragger {...props}>
                    <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">
                        Click or drag file to this area to upload
                    </p>
                    <p className="ant-upload-hint">
                        Support for a single or bulk upload. Strictly prohibit
                        from uploading company data or other band files
                    </p>
                </Dragger>
            </Wrapper>
        );
    }
}
export default LessonCode;

const Wrapper = styled.div`
    list-style-type: none;
    padding: 1.5em;
    background: #fff;
    height: 100vh;
`;

const ul = styled.ul`
    list-style-type: none;
`;
