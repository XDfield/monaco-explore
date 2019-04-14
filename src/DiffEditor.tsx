import * as React from "react";
import { MonacoDiffEditor } from "react-monaco-editor";
import "./DiffEditor.css";
import { diff, file, origin } from "./file";
import { PlugIn as diffEditorPlugIn } from "./plugins/computeDiff";

const editorOptions = {};

interface IState {
  fileContent: string;
  originalContent: string;
}

export class DiffEditor extends React.Component<{}, IState> {
  public editor: any;
  public navi: any;

  constructor(props: any) {
    super(props);
    this.state = {
      fileContent: "",
      originalContent: ""
    };
  }

  public editorDidMount = (editor: any, monaco: any) => {
    this.editor = editor;
    this.navi = monaco.editor.createDiffNavigator(this.editor, {
      followsCaret: true, // resets the navigator state when the user selects something in the editor
      ignoreCharChanges: true // jump from line to line
    });
    diffEditorPlugIn(this.editor);
  };

  public handleLoadBtn = () => {
    // tslint:disable-next-line: no-console
    this.originalEditor.setValue(origin);
    this.modifiedEditor.setValue(file);
    this.editor.setDiff(diff);
  };

  public handleGetBtn = () => {
    // tslint:disable-next-line:no-console
    console.log(this.editor._diffComputationResult);
    // tslint:disable-next-line:no-console
    console.log(diff);
  };

  public handleNaviPrev = () => {
    if (this.navi) {
      this.navi.previous();
    }
  };

  public handleNaviNext = () => {
    if (this.navi) {
      this.navi.next();
    }
  };

  get originalEditor() {
    return this.editor ? this.editor.getOriginalEditor() : null;
  }

  get modifiedEditor() {
    return this.editor ? this.editor.getModifiedEditor() : null;
  }

  public render() {
    const { fileContent, originalContent } = this.state;
    return (
      <div className="container">
        <div className="toolbar">
          <button onClick={this.handleLoadBtn}>load</button>
          <button onClick={this.handleGetBtn}>get</button>
          <button onClick={this.handleNaviPrev}>上一个</button>
          <button onClick={this.handleNaviNext}>下一个</button>
        </div>
        <MonacoDiffEditor
          height="calc(100% - 50px)"
          language="css"
          original={originalContent}
          value={fileContent}
          options={editorOptions}
          editorDidMount={this.editorDidMount}
        />
      </div>
    );
  }
}
