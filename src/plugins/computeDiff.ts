const diffPattern = /@@ -(\d+),\d+ \+(\d+),\d+ @@/;

interface IChanges {
  charChanges: [];
  modifiedEndLineNumber: number;
  modifiedStartLineNumber: number;
  originalEndLineNumber: number;
  originalStartLineNumber: number;
}

const parseDiff = (diff: string, ignoreTrimWhitespace: boolean) => {
  const changes: IChanges[] = [];

  const diffGroups = diff.split(diffPattern);
  if (diffGroups[0] === "") {
    diffGroups.shift();
  }

  let last = "";
  let originalEndLineNumber = 0;
  let modifiedEndLineNumber = 0;
  let modifiedStartLineNumber = 0;
  let originalStartLineNumber = 0;

  while (diffGroups.length >= 3) {
    let originalLine = parseInt(diffGroups.shift() as string, 10) - 1;
    let modifiedLine = parseInt(diffGroups.shift() as string, 10) - 1;

    const lines = (diffGroups.shift() as string).split("\n");
    lines.shift();

    for (const line of lines) {
      if (line.startsWith(" ") || line === "") {
        // normal line or end
        originalLine += 1;
        modifiedLine += 1;

        if (last === "-" || last === "+") {
          // end a block
          changes.push({
            charChanges: [],
            modifiedEndLineNumber,
            modifiedStartLineNumber,
            originalEndLineNumber,
            originalStartLineNumber
          });
        }

        last = " ";
      } else {
        // begin a block
        if (last === " " || last === "") {
          originalEndLineNumber = 0;
          modifiedEndLineNumber = 0;
        }
        if (line.startsWith("-")) {
          // original line
          originalEndLineNumber = originalLine += 1;
          if (last === " " || last === "") {
            originalStartLineNumber = originalLine;
            modifiedStartLineNumber = modifiedLine;
          }
          last = "-";
        } else if (line.startsWith("+")) {
          // modified line
          modifiedEndLineNumber = modifiedLine += 1;
          if (last === " " || last === "") {
            originalStartLineNumber = originalLine;
          }
          if (last !== "+") {
            modifiedStartLineNumber = modifiedLine;
          }
          last = "+";
        }
      }
    }

    // end line without \n
    if (lines.length > 0) {
      const endLine = lines.pop() as string;
      if (endLine !== "" && !endLine.startsWith(" ")) {
        changes.push({
          charChanges: [],
          modifiedEndLineNumber,
          modifiedStartLineNumber,
          originalEndLineNumber,
          originalStartLineNumber
        });
      }
    }
  }

  return changes;
};

const makeDiffComputationResult = (
  diff: string,
  ignoreTrimWhitespace: boolean
) => {
  return {
    changes: parseDiff(diff, ignoreTrimWhitespace),
    identical: false
  };
};

export const PlugIn = (editor: any) => {
  Object.defineProperties(editor, {
    _beginUpdateDecorations: {
      value(): void {
        this._beginUpdateDecorationsTimeout = -1;
      }
    },
    _beginUpdateDecorationsSoon: {
      value(): void {
        this._beginUpdateDecorationsTimeout = -1;
      }
    },
    setDiff: {
      value(diff: string): void {
        this._diffComputationToken++;

        try {
          this._diffComputationResult = makeDiffComputationResult(
            diff,
            this._ignoreTrimWhitespace
          );
          this._updateDecorationsRunner.schedule();
          this._onDidUpdateDiff.fire();
        } catch (error) {
          this._diffComputationResult = null;
          this._updateDecorationsRunner.schedule();
        }
      }
    }
  });
};
