import * as monacoApi from "monaco-editor/esm/vs/editor/editor.api";
import * as React from "react";

import { diff, file, origin } from "./file";
import { PlugIn as diffEditorPlugIn } from "./plugins/computeDiff";

import "./DiffEditor.css";

interface IState {
  renderWhitespace: "boundary" | "none";
}

export class DiffEditor extends React.Component<{}, IState> {
  public editorElement: HTMLDivElement;
  public editor: monacoApi.editor.IStandaloneDiffEditor;
  public navi: monacoApi.editor.IDiffNavigator | null;

  constructor(props: any) {
    super(props);

    this.state = {
      renderWhitespace: "boundary"
    };
  }

  public assignRef = (component: HTMLDivElement) => {
    this.editorElement = component;
  };

  public componentDidMount = () => {
    this.initMonaco();
  };

  public componentWillUnmount = () => {
    if (this.editor) {
      this.editor.dispose();
    }
  };

  public initMonaco = () => {
    if (this.editorElement) {
      this.editor = monacoApi.editor.createDiffEditor(this.editorElement, {
        readOnly: true,
        renderWhitespace: "boundary"
      });
      this.navi = monacoApi.editor.createDiffNavigator(this.editor, {
        followsCaret: true, // resets the navigator state when the user selects something in the editor
        ignoreCharChanges: true // jump from line to line
      });
      monacoApi.editor.setTheme("vs-dark");

      diffEditorPlugIn(this.editor);
    }
  };

  public updateModel(value: string, original: string, language: string) {
    const originalModel = monacoApi.editor.createModel(original, language);
    const modifiedModel = monacoApi.editor.createModel(value, language);
    this.editor.setModel({
      modified: modifiedModel,
      original: originalModel
    });
  }

  public handleLoadBtn = () => {
    this.updateModel(file, origin, "scss");
    (this.editor as any).setDiff(diff);
  };

  public handleGetBtn = () => {
    console.log("test");
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

  public handleToggleWhiteSpace = () => {
    const renderWhitespace =
      this.state.renderWhitespace === "none" ? "boundary" : "none";
    this.editor.updateOptions({ renderWhitespace });
    this.setState({ renderWhitespace });
  };

  get originalEditor() {
    return this.editor ? this.editor.getOriginalEditor() : null;
  }

  get modifiedEditor() {
    return this.editor ? this.editor.getModifiedEditor() : null;
  }

  public render() {
    return (
      <div className="container">
        <div className="toolbar">
          <button onClick={this.handleLoadBtn}>load</button>
          <button onClick={this.handleGetBtn}>get</button>
          <button onClick={this.handleToggleWhiteSpace}>
            toggle whitespace
          </button>
          <button onClick={this.handleNaviPrev}>上一个</button>
          <button onClick={this.handleNaviNext}>下一个</button>
        </div>
        <div
          ref={this.assignRef}
          style={{
            height: "calc(100% - 50px)",
            width: "100%"
          }}
          className="monaco-editor-container"
        />
      </div>
    );
  }
}
