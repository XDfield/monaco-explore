import * as React from "react";
import MonacoEditor from "react-monaco-editor";

interface IState {
  code: string;
}

export class CodeEditor extends React.Component<{}, IState> {
  public editor: any;

  constructor(props: any) {
    super(props);
    this.state = {
      code: "// type your code... \n"
    };
  }

  public onChange = (newValue: string, e: any) => {
    // tslint:disable-next-line:no-console
    console.log("onChange", newValue, e);
  };

  public editorDidMount = (editor: any) => {
    // tslint:disable-next-line:no-console
    console.log("editorDidMount", editor, editor.getValue(), editor.getModel());
    this.editor = editor;
  };

  public changeEditorValue = () => {
    if (this.editor) {
      this.editor.setValue("// code changed! \n");
    }
  };

  public changeBySetState = () => {
    this.setState({ code: "// code changed by setState! \n" });
  };

  public render() {
    const { code } = this.state;
    const options = {
      automaticLayout: false,
      cursorStyle: "line",
      readOnly: false,
      roundedSelection: false,
      selectOnLineNumbers: true
    };
    return (
      <div>
        <MonacoEditor
          height="500"
          language="javascript"
          value={code}
          options={options}
          onChange={this.onChange}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}
