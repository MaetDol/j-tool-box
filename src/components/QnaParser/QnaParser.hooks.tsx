import { QnA } from "./QnaParser.models";

export function parseQnaString(input: string): QnA[] {
  try {
    const qnaStrings = input.replace(/\n+/g, "\n").split(/\n(?=Q\.)/);

    const qnaSet = qnaStrings.map((qnaString) => {
      const qna = qnaString.split(/\n(?=A\.)/);

      return {
        Q: qna[0].replace(/^Q\.\s*/, ""),
        A: qna[1].replace(/^A\.\s*/, ""),
      };
    });

    return qnaSet;
  } catch {
    return [];
  }
}
