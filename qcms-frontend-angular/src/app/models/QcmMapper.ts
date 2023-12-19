import {Question} from "./Question";
import {QcmDetailsDto} from "./QcmDetailsDto";
import {QcmHomeDto} from "./QcmHomeDto";
import {Answer} from "./Answer";

export class QcmMapper {
  public static homeQcmFromJson(json: any): QcmHomeDto {
    return new QcmHomeDto(json.id, json.name, json.theme);
  }

  public static detailsQcmFromJson(json: any): QcmDetailsDto {
    return new QcmDetailsDto(json.id, json.name, json.theme, json.questions.map(QcmMapper.questionFromJson));
  }
  public static questionFromJson(json: any): Question {
    return new Question(json.id, json.name, json.answers.map(QcmMapper.answerFromJson));
  }

  public static answerFromJson(json: any): Answer {
    return new Answer(json.name, json.isCorrect);
  }
}
