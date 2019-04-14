import * as monacoApi from "monaco-editor/esm/vs/editor/editor.api";

export default (editor: monacoApi.editor.IEditor) => {
  const updateOptions = editor.updateOptions;

  Object.defineProperties(editor, {
    updateOptions: {
      value(newOpts: monacoApi.editor.IEditorOptions): void {
        updateOptions.apply(this, arguments);

        if (typeof newOpts.renderWhitespace !== "undefined") {
          if (newOpts.renderWhitespace !== "none") {
            console.log("render eol");
          }
        }
      }
    }
  });
};
